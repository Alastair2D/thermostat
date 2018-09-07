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

// Thermostat.prototype.toggle_PS_to_OFF
// Thermostat.prototype.toggle_PS_to_OFF


Thermostat.prototype.toggle_PS_mode = function() {
  if (this.powerSave === true) {
    this.powerSave = false 
    return
  } 
  if (this.powerSave === false && this.temperature > 25) { 
    this.temperature = 25
    this.powerSave = true
    return
  }
  if (this.powerSave === false && this.temperature <= 25) {
    this.powerSave = true
  } 
}

Thermostat.prototype.energyUsageMode = function() {
  if (this.temperature < 18) {
    return 'low'
  } 
  else if (this.temperature > 17 && this.temperature < 26 ) {
    return 'medium' 
  } 
  else {
    return 'high'
  }
}


