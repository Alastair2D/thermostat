$(document).ready(function() {
  thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature)
})

// $(document).ready(function () {
//   $('#temperature').text('hello jquery world');
// })

$('#temp_up').click(function() {
  thermostat.up()
  $('#temperature').text(thermostat.temperature)
})





