### A Wintersmith plugin that converts Markdown to PDF ###
### First run `node convert` to convert xml to .md     ###       

fs          = require "fs"
markdownpdf = require "markdown-pdf" 
path        = require "path"


module.exports = (env, callback) ->

  class PdfPlugin extends env.ContentPlugin
    
    constructor: (@filepath) ->
      @outputPath = (path.dirname(filepath.full) + path.sep + path.basename(filepath.full, '.md') + '.pdf') 

    getFilename: ->
      @filepath.relative

    getView: -> (env, locals, contents, templates, callback) ->
      callback()
      
  PdfPlugin.fromFile = (filepath, callback) ->
    markdownpdf filepath.full, opts={}, (error, returnedPath) ->
      plugin = new PdfPlugin filepath      
      fs.rename returnedPath, plugin.outputPath unless error
      callback null, plugin
  
  env.registerContentPlugin 'markdown', '**/*.*(md|markdown)', PdfPlugin

  callback()