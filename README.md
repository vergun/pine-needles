Pine_Needles
============

Static site generator for Pine

After `git clone`, run:

    npm install

Once packages are installed, you need to edit xmldoc.  Open node_modules/xmldoc/lib/xmldoc.js

Around line 123 you should see:

    if (trimVal.length > 25)
        trimVal = trimVal.substring(0,25).trim() + "…";

Comment out those lines (we don't want it to shorten our content during conversion).

You need to convert the content from Mindtouch XML files to Wintersmith recognizable markdown files.  Use convert.js script for this.

Run:

    node convert

This should convert the page.xml files in /content/articles to the appropriate markdown files.

Now, you can build the site.

	wintersmith build