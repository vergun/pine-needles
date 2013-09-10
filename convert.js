var fs = require('fs'),
    util = require('util'),
    fullpath = __dirname + '/contents/articles/',
    finder = require('findit').find(fullpath),
    xmldoc = require('xmldoc');


/* ********************************************
 * Read through each directory/file
 * ********************************************
 */
finder.on('file', function(file, stat){
    // only convert XML files (not images etc)
    if (file.endsWith('page.xml')){
        convert(file, function(){
            // remove XML files (replaced by markdown)
            fs.unlink(file, function(err){
                if (err) throw err;
            });
        });
    }
});


// Check attributes of child nodes
function recur(child) {
    // make sure it's actually an element
    if (typeof(child) === "object") {
        
        // fix img src attr
        if (child.attr['src.filename']) {
            var src = child.attr['src.filename'];
            delete child.attr['src.path'];
            delete child.attr['src.filename'];

            child.attr.src = src;
        }

        // fix anchor href attr
        if (child.attr['href.path']) {
            var path = child.attr['href.path'];

            if (child.attr['href.filename']) {
                path += '/' + child.attr['href.filename'];
                delete child.attr['href.filename'];
            }

            delete child.attr['href.path'];

            child.attr.href = path;
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
        var doc = new xmldoc.XmlDocument(data);
        var body = doc.firstChild;
        var saveName = "index.md";
        var permalink = dir.replace(__dirname, '') + 'index.html';

        body.attr = { "class": "container" };
        body.name = "div";

        body.eachChild(function(child, index, array){
            recur(child);
        });

        // set header attributes for md file
        var OUTPUT = header({ 
            'title': doc.attr.title,
            'template': 'article.jade'
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