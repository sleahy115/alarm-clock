var Alarm = require('./../js/alarm.js').alarmModule;
var api_key = 'AIzaSyAP7beQUlRl7983hsAyOEkfx6U3Q5M3Uv8';

$(document).ready(function(){
  var currentTime= moment().format('HH:mm');
  // var currentDateTime= moment();
  console.log(currentTime);
  $('#time').text(currentTime);

  $('#alarmSet').submit(function (event) {
    event.preventDefault();
    var alarmTime = $('#timeSet').val();
    var search = $('#search').val();
    var new_alarm = new Alarm (alarmTime, search);
    new_alarm.setAlarm();
  });
});
