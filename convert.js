var fs = require('fs'),
    util = require('util'),
    path = require('path'),
    fullpath = __dirname + '/contents',
    finder = require('findit').find(fullpath),
    xmldoc = require('xmldoc');

/* ********************************************
 * Read through each directory/file
 * ********************************************
 */
// finder.on('directory', function(dir, stat, stop) {
//     var base = path.basename(dir);

//     var newName = base.substring(3, base.length);
//     newName = newName.replace('_', '');
//     newName = newName.toLowerCase();

//     var newDir = dir.replace(base, newName);

//     if (typeof(parseInt(base.substring(0, 2))) != 'NaN') {
//         // hmmm
//     }
// });

finder.on('file', function(file, stat){
    // only convert XML files (not images etc)
    if (file.endsWith('page.xml')){
        convert(file, function(){
            // remove XML files (replaced by markdown)
            // fs.unlink(file, function(err){
            //     if (err) throw err;
            // });
        });
    }
});


// Check attributes of child nodes
function recur(child) {
    // make sure it's actually an element
    if (typeof(child) === "object") {

        var classes = '';
        var attributes = child.attr;
        var text = child.val;

        if (attributes['class']) classes = attributes['class'];
        
        // fix img src attr
        if (attributes['src.filename']) {
            var src = attributes['src.filename'];
            delete child.attr['src.path'];
            delete child.attr['src.filename'];

            attributes.src = src;
        }

        if (text.indexOf('160') >=0) {
            console.log(text);
        }

        // fix anchor href attr
        if (attributes['href.path']) {
            var path = attributes['href.path'];

            if (attributes['sugarset'] === 'true') {
                delete child.attr['sugarset'];
            }
            else {
                // remove extra / from url beginning
                path = path.substring(1, path.length);

                if (attributes['href.filename']) {
                    path += '/' + attributes['href.filename'];
                    delete child.attr['href.filename'];
                }

                delete child.attr['href.path'];

                attributes.href = path;
            }
        }

        // hide Mindtouch script calls
        if (child.name === 'pre' && child.val.indexOf('template(') >= 0) {
            attributes.class = attributes.class + ' mtscript hide';
            child.name = 'script';

            if (child.val.indexOf('MindTouch/IDF/SeeAlso') >= 0) {
                child.val = '';
                attributes.src = '/assets/js/related.js';
            }
        }

        // hide Mindtouch ToC comment
        // The following script renders the table of contents
        if (classes.indexOf('comment') >= 0) {
            if (child.val.indexOf('The following script renders the table of contents') >= 0
                ||
                child.val.indexOf('This section automatically lists related pages') >= 0) {
                attributes.class = classes + ' mtcomment hide';
            }
        }

        // continue for all children
        child.eachChild(function(c, i, a){
            recur(c);
        });
    }
}

// format header for md file
function header(obj){
    var str = "---\n";

    Object.keys(obj).forEach(function(key){
        var val = obj[key];
        val = val.replace(':', ' -');
        str += '' + key + ': ' + val + '\n';
    });

    str += "---\n\n";

    return str;
}

/* ********************************************
 * Convert page.xml to page.markdown
 * ********************************************
 */
function convert(filename, callback){
    fs.readFile(filename, function(err, data) {

        var dir = filename.replace(/page\.xml$/, '');

        data = data + '';
        data = data.replace(/&#160;/g, '&nbsp;');  // clear up bug that was messing up HTML

        var doc = new xmldoc.XmlDocument(data);
        var body = doc.firstChild;
        var saveName = "index.md";
        var permalink = dir.replace(__dirname, '') + 'index.html';

        body.attr = { "class": "article" };
        body.name = "section";

        body.eachChild(function(child, index, array){
            recur(child);
        });

        // set header attributes for md file
        var OUTPUT = header({ 
            'title': doc.attr.title,
            'template': 'page.jade'
        });
        
        OUTPUT += body;

        // save to md file
        fs.writeFile(dir + saveName, OUTPUT, function(err){
            if (err) throw err;
            console.log("Saved: " + dir + saveName);

            if (typeof(callback) === "function") callback.apply();
        });
    });
}


/* ********************************************
 * Helper functions
 * ********************************************
 */
String.prototype.endsWith = function(str){
    return this.match(str + '$') == str;
}