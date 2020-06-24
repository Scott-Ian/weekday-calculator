import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";

$(document).ready(function() {
  $("form").submit(function() {
    event.preventDefault();
    let date = $("#date").val();
    $("#result").text(date);
  });
});