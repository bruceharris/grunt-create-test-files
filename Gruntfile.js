/*
 * grunt-create-test-files
 * https://github.com/bruce.harris/grunt-create-test-files
 *
 * Copyright (c) 2014 Bruce Harris
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>',
      ],
      options: {
        jshintrc: '.jshintrc',
      },
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    create_test_files: {
      default_options: {
        options: {
          templateFile: 'test/fixtures/viewSpec.template',
          destinationBasePath: 'tmp/'
        },
        files: {
          src: 'test/fixtures/**/*View.js'
        }
      },
      custom_basePath: {
        options: {
          templateFile: 'test/fixtures/viewSpec.template',
          destinationBasePath: 'tmp/',
          basePath: 'test/fixtures/'
        },
        files: {
          src: '**/*View.js'
        }
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'create_test_files', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
