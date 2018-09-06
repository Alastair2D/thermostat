describe('Thermostat', function () {
  var t1;

  beforeEach(function () {
    t1 = new Thermostat()
  })

  describe('#new', function() {
    it('defaults temperature at 20', function() {
      expect(t1.temperature).toEqual(20)
    })
  })

  describe('#up', function(){
    it('increases temperature by 1', function(){
      t1.up()

      expect(t1.temperature).toEqual(21)
    })
  })

  describe('#down', function() {
    it('decreases temperature by 1', function() {
      t1.down()

      expect(t1.temperature).toEqual(19)
    })
  })

})

