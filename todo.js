

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


userinput.addEventListener("click", function(){
    var clear = userinput.text;
    clear.parentNode.removeChild();
})




















