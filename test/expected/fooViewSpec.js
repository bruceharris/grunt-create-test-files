define(['test/fixtures/foo/fooView'], FooView) {

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