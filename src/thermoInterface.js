$(document).ready(function() {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
  $('#current-temperature').text(data.main.temp);
})
  $('#current-city').change(function () {
    var city = $('#current-city').val();
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function (data) {
      $('#current-temperature').text(data.main.temp)
    })
  })
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
