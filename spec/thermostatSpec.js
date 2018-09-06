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

  describe('#reset', function() {
    it('resets the temperature to DEFAULT_TEMPERATURE', function() {
      t1.temperature = 25
      t1.reset()
      expect(t1.temperature).toEqual(20)
    });
  });

  describe('#up', function () {
    describe('when powerSave mode is on', function() {
      it('increases temperature by 1', function () {
        t1.up()
        expect(t1.temperature).toEqual(21)
      })
      it('does not increase temperature over max', function() {
        t1.temperature = 25
        t1.up()
        expect(t1.temperature).toEqual(25) 
      })


    });
    describe('when powerSave mode is off', function () {
      it('increases temperature by 1', function () {
        t1.up()
        expect(t1.temperature).toEqual(21)
      })
      it('does not increase temperature over max', function () {
        t1.toggle_PS_mode()
        t1.temperature = 32
        t1.up()
        expect(t1.temperature).toEqual(32)
      })
    });
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

  describe('#energyUsageMode', function() {
    it('returns low when temperature below 18', function() {
      t1.temperature = 17
      expect(t1.energyUsageMode()).toEqual('low')
    })
    it('returns medium when temperature is between 18 and 25', function () {
      t1.temperature = 20
      expect(t1.energyUsageMode()).toEqual('medium')
    })
    it('returns high when temperature above 25', function () {
      t1.temperature = 27
      expect(t1.energyUsageMode()).toEqual('high')
    })
  })

})