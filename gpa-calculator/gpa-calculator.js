
    // initializing variables
    let GPAScale = 4.0;
    let GPA;

    function GPACalculator(numOfAplus, numOfA, numOfAminus, numOfBplus, numOfB, numOfBminus,
    numOfCplus, numOfC, numOfCminus, numOfDplus, numOfD, numOfDminus, numOfF){

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

        // copying GPA info to the div (using inner text and text content to support Firefox and IE
        document.getElementById("event-tagline").innerText = "Your tip information: ";
        document.getElementById("event-tagline").textContent = "Your tip information: ";
        
        document.getElementById("tip-calculator-section").innerText = tipInformation;
        document.getElementById("tip-calculator-section").textContent = tipInformation;
    }

    function startDisplay(){
        let numOfAplus = document.getElementById("numOfAplus").value;
        let numOfA = document.getElementById("numOfA").value;
        let numOfAminus = document.getElementById("numOfAminus").value;
        let numOfBplus = document.getElementById("numOfBplus").value;
        let numOfB = document.getElementById("numOfB").value;
        let numOfBminus = document.getElementById("numOfBminus").value;
        let numOfCplus = document.getElementById("numOfCplus").value;
        let numOfC = document.getElementById("numOfC").value;
        let numOfCminus = document.getElementById("numOfCminus").value;
        let numOfDplus = document.getElementById("numOfDplus").value;
        let numOfD = document.getElementById("numOfA").value;
        let numOfDminus = document.getElementById("numOfDminus").value;
        let numOfF = document.getElementById("numOfF").value;
    

        // calculate the GPA from the grades entered
        GPACalculator(numOfAplus, numOfA, numOfAminus, numOfBplus, numOfB, numOfBminus,
            numOfCplus, numOfC, numOfCminus, numOfDplus, numOfD, numOfDminus, numOfF)

        // display the GPA on the web page
        display();
    }