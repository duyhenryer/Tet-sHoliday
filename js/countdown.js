// set the countdown date
var endDate = new Date('Jan 25, 2020 00:00:00').getTime() + (1000*3600*48); 
// variables for time units
var days, hours, minutes, seconds; 
// get tag element
var countdown = document.getElementById("tiles"); 

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

  // Get todays date and time
  var now = new Date().getTime();
  // Find the distance between now an the count down date
  var distance = endDate - now;

  // find the amount of "seconds" between now and target
	var current_date = new Date().getTime();
	var seconds_left = (endDate - current_date) / 1000;

	days = pad( parseInt(seconds_left / 86400) );
	seconds_left = seconds_left % 86400;
		 
	hours = pad( parseInt(seconds_left / 3600) );
	seconds_left = seconds_left % 3600;
		  
	minutes = pad( parseInt(seconds_left / 60) );
	seconds = pad( parseInt( seconds_left % 60 ) );
  
	// format countdown string + set tag value
	countdown.innerHTML = "<span>" + days + "</span><span>" + hours + "</span><span>" + minutes + "</span><span>" + seconds + "</span>"; 

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.innerHTML = "Happy New Year!";
  }

}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}