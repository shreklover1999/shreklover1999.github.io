//Jake Lian 4/24/2024
//Project 1 - Complete AFTER Final Topic Discussion
//CIS166AA 26678
//Calculator Project
function calc() {
    //The four lines below retrieves values for the 2 input fields into a and b. Then op has all stored operator values that combined get used by declaring calculate at the end to store results.
    var a = parseInt(document.querySelector("#value1").value);
    var b = parseInt(document.querySelector("#value2").value);
    var op = document.querySelector("#operator").value;
    var calculate;
    //Conditions check for value of op to determine which one to perform on the 2 values.
    if (op == "add") {
        calculate = a + b;
    } else if (op == "min") {
        calculate = a - b;
    } else if (op == "div") {
        calculate = a / b;
    } else if (op == "mul") {
        calculate = a * b;
    } else if (op == "mod") { 
            calculate = a % b;
    }
    //Updates the displayed results on the page.
    document.querySelector("#result").innerHTML = calculate;
    //Logs the calculated value to console for debug or tracking.
    console.log(calculate);
}