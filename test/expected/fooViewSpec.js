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
    describe('render', function() {
      beforeEach(function() {
        fooView.render();
      } )
      it('returns self', function() {
        expect(fooView.render()).to.equal(fooView);
      });
    });

  });
  
});