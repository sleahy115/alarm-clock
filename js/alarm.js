var currentTime= moment().format('HH:mm');

function Alarm(setTime)
{
  this.setTime= setTime;
}

Alarm.prototype.setAlarm = function () {
  if(this.setTime === currentTime) {
    alert("this is the alarm going off!");
  }
};


// var options="";
//
// for (var i=1; i<=12; i++){
//   options += "<option>"+ i + "</option>";
// }
//
// document.getElementById('hours').innerHTML= options;
//



exports.alarmModule = Alarm;
