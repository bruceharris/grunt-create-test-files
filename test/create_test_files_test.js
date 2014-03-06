'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.create_test_files = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options_fooView: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/test/fixtures/foo/fooViewSpec.js');
    var expected = grunt.file.read('test/expected/fooViewSpec.js');
    test.equal(actual, expected, 'should match expected for fooView');

    test.done();
  },
  default_options_barView: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/test/fixtures/barViewSpec.js');
    var expected = grunt.file.read('test/expected/barViewSpec.js');
    test.equal(actual, expected, 'should match expected for barView');

    test.done();
  },
  custom_suffix_fooView: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/foo/fooViewTest.js');
    var expected = grunt.file.read('test/expected/customBasePathFooViewSpec.js');
    test.equal(actual, expected, 'should match expected for customBasePathFooViewSpec');

    test.done();
  },
  custom_suffix_barView: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/barViewTest.js');
    var expected = grunt.file.read('test/expected/customBasePathBarViewSpec.js');
    test.equal(actual, expected, 'should match expected for customBasePathBarViewSpec');

    test.done();
  },
  camelized: function(test) {
    test.expect(1);

    var actual = grunt.file.read('tmp/baz-view-test.js');
    var expected = grunt.file.read('test/expected/bazViewCamelizedSpec.js');
    test.equal(actual, expected, 'should match expected for camelized');

    test.done();
  }
};
