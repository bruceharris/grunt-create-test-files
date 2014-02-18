define(['test/fixtures/barView'], BarView) {

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