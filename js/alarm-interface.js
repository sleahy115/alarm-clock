// var Alarm = require('./../js/alarm.js').alarmModule;

$(document).ready(function(){
  var currentTime= moment().format('LT');
  // var currentDateTime= moment();
  console.log(currentTime);
  $('#time').text(currentTime);

  $('#alarmSet').submit(function (event) {
    event.preventDefault();
    var alarmTime = $('#timeSet').val()+ " AM";
    console.log(alarmTime);
    if(alarmTime === currentTime) {
      alert("this is the alarm going off!");
    }
    // var alarmDate = $('#dateSet').val();
    // var alarmSet = alarmDate + alarmTime;
    // console.log(alarmSet);
    // var alarm = moment(alarmSet).add(1, 'hours');
    // console.log(alarm);
  });
});
