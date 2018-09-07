$(document).ready(function() {
  thermostat = new Thermostat();
  showTemperature()
})

function showTemperature() {
  $('#temperature').text(thermostat.temperature)
  $('#temperature').attr('class', thermostat.energyUsageMode())
}

$('#temp_up').click(function() {
  thermostat.up()
  showTemperature()
})

$('#temp_down').click(function () {
  thermostat.down()
  showTemperature()
})

$('#reset').click(function () {
  thermostat.reset()
  showTemperature()
})

$('#ps_on').click(function () {
  thermostat.toggle_PS_mode()
  $('#ps_status').text('Power Saving: On')
  showTemperature()
})

$('#ps_off').click(function () {
  thermostat.toggle_PS_mode()
  $('#ps_status').text('Power Saving: Off')
  showTemperature()

})
