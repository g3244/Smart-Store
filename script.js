//Taskbar//
let btn4 = document.getElementById('btn1');
let btn3 = document.getElementById('btn2');
let btn2 = document.getElementById('btn3');
let btn1 = document.getElementById('btn4');
let div1 = document.getElementById('div1');
let div2 = document.getElementById('div2');
let div3 = document.getElementById('div3');
let div4 = document.getElementById('div4');
let divlogin = document.getElementById('div-login');
let divcar = document.getElementById('div-car');
let divbody = document.getElementById('div-body');
let search = document.getElementById('search');

btn1.onclick = 
function(){
    div1.style.display ="block";
    div2.style.display ="none";
    div3.style.display ="none";
    div4.style.display ="none";
    divlogin.style.display = "none";
    divcar.style.display = "none";
    divbody.style.display= "block";
    search.style.backgroundColor = "rgb(253, 215, 132)"
}
btn2.onclick = 
function(){
    div1.style.display ="none";
    div2.style.display ="block";
    div3.style.display ="none";
    div4.style.display ="none";
    divlogin.style.display = "none";
    divcar.style.display = "block";
    divbody.style.display= "none";
    search.style.backgroundColor = "rgb(253, 215, 132)"
}
btn3.onclick = 
function(){
    div1.style.display ="none";
    div2.style.display ="none";
    div3.style.display ="block";
    div4.style.display ="none";
    divlogin.style.display = "block";
    divcar.style.display = "none";
    divbody.style.display= "none";
    search.style.backgroundColor = "rgb(253, 215, 132)"
}
btn4.onclick = 
function(){
     div1.style.display ="none";
    div2.style.display ="none";
    div3.style.display ="none";
    div4.style.display ="block"
    divlogin.style.display = "none"
    divcar.style.display = "none";
    divbody.style.display= "none";
    search.style.backgroundColor = "rgba(240, 248, 255, 0.479)"
}
//Taskbar//