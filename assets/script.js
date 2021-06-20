/*GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist*/


// DOM elements
var timeDisplayEl = $('#time-display');
var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
$('currentDay').html(rightNow);



$(document).ready(function () {
    $('.saveBtn').on('click', function () {       
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr('id');
        localStorage.setItem(time, text);
    })

//  local storage
$('#hour9.description').val(localStorage.getItem('hour9'));
$('#hour10.description').val(localStorage.getItem('hour10'));
$('#hour11.description').val(localStorage.getItem('hour11'));
$('#hour12.description').val(localStorage.getItem('hour12'));
$('#hour13.description').val(localStorage.getItem('hour13'));
$('#hour14.description').val(localStorage.getItem('hour14'));
$('#hour15.description').val(localStorage.getItem('hour15'));
$('#hour16.description').val(localStorage.getItem('hour16'));
$('#hour17.description').val(localStorage.getItem('hour17'));


})





// Display the time
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }




















// activates the timer that is contained in the header
  setInterval(displayTime, 1000);