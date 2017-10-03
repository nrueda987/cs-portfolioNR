//
var input1 = document.getElementById("num1");
var drop = document.getElementById("drop");
var button = document.getElementById("button");
var input2 = document.getElementById("num2");
var ans1 = document.getElementById("ans1");

//
button.addEventListener("click", function() {
// the addEventListener listens for the click of the calculate button
    //
    var num1 = +input1.value;
    var num2 = +input2.value;
    var operation = drop.value;
    /* this is a variable and it works by reaching into the html to find "num1" 
     * and it reaches into the html by "document.getbyid" and it knows which    */

    //
    if (operation === "+") {
      ans1.innerHTML = (num1) + (num2);
    }
    // these are the operation for the calculator which in this case is adding "+"
    if (operation === "-") {
      ans1.innerHTML = (num1) - (num2);
    }
    //
    if (operation === "*") {
      ans1.innerHTML = (num1) * (num2);
    }
    //
    if (operation === "/") {
      ans1.innerHTML = (num1) / (num2);
    }
    //
    if (operation === "^") {
      ans1.innerHTML =Math.pow(num1, num2)
    }
    //
    if (operation === "%") {
        ans1.innerHTML = (num1) % (num2);
    }
}); 
