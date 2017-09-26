window.addEventListener('load', main);

function main()
{
  var now = new Date();
  var christmas = new Date('25 December 2017');


  var months = document.getElementById("months");
  var weeks = document.getElementById("weeks");
  var days = document.getElementById("days");
  var hours = document.getElementById("hours");
  var minutes = document.getElementById("minutes");
  var seconds = document.getElementById("seconds");

  var ms = new Date(christmas - new Date());

  var _second = 1000;
  var _minute = _second * 60;
  var _hour = _minute * 60;
  var _day = _hour * 24;

  // Initially set time
  refreshTime();

  window.setInterval(refreshTime, 1000);

  function refreshTime()
  {
    ms = new Date(christmas - new Date());
    days.innerHTML = Math.floor(ms / _day);
    hours.innerHTML = Math.floor((ms % _day) / _hour);
    minutes.innerHTML = Math.floor((ms % _hour) / _minute);
    seconds.innerHTML = Math.floor((ms % _minute) / _second);
  }
}
