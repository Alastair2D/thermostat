function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20
  this.MINIMUM_TEMPERATURE = 10
  this.temperature = this.DEFAULT_TEMPERATURE
  this.powerSave = true 
  this.PS_ON_MAX_TEMP = 25
  this.PS_OFF_MAX_TEMP = 32 
}

Thermostat.prototype.reset = function() {
  this.temperature = this.DEFAULT_TEMPERATURE
};

Thermostat.prototype.up = function() {
  if (this.powerSave === true) {
    if (this.temperature >= this.PS_ON_MAX_TEMP) {
      return
    } else {
      this.temperature++
    }
  }
  else {
    if (this.temperature >= this.PS_OFF_MAX_TEMP){
      return
    } else {
      this.temperature++
    }
  }
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

