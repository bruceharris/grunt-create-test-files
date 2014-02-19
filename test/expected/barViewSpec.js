// path: test/fixtures/barView.js
// filename: barView.js
define(['test/fixtures/barView'], function(BarView) {
  'use strict';

  describe('test/fixtures/barView', function() {
    var barView;
    beforeEach(function() {
      barView = new BarView();
    });
    describe('constructor', function() {
    });
    describe('render', function() {
      beforeEach(function() {
        barView.render();
      } )
      it('returns self', function() {
        expect(barView.render()).to.equal(barView);
      });
    });

  });
  
});