var t=gsap.timeline();

t.from("#nav a,i,h3",{
    y:-50,
    delay: 0.1,
    duration: 1,
    opacity: 0,
    // staggaer ek ke bad ek h3 laye ga ek sath nhi 
    stagger: 0.3
})
t.from("#main h1",{
    x:-500,
    duration: 2,
    opacity:0,
    stagger: 0.3
})
t.from("img",{
    x:200,
    rotate: 45,
    duration:1,
    delay: 0.1,
    opacity:0,
    stagger: 1
})
t.from("#end",{
   y: 100,
   duration: 1,
   delay: 0.3,
   stagger: 1,
   opacity:0
})

var details=document.querySelector("#details");
var contact=document.querySelector("#contact");
contact.addEventListener("click",function(){
    if(details.style.display=="block")
    details.style.display="none";
    else
    details.style.display="block";
})

var mode=document.querySelector("#mode");
mode.onclick= function(){
        document.body.classList.toggle("lightmode");  
}

// var icon = document.getElementById("icon");
//    icon.onclick= function(){
//     document.body.classList.toggle("darkmode");  
//     if(document.body.classList.contains("darkmode")){
//         icon.src="sun.png";
//     }
//     else{
//         icon.src="moon.png";
//     }

//    }