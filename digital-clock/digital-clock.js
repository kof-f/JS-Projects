  "use strict";
  
  function displayTime(){
    // initializing variables
    let date = new Date();
    let dayOfWeek;
    let hour;
    let min;
    let sec;
    let timeOfDay = "AM";

    let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    numOfDay = date.getDay();
    dayOfWeek = daysOfWeek[numOfDay];

    // converting the hours to standard time and setting AM to false if it's past noon
    if (date.getHours() == 0) {
      hour = 12;
    } else if (date.getHours() > 12) {
      timeOfDay = "PM";
      hour = date.getHours() - 12;
    } else if (date.getHours() < 10){
      hour = `0${date.getHours()}`;
    } else {
      hour = date.getHours();
    }

    // adding a 0 to the minutes if its less than 10
    min = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

    // adding a 0 to the seconds if its less than 10
    sec = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();

    let time = `${dayOfWeek}, ${hour}:${min}:${sec} ${timeOfDay}`;

    // copying time to the div (using inner text and text content to support 
    // Firefox and IE
    let digitalClock = document.getElementById("digital-clock");
    digitalClock.innerText = time;

    // call the displayTime method every 1000 milliseconds 
    setTimeout(displayTime, 1000);
  }
  displayTime();