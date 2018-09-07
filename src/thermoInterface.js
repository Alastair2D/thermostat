$(document).ready(function() {
  thermostat = new Thermostat();
  showTemperature()
})

// $(document).ready(function () {
//   $('#temperature').text('hello jquery world');
// })

function showTemperature() {
  $('#temperature').text(thermostat.temperature)
}


$('#temp_up').click(function() {
  thermostat.up()
  showTemperature()
})





