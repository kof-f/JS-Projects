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

    // calculate the amount each guest should tip
    tipAmountPerGuest = tipAmount / numOfGuests;
}

function display(){

    let tipInformation = ["The total amount you should tip is: $" + tipAmount, 
    "Each guest should tip: $" + tipAmountPerGuest].join("\n");

    console.log(tipInformation);
            
    // copying time to the div (using inner text and text content to support Firefox and IE
    document.getElementById(".clock-section").innerText = "Your tip information: " + tipInformation;
    document.getElementById(".clock-section").textContent = "Your tip information: " + tipInformation;
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