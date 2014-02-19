// path: barView.js
// filename: barView.js
define(['barView'], function(BarView) {
  'use strict';

  describe('barView', function() {
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