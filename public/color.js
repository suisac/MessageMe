let icon=document.getElementById("icons");
let lo=document.getElementById("lo")
let ms=document.getElementById("ms");
let mb=document.getElementById("main");
let enter=document.getElementById("enter1");
let enter1=document.getElementById("enter2");
let seend=document.getElementById("snd");
icon.onclick =  function(){
    document.body.classList.toggle("bodyColor")
    mb.classList.toggle("message-body_D")
    enter.classList.toggle("a_D")
    enter1.classList.toggle("a_D")
    seend.classList.toggle("snd_D")
    if(document.body.classList.contains("bodyColor")){
        ms.src="/sun.png";
        lo.src="/night.jpg"
    }
    else{
        ms.src="/moon.png"
        lo.src="/day.png"
    }
}