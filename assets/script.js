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
$('#currentDay').html(rightNow);


// Save buttion for each time block
$(document).ready(function () {
    $('.saveBtn').on('click', function () {       
        var textInput = $(this).siblings('.col-md-10').val() 
        //.siblings(".time-period-one").val();
        var timeInput = $(this).parent().attr('id')
        // .parent().attr('.hour');
        console.log(textInput)        
        localStorage.setItem(timeInput, JSON.stringify(textInput));
        console.log(timeInput)
    })

      // each timeblock is color coded to indicate whether it is in the past , prsent, or future
     function timeRecorder() {
       var currentTime = moment().hour();
       $('.time-period-one').each(function () {
         var timePeriod = parseInt($(this).attr('id').split('hour')[1]);
         
        if (currentTime < timePeriod) {
          $(this).addClass('past');
          $(this).removeClass('future');
          $(this).removeClass('present');

        } else if (currentTime === timePeriod) {
          $(this).removeClass('past');
          $(this).addClass('future');
          $(this).removeClass('present');

        } else {
          $(this).removeClass('past');
          $(this).removeClass('future');
          $(this).addClass('present');
        }

       })       

     }   

//  local storage
$('#hour9 .col-md-10').val(JSON.parse(localStorage.getItem('hour9')));
$('#hour10 .col-md-10').val(JSON.parse(localStorage.getItem('hour10')));
$('#hour11 .col-md-10').val(JSON.parse(localStorage.getItem('hour11')));
$('#hour12 .col-md-10').val(JSON.parse(localStorage.getItem('hour12')));
$('#hour13 .col-md-10').val(JSON.parse(localStorage.getItem('hour13')));
$('#hour14 .col-md-10').val(JSON.parse(localStorage.getItem('hour14')));
$('#hour15 .col-md-10').val(JSON.parse(localStorage.getItem('hour15')));
$('#hour16 .col-md-10').val(JSON.parse(localStorage.getItem('hour16')));
$('#hour17 .col-md-10').val(JSON.parse(localStorage.getItem('hour17')));

timeRecorder();

})

// Display the time
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  }

// activates the timer that is contained in the header
  setInterval(displayTime, 1000);


  // testing local storage however not sure if its working
if(localStorage.getItem('email') !==null) {
  console.log('Email address exists');
} else {
  console.log('Email address not found');
}
