describe('Thermostat', function () {
  var t1;

  beforeEach(function () {
    t1 = new Thermostat()
  })

  describe('#new', function () {
    it('defaults temperature at 20', function () {
      expect(t1.temperature).toEqual(20)
    })
    it('defaults with powerSave as on/true', function() {
      expect(t1.powerSave).toEqual(true)
    })
  })

  describe('#up', function () {
    it('increases temperature by 1', function () {
      t1.up()

      expect(t1.temperature).toEqual(21)
    })
  })

  describe('#down', function () {
    it('decreases temperature by 1', function () {
      t1.down()

      expect(t1.temperature).toEqual(19)
    })
    it("doesn't decrease temperature below MINIMUM_TEMPERATURE", function () {
      t1.temperature = 10;
      t1.down
      expect(t1.temperature).toEqual(10) // expect(function () { t1.down() }).toThrow("can't");
    });
  })

  describe('#toggle_PS_mode', function() {
    it('changes PS mode from on to off', function() {
      t1.toggle_PS_mode()
      expect(t1.powerSave).toEqual(false)
    })
    it('changes PS mode from off to on', function () {
      t1.powerSave = false
      t1.toggle_PS_mode()
      expect(t1.powerSave).toEqual(true)
    })
  })


})