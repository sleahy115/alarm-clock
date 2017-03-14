var Alarm = require('./../js/alarm.js').alarmModule;

$(document).ready(function(){
  var currentTime= moment().format('HH:mm');
  // var currentDateTime= moment();
  console.log(currentTime);
  $('#time').text(currentTime);

  $('#alarmSet').submit(function (event) {
    event.preventDefault();
    var alarmTime = $('#timeSet').val();
    // var alarmDate = $('#dateSet').val();
    var new_alarm = new Alarm (alarmTime);
    new_alarm.setAlarm();

    // var alarmSet = alarmDate + alarmTime;
    // console.log(alarmSet);
    // var alarm = moment(alarmSet).add(1, 'hours');
    // console.log(alarm);
  });
});
