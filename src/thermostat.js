function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20
  this.MINIMUM_TEMPERATURE = 10
  this.temperature = this.DEFAULT_TEMPERATURE
  this.powerSave = true 
}

Thermostat.prototype.up = function () {
  this.temperature++                             //+=1
}

Thermostat.prototype.down = function () {
  if (this.temperature > this.MINIMUM_TEMPERATURE) {
    this.temperature--
  } else {
    return
  }

  // (this.temperature > this.MINIMUM_TEMPERATURE ? this.temperature -- : throw "can't")
}

