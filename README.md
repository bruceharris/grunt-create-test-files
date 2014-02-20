# grunt-create-test-files

> Creates a template based test file for every source file

The purpose of this grunt plugin is to dynamically create a test file for each JavaScript source file that is added to your project. The generated test file is based on a [lodash template](http://lodash.com/docs#template) that you provide, into which several properties based on the filename/path are made available for substitition. The path of the generated file will correspond to the directory structure of your source code tree. If necessary, new directories in your test tree will be created.

Recommended usage is to include this task in your grunt-contrib-watch tasks so test files will be created automatically as source files are added.

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
        basePath: 'root/path/of/src/dir/'
      },
      files: {
        src: 'glob/pattern/to/src/files/relative/to/basePath/option/e/g/**/*.js'
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

* `path`: full path (relative to `basePath` option) and filename of file under test
* `amdPath`: same as `path` with `*.js` suffix truncated
* `filename`: filename, without path, of file under test
* `name`: filename, without path, with `*.js` suffix truncated, of file under test
* `capitalizedName`: same as `name` with uppercase first character

#### options.sourceBasePath
Type: `String`
Default value: `'test/'`

The path to the root directory of where generated files will be created. The paths of the generated files, relative to this directory, will match the path of the corresponding source file, relative to the `basePath` option.

#### options.basePath
Type: `String`
Default value: `'main/'`

The path to the root directory of the source files to be matched. The filename match pattern provided in the `files` parameter must be relative to this path.

### Usage Examples

#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  create_test_files: {
    options: {},
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```

#### Custom Options
In this example, custom options are used to do something else with whatever else. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result in this case would be `Testing: 1 2 3 !!!`

```js
grunt.initConfig({
  create_test_files: {
    options: {
      separator: ': ',
      punctuation: ' !!!',
    },
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
