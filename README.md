# grunt-create-test-files

> Creates a template based test file for every source file

[![Build Status](https://travis-ci.org/bruceharris/grunt-create-test-files.png?branch=master)](https://travis-ci.org/bruceharris/grunt-create-test-files)

The purpose of this grunt plugin is to dynamically create a test file for each JavaScript source file that is added to your project. The generated test file is based on a [lodash template](http://lodash.com/docs#template) that you provide, into which several properties based on the filename/path are made available for substitition. The path of the generated file will correspond to the directory structure of your source code tree. If necessary, new directories in your test tree will be created.

Recommended usage is to include this task in your [grunt-contrib-watch](https://www.npmjs.org/package/grunt-contrib-watch) tasks so test files will be created automatically as source files are added.

Test files are only generated if a file with the target path does not exist; existing test files will not be replaced.

Note, you can specify different templates for different filename patterns, e.g. in a MV* project you may want a specific test template for view files that construct, render, etc. whereas for models or collections you may want a test template with a different pattern.

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-create-test-files --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-create-test-files');
```

## The "create_test_files" task

### Overview
In your project's Gruntfile, add a section named `create_test_files` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  create_test_files: {
    your_target: {
      options: {
        templateFile: 'path/to/your/template.file',
        destinationBasePath: 'root/path/of/test/dir/',
        sourceBasePath: 'root/path/of/src/dir/'
      },
      files: {
        src: 'glob/pattern/to/src/files/relative/to/sourceBasePath/option/e/g/**/*.js'
      }
    },
  },
});
```

### Options

#### options.templateFile
Type: `String`
*Required*

Path to the template to use to generate test files. File will be processed as a [lodash template](http://lodash.com/docs#template); the following properties (describing the source file under test) are provided to the template for substitution:

* `path` full path (relative to `sourceBasePath` option) and filename of file under test
* `amdPath` same as `path` with `*.js` suffix truncated
* `filename` filename, without path, of file under test
* `name` filename, without path, with `*.js` suffix truncated, of file under test
* `capitalizedName` same as `name` with uppercase first character

#### options.destinationBasePath
Type: `String`
Default value: `'test/'`

The path to the root directory of where generated files will be created. The paths of the generated files, relative to this directory, will match the path of the corresponding source file, relative to the `sourceBasePath` option.

#### options.sourceBasePath
Type: `String`
Default value: `'main/'`

The path to the root directory of the source files to be matched. The filename match pattern provided in the `files` parameter must be relative to this path.

#### options.testFileSuffix
Type: `String`
Default value: `'Spec.js'`

The filename of the generated test file is created by taking the name of the corresponding source file and replacing the trailing `'.js'` with the `testFileSuffix`. Thus with the default value, the test file for `main.js` will be named `mainSpec.js`

### Usage Examples

#### Default Options
This example assumes a file directory structure such as the below:
```
/
|-- Gruntfile.js
|-- main/
|   |-- index.js
|   |-- models/
|   |   +-- fooModel.js
|   |
|   +-- lib/
|       +-- myFavoriteMvcLib.js
|
+-- test/
    |-- indexSpec.js
    +-- models/
        +-- fooModelSpec.js
```

If `indexSpec.js` does not yet exist, it will be created. If the `test/models` directory does not yet exist, it will be created. Likewise for `fooModelSpec.js`


Given the configuration below:
```js
grunt.initConfig({
  create_test_files: {
    options: {
      templateFile: 'test/templates/spec.template',
    },
    files: {
      src: [
        'main/**/*.js',
        '!main/lib/**/*.js'
      ]
    },
  },
});
```

... and the content of `spec.template` as below:
```
// path: ${path}
// filename: ${filename}
define(['${amdPath}'], function(${capitalizedName}) {
  'use strict';

  describe('${amdPath}', function() {
    var ${name};
    beforeEach(function() {
      ${name} = new ${capitalizedName}();
    });
    describe('constructor', function() {
    });

  });
  
});
```

... the content of generated file `fooModelSpec.js` would look like:
```js
// path: test/fixtures/foo/fooView.js
// filename: fooView.js
define(['test/fixtures/foo/fooView'], function(FooView) {
  'use strict';

  describe('test/fixtures/foo/fooView', function() {
    var fooView;
    beforeEach(function() {
      fooView = new FooView();
    });
    describe('constructor', function() {
    });

  });
  
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
