describe("Thermostat", function() {
  var t1;

beforeEach(function() {
  t1 = new Thermostat();
})

describe('#new', function() {
  it('default starts at 20 degrees'), function() {
    expect(t1.temperature()).toEqual(20)  // Need red braces afer temperature?
  }
})

// describe('MINIMUM')

describe('#up', function() {
  it('increases the temperature by 1'), function() {
    expect(t1.up()).toEqual(21)
  }
})

  describe('#down', function () {
    it('decreases the temperature by 1'), function () {
      expect(t1.down()).toEqual(19)
    }
  })




});