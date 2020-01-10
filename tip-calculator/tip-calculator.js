"use strict";

let tipForm = document.getElementById("wf-form-Tip-Form");

// initializing variables
let tipAmount;
let tipAmountPerGuest;

function tipCalculator(numOfGuests, totalAmountPaid, percentOfTip){
    /*** CALCULATE PERCENTAGE
     * Multiply the number by the percent (e.g. 87 * 68 = 5916)
     * Divide the answer by 100 (Move decimal point two places to the left) (e.g. 5916/100 = 59.16)
     */

    // handling edge cases
    if (numOfGuests < 1) {
        numOfGuests = 1;
    }

    // using the percentage formula to calculate the tip based on the tip percent entered
    tipAmount = (totalAmountPaid * percentOfTip) / 100;
    tipAmount = Math.round(100*tipAmount)/100;

    // calculate the amount each guest should tip
    tipAmountPerGuest = tipAmount / numOfGuests;
    tipAmountPerGuest = Math.round(100*tipAmountPerGuest)/100; 
}

function display(){
    let tipInformation = ["The total amount you should tip is: $" + tipAmount, 
    "Each guest should tip: $" + tipAmountPerGuest].join("\n");

    // copying new title to the form heading
    document.getElementById("form-heading").innerText = "Your tip information: ";
    document.getElementById("form-heading").textContent = "Your tip information: ";
    
    // styling the success msg using pre-defined classes
    let successMsg = document.getElementById("success-msg");
    successMsg.classList.add("title-paragraph");
    successMsg.style.whiteSpace = "pre";
    
    // copying tio information to the success msg
    successMsg.innerText = tipInformation;
    successMsg.textContent = tipInformation;
}

function startDisplay(){
    let percentOfTipData = document.getElementById("tipPercent").value;
    let numOfGuestsData = document.getElementById("numOfGuests").value;
    let totalAmountPaidData = document.getElementById("totalAmountPaid").value;

    // calculate tip and tip per guest
    tipCalculator(numOfGuestsData, totalAmountPaidData, percentOfTipData);

    // display the tip on the web page
    display();
}
tipForm.addEventListener('submit', startDisplay);