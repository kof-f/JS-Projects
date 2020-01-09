
let GPAForm = document.getElementById("wf-form-GPA-Form");

// initializing variables
let totalNumOfClasses = 5;
let calculatedGPA;
let classInformation = {};
let displayClassInfo = [];

function addClasses(){

    btnHere = document.getElementById("btnAddClasses");
    let newClassFormDiv = document.createElement("div");
    let newClassFormDivVertical = document.createElement("div");
    let newClassFieldLabel = document.createElement("LABEL");
    newClassFormDiv.classList.add("form-div");
    newClassFormDivVertical.classList.add("form-div-vertical");
    newClassFieldLabel.classList.add("field-label.gpa-calc.small");
    newClassFieldLabel.innerText = "Class Name";
    
    newClassFormDivVertical.appendChild(newClassFieldLabel);
    newClassFormDiv.appendChild(newClassFormDivVertical);
    GPAForm.insertBefore(newClassFormDiv, btnHere);
}

function GPACalculator(classInformation){

    /*** CALCULATE GPA
     * Multiply each class grade by its credit hours and add all of the products together
     * (e.g. 4.0 (grade) * 3.0 (credit hours) = 12.00)
     * Divide the sum of the class grades by credit hours by the total amount of credit hours
     */
    let classCount = 1;
    let totalGradePoints = 0;
    let totalCreditHours = 0;
    // handling empty fields and populating the display information
    for (let i = 1; i < Object.keys(classInformation).length+1; i++){ 
        // class name field is empty
        if (classInformation[i][0] == ""){
            classInformation[i][0] = "Class " + classCount;
        // credit hours field is empty
        } if (classInformation[i][2] == ""){
                classInformation[i][2] = 0;
        // letter grade field is empty
        } if (classInformation[i][1] == ""){
            classInformation[i][1] = 0;
            displayClassInfo[i] = "You didn't receive a grade for " 
            + classInformation[i][0] + ".";
        } else {
            displayClassInfo[i] = "You received a " + classInformation[i][1] + 
            " in " + classInformation[i][0] + "." + " The class was " + classInformation[i][2]
            + " credit hours."
        }
        classCount++;
        
        // multiplying the grade by the credit hours
        totalGradePoints += (classInformation[i][1] * classInformation[i][2]);
        // adding all of the credit hours
        totalCreditHours += parseInt(classInformation[i][2]);
    }
    console.log(totalGradePoints);
    console.log(totalCreditHours);
    GPA = totalGradePoints / totalCreditHours;
    displayClassInfo.push("Your GPA for the classes you took: " + GPA + ".");
    displayClassInfo = displayClassInfo.join("\n");
}

function display(){
    
    document.getElementById("form-heading").innerText = "Your GPA information: "
    document.getElementById("form-heading").textContent = "Your GPA information: "
    
    let successMsg = document.getElementById("success-msg");
    successMsg.classList.add("title-paragraph");
    successMsg.style.whiteSpace = "pre";
    
    successMsg.innerText = displayClassInfo;
    successMsg.textContent = displayClassInfo;
}

function startDisplay(){
    
    for (let i = 1; i < totalNumOfClasses+1; i++){
        
        let className = document.getElementById("class" + i + "Name").value;
        let classGrade = document.getElementById("class" + i + "Grade").value;
        let classCreditHours = document.getElementById("class" + i + "CreditHours").value;

        classInformation[i] = [className, classGrade, classCreditHours];
    }
    
    // run the calculation
    GPACalculator(classInformation);

    // display the GPA on the web page
    display()
}
GPAForm.addEventListener('submit', startDisplay);
document.getElementById("btnAddClasses").onclick = addClasses;