function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20
  this.MINIMUM_TEMPERATURE = 10
  this.temperature = this.DEFAULT_TEMPERATURE
  this.powerSave = true 
  this.PS_ON_MAX_TEMP = 25
  this.PS_OFF_MAX_TEMP = 32 
}

Thermostat.prototype.up = function() {
  this.temperature++                             //+=1
}

Thermostat.prototype.down = function() {
  if (this.temperature > this.MINIMUM_TEMPERATURE) {
    this.temperature--
  } else {
    return
  }
} 

Thermostat.prototype.toggle_PS_mode = function() {
  if (this.powerSave === true) {
    this.powerSave = false 
  } else {
    this.powerSave = true
  } 
}

