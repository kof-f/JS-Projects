<script type="text/javascript">
		
    
    let GPAForm = document.getElementById("wf-form-GPA-Form");
    
    // initializing variables
    let totalNumOfClasses = 5;
    let calculatedGPA;
    let classInformation;
    let displayClassInfo = [];
    
    function addClasses(){
    
    	let newClassFormDiv = document.createElement("div");
        let newClassFormDivVertical = document.createElement("div");
        let newClassFieldLabel = document.createElement("LABEL");
        newClassFormDiv.classList.add("form-div");
        newClassFormDivVertical.classList.add("form-div-vertical");
        newClassFieldLabel.classList.add("field-label.gpa-calc.small");
        
        newClassFormDivVertical.appendChild(newClassFieldLabel);
        newClassFormDiv.appendChild(newClassFormDivVertical);
        GPAForm.appendChild(newClassFormDiv);
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
        for (let i = 0; i < Object.keys(classInformation).length; i++){ 
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
        
        for (int i = 1; i < totalNumOfClasses+1; i++){
            
            let className = document.getElementById("class" + i + "Name").value;
            let classGrade = document.getElementById("class" + i + "Grade").value;
            let classCreditHours = document.getElementById("class" + i + "CreditHours").value;

            classInformation[i] = [className, classGrade, classCreditHours];

        }
        
        // // first class info
 		// let firstClassName = document.getElementById("firstClassName").value;
        // let firstClassGrade = document.getElementById("firstClassGrade").value;
        // let firstClassCreditHours = document.getElementById("firstClassCreditHours").value;
        
        // // second class info
        // let secondClassName = document.getElementById("secondClassName").value;
        // let secondClassGrade = document.getElementById("secondClassGrade").value;
        // let secondClassCreditHours = document.getElementById("secondClassCreditHours").value;
        
        // // third class info
        // let thirdClassName = document.getElementById("thirdClassName").value;
        // let thirdClassGrade = document.getElementById("thirdClassGrade").value;
        // let thirdClassCreditHours = document.getElementById("thirdClassCreditHours").value;
        
        // // fourth class info
        // let fourthClassName = document.getElementById("fourthClassName").value;
        // let fourthClassGrade = document.getElementById("fourthClassGrade").value;
        // let fourthClassCreditHours = document.getElementById("fourthClassCreditHours").value;
        
        // // fifth class info
        // let fifthClassName = document.getElementById("fifthClassName").value;
        // let fifthClassGrade = document.getElementById("fifthClassGrade").value;
        // let fifthClassCreditHours = document.getElementById("fifthClassCreditHours").value;
        
        // organizing class info into object to be passed into GPACalculator function
        // classInformation = {
        // 0:[firstClassName, firstClassGrade, firstClassCreditHours],
        // 1:[secondClassName, secondClassGrade, secondClassCreditHours],
        // 2:[thirdClassName, thirdClassGrade, thirdClassCreditHours],
        // 3:[fourthClassName, fourthClassGrade, fourthClassCreditHours],
        // 4:[fifthClassName, fifthClassGrade, fifthClassCreditHours],
        // };
 
		// run the calculation
        GPACalculator(classInformation);

        // display the GPA on the web page
        display()
    }
    GPAForm.addEventListener('submit', startDisplay);
    document.getElementById("btnAddClasses").onclick = addClasses;
	</script>