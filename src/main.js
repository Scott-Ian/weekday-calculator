import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { Weekday } from "./../src/weekday.js";


function displayResult (weekDay) {
  if (weekDay.isValidDate) {
    $("#result").text(`The day of the week on ${weekDay.dateString} is: ${weekDay.dayOfWeek()}`);
  } else {
    $("#result").text(`Please enter a valid date in the form of: Month/Day/Year`);
  }
}


$(document).ready(function() {
  
  $("form").submit(function(event) {
    event.preventDefault();
    const date = $("#date").val();
    const weekDay = new Weekday(date);
    displayResult(weekDay);
  });

});