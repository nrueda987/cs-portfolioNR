

//
var userinput = document.getElementById("userinput");
var drop = document.getElementById("drop");
var enter = document.getElementById("enter");
var clear = document.getElementById("clear");
var ans1 = document.getElementById("ans1");
var list =document.getElementById("list");
//


enter.addEventListener("click", function(){

    var color = drop.value
    var task = "<div style='color:"+color+"'>"+userinput.value+"</div>";
    list.innerHTML=list.innerHTML+task;
})

list.addEventListener("click", function(evt){
    var clear = evt.target
    clear.parentNode.removeChild(clear);
})

clear.addEventListener("click", function(){
    list.innerHTML=""
})


















