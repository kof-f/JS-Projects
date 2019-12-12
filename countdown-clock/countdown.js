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

    // converting millseconds to seconds, minutes, hours and days
    sec = Math.floor(remTime / 1000);
    min = Math.floor(sec / 60);
    hour = Math.floor(min / 60);
    day = Math.floor(hour / 24);

    hour %= 24;
    min %= 60;
    sec %= 60;

}

function display(eventName){
    
    // set eventName to "event" if it's not set
    if (eventName == ""){
        eventName = "event";
    }

    let timeRemaining = [day + " days", 
    hour + " hours",
    min + " minutes",
    sec + " seconds."].join("\n");

    console.log(timeRemaining);
            
    // copying time to the div (using inner text and text content to support Firefox and IE
    document.getElementById(".clock-section").innerText = "Countdown to " + eventName + ": " + timeRemaining;
    document.getElementById(".clock-section").textContent = "Countdown to " + eventName + ": " + timeRemaining; 
}

function startDisplay(){
    let eventNameData = document.getElementById("eventName").value;
    setInterval( function(){ countdown(); display(eventNameData); }, 1000);

}