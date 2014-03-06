/*
 * grunt-create-test-files
 * https://github.com/bruce.harris/grunt-create-test-files
 *
 * Copyright (c) 2014 Bruce Harris
 * Licensed under the MIT license.
 */

'use strict';

var _ = require('lodash'),
    camelize = require('camelize');

module.exports = function(grunt) {

  function truncateJsSuffix(name) {
    return name.replace(/.js$/i, '');
  }

  grunt.registerMultiTask('create_test_files', 'Creates a template based test file for every source file', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      testFileSuffix: 'Spec.js',
      destinationBasePath: 'test/',
      sourceBasePath: 'main/'
    });

    if (!options.templateFile) {
      throw new Error('templateFile option required');
    }
    var template = grunt.file.read(options.templateFile);

    // Iterate over all specified file groups.
    this.files.forEach(function(f) {
      // var src = f.src.filter(function(filepath) {
      var src = grunt.file.expand({ cwd: options.sourceBasePath }, f.orig.src);
      src.filter(function(filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(options.sourceBasePath + filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).forEach(function(filepath) {
        var filename = _(filepath.split('/')).last(),
            name = truncateJsSuffix(filename);
        var file = {
          path: filepath,
          amdPath: truncateJsSuffix(filepath),
          filename: filename,
          name: name,
          capitalizedName: name.charAt(0).toUpperCase() + name.slice(1),
          camelizedName: camelize(name) 
        };
        var dest = options.destinationBasePath + filepath.replace(/\.js$/i, options.testFileSuffix);
        if (!grunt.file.exists(dest)) {
          grunt.file.write(dest, _.template(template, file));
          grunt.log.writeln('File "' + dest + '" created.');
        }
      });

    });
  });

};