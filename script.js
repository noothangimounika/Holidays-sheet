var button=document.getElementById("enter")
var input=document.getElementById("userinput")
var ul=document.querySelector("ul");

function inputLength(){
    return input.value.length;
}
button.addEventListener("click",function(){
    if(inputLength() > 0){
        var li =document.createElement("li");
        li.appendChild(document.createTextNode("input.value"));
        ul.appendChild(li);
        input.value="";
    }
})
input.addEventListener("keypress",function(event){
    if(inputLength > 0 && event.keycode===13){
        var li=document.createElement("li");
        li.appendChild(document.createTextNode("input.value"));
        ul.appendChild(li);
        input.value="";
    }

})


