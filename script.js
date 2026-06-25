let btn4 = document.getElementById('btn1');
let btn3 = document.getElementById('btn2');
let btn2 = document.getElementById('btn3');
let btn1 = document.getElementById('btn4');
let div1 = document.getElementById('div1');
let div2 = document.getElementById('div2');
let div3 = document.getElementById('div3');
let div4 = document.getElementById('div4');
let divlogin = document.querySelector('.div-body-login');
let divcar = document.querySelector('.div-body-car');
let divbody = document.querySelector('.div-body');
let search = document.getElementById('search');
let loding = document.querySelector('.loding');
let home = document.querySelector('.home');
let ser = document.getElementById('srh');
let serbtn = document.getElementById('bttn');
let divphone = document.querySelector('.phone');
let diivvv = document.getElementById('.diivvv');
let timer;

btn1.onclick = 
()=>{
    ser.value = '';
    home.style.display = 'none';
    div1.style.display = 'block';
    div2.style.display = 'none';
    div3.style.display = 'none';
    div4.style.display = 'none';
    divlogin.style.display = 'none';
    divcar.style.display = 'none';
    divbody.style.display= 'block';
    search.style.backgroundColor = 'rgb(253, 215, 132)';
    loding.style.display = 'block';
    clearTimeout(timer);
    timer = setTimeout(
        ()=>{
                divbody.style.display = 'block';
                loding.style.display = 'none';
        },2000
    )
}
btn2.onclick = 
()=>{
    ser.value = '';
    home.style.display = 'none'; 
    div1.style.display = 'none';
    div2.style.display = 'block';
    div3.style.display = 'none';
    div4.style.display = 'none';
    divlogin.style.display = 'none';
    divcar.style.display = 'block';
    divbody.style.display= 'none';
    search.style.backgroundColor = 'rgb(253, 215, 132)';
    loding.style.display = 'block';
    clearTimeout(timer);
    timer = setTimeout(
        ()=>{
                divcar.style.display = 'block';
                loding.style.display = 'none';
                divbody.style.display= 'none';
                divlogin.style.display = 'none';
        },2000
    )
}
btn3.onclick = 
()=>{
    ser.value = '';
    home.style.display = 'none';
    div1.style.display ='none';
    div2.style.display ='none';
    div3.style.display ='block';
    div4.style.display ='none';
    divcar.style.display = 'none';
    divbody.style.display= 'none';
    search.style.backgroundColor = 'rgb(253, 215, 132)';
    loding.style.display = 'block';
    clearTimeout(timer);
    timer = setTimeout(
        ()=>{
                divlogin.style.display = 'block';
                loding.style.display = 'none';
                divbody.style.display= 'none';
                divcar.style.display = 'none';
        },1000
    )
}
btn4.onclick = 
()=>{
    home.style.display = 'block';
    div1.style.display ='none';
    div2.style.display ='none';
    div3.style.display ='none';
    div4.style.display ='block';
    divlogin.style.display = 'none';
    divcar.style.display = 'none';
    divbody.style.display= 'none';
    search.style.backgroundColor = 'rgba(240, 248, 255, 0.479)';
    loding.style.display = 'none';
    clearTimeout(timer);
}
//setting//

let btnsetting = document.getElementById('btnlogin');
let btnsetting2 = document.getElementById('btnlogin2');
let divsetting = document.querySelector('.setting');
let ddiv = document.querySelector('.ddiv');

btnsetting.onclick = 
(show)=>{
    divsetting.classList.add('divshow');
    ddiv.style.display = 'block';
}
btnsetting2.onclick = 
()=>{
    divsetting.classList.remove('divshow');
    setTimeout(
        ()=>{
            ddiv.style.display = 'none';
        },200
    );
}
ddiv.onclick = 
()=>{
    divsetting.classList.remove('divshow');
    setTimeout(
        ()=>{
            ddiv.style.display = 'none';
        },200
    );
}
//setting//
//login//
let loding2 = document.querySelector('.loding2');
let btnlogin2 = document.getElementById('btnlogin1');
let singin = document.querySelector('.diiv');
let btnlogin1 = document.querySelector('.btn-login2');
let close = document.getElementById('login-btn');
let diiiv = document.querySelector('.close-login');
let btn5 = document.getElementById('singin1');
let btn6 = document.getElementById('singin2');
let div5 = document.querySelector('.task-login1');
let div6 = document.querySelector('.task-login2');
let btn7 = document.querySelector('.btnn1');
let btn8 = document.querySelector('.btnn2');
let showpass = document.getElementById('show-pass');
let passs = document.getElementById('passs');

close.onclick =
()=>{
    diiiv.style.display = 'none';
    btnsetting.style.display = 'block';
}

btnlogin2.onclick = 
()=>{
    diiiv.style.display = 'block';
    loding2.style.display = 'block';
    btnsetting.style.display = 'none';
    div6.style.display = 'block';
    div5.style.display = 'none';
    btn8.style.display = 'block';
    btn7.style.display = 'none';
    setTimeout(
        ()=>{
            loding2.style.display = 'none';
            singin.style.display = 'block';
            btnsetting.style.display = 'none';
        }, 4000
    );
}
btnlogin1.onclick = 
()=>{
    diiiv.style.display = 'block';
    loding2.style.display = 'block';
    btnsetting.style.display = 'none';
    div5.style.display = 'block';
    div6.style.display = 'none';
    btn7.style.display = 'block';
    btn8.style.display = 'none';
    setTimeout(
        ()=>{
            loding2.style.display = 'none';
            singin.style.display = 'block';
            btnsetting.style.display = 'none';
        }, 4000
    );
}
btn5.onclick = 
()=>{
    div5.style.display = 'none';
    div6.style.display = 'block';
    btn7.style.display = 'block';
    btn8.style.display = 'none';
    btn8.style.display = 'block';
    btn7.style.display = 'none';
}
btn6.onclick = 
()=>{
    div6.style.display = 'none';
    div5.style.display = 'block';
    btn7.style.display = 'block';
    btn8.style.display = 'none';
}
showpass.onclick = 
()=>{
    if(passs.type == 'password'){
        passs.type = 'text';
    }else{
        passs.type = 'password';
    }
}
//login//
//img//
let img1 = document.querySelector('.div-img1');
let img2 = document.querySelector('.div-img2');
let img3 = document.querySelector('.div-img3');
let i = 0;

setInterval(
    ()=>{
       if(i == 0){
        img1.style.opacity = '0';
        img2.style.opacity = '1';
        i = 1;
       }else if(i == 1){
        img2.style.opacity = '0';
        img3.style.opacity = '1';
        i = 2;
       }else if(i == 2){
        img3.style.opacity = '0';
        img1.style.opacity = '1';
        i = 0;
       }
    },5000);
//img//
//search//
ser.addEventListener('input',
    ()=>{
         if(ser.value.includes('phone')){
        divphone.classList.add('phoneshow');
    }
    }
)


//search//