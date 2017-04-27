//
var input1 = document.getElementById("num1");
var drop = document.getElementById("drop");
var button = document.getElementById("button");
var input2 = document.getElementById("num2");
var ans1 = document.getElementById("ans1");

//
button.addEventListener("click", function() {

      //
      var num1 = +input1.value;
      var num2 = +input2.value;
      var operation = drop.value;


      //
      if (operation === "+") {
        ans1.innerHTML = (num1) + (num2);
      }
      //
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
