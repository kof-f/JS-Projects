"use strict";

let countdownForm = document.getElementById("wf-form-Countdown-Form");

// initializing variables
let sec;
let min;
let hour;
let day;

    function countdown(){
        // initailizing to be used for the current time
        let now = new Date();

        // taking input from the form to create event date object
        let eventDateData = document.getElementById("eventDate").value;
        let eventDate = new Date(eventDateData);
        
        // convert the dates to millseconds to find the difference between the two dates
        let currentTime = now.getTime();
        let eventTime = eventDate.getTime();

        let remTime = eventTime - currentTime;

        // converting milliseconds to seconds, minutes, hours and days
        sec = Math.floor(remTime / 1000);
        min = Math.floor(sec / 60);
        hour = Math.floor(min / 60);
        day = Math.floor(hour / 24);

        hour %= 24;
        min %= 60;
        sec %= 60;

    }

    function display(eventName, h, m, s){
        // set eventName to "event" if it's not set
        if (eventName == ""){
            eventName = "event";
        }

        let timeRemaining = [day + " days", 
        hour + " hours",
        min + " minutes",
        sec + " seconds"].join("\n");
                
        // copying the event name to the form's heading
        document.getElementById("form-heading").innerText = "countdown to " + eventName;
        document.getElementById("form-heading").textContent = "Countdown to " + eventName;
        
        // adding styling to the success message and copying the time to it
        let successMsg = document.getElementById("success-msg");
        successMsg.style.whiteSpace = "pre";
        successMsg.classList.add("countdown-clock-num");
        successMsg.innerText = timeRemaining;
        successMsg.textContent = timeRemaining; 
    }

    function startDisplay(){
        let eventNameData = document.getElementById("eventName").value;
        setInterval( function(){ countdown(); display(eventNameData, hour, min, sec); }, 1000);
    }
countdownForm.addEventListener('submit', startDisplay);