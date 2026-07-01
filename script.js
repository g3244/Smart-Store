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
let divvphone = document.querySelector('.divpone');
let divdevice = document.querySelector('.divdevice');
let diivvv = document.querySelector('.diivvv');
let btn9 = document.querySelector('.btn1');
let btn10 = document.getElementById('btn22');
let Taskbar = document.querySelector('.Taskbar');
let timer;
//phone-btn//
//iphone14//
let phonebtn1 = document.getElementById('phone-btn1');
let phonebtn2 = document.getElementById('phone-btn2');
let iphone14 = document.querySelector('.iphone14');
let phonebtnn1 = document.getElementById('phone-btnn1');
//iphone17//
let phonebtn3 = document.getElementById('phone2-btn1');
let phonebtn4 = document.getElementById('phone2-btn2');
let iphone17 = document.querySelector('.iphone17');
let phonebtnn2 = document.getElementById('phone-btnn2');
//Samsung//
let phonebtn5 = document.getElementById('phone3-btn1');
let phonebtn6 = document.getElementById('phone3-btn2');
let Samsung = document.querySelector('.Samsung');
let phonebtnn3 = document.getElementById('phone-btnn3');
//Samsung2//
let phonebtn7 = document.getElementById('phone4-btn1');
let phonebtn8 = document.getElementById('phone4-btn2');
let Samsung2 = document.querySelector('.Samsung2');
let phonebtnn4 = document.getElementById('phone-btnn4');
//Samsung3//
let phonebtn9 = document.getElementById('phone5-btn1');
let phonebtn10 = document.getElementById('phone5-btn2');
let Samsung3 = document.querySelector('.Samsung3');
let phonebtnn5 = document.getElementById('phone-btnn5');
//Infinix1//
let phonebtn11 = document.getElementById('phone6-btn1');
let phonebtn12 = document.getElementById('phone6-btn2');
let Infinix1 = document.querySelector('.Infinix1');
let phonebtnn6 = document.getElementById('phone-btnn6');
//Infinix2//
let phonebtn13 = document.getElementById('phone7-btn1');
let phonebtn14 = document.getElementById('phone7-btn2');
let Infinix2 = document.querySelector('.Infinix2');
let phonebtnn7 = document.getElementById('phone-btnn7');
//Infinix3//
let phonebtn15 = document.getElementById('phone8-btn1');
let phonebtn16 = document.getElementById('phone8-btn2');
let Infinix3 = document.querySelector('.Infinix3');
let phonebtnn8 = document.getElementById('phone-btnn8');
//phone-btn//


btn1.onclick = 
()=>{
    diivvv.style.display = 'none';
    divphone.style.display = 'none';
    divphone.classList.remove('phoneshow');
    divphone.classList.remove('phoneshow');
    ddiv.style.display = 'none';
    divsetting.classList.remove('divshow');
    diiiv.style.display = 'none';
    btnsetting.style.display = 'block';
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
    );
}
btn2.onclick = 
()=>{
    diivvv.style.display = 'none';
    divphone.style.display = 'none';
    divphone.classList.remove('phoneshow');
    divphone.classList.remove('phoneshow');
    ddiv.style.display = 'none';
    divsetting.classList.remove('divshow');
    diiiv.style.display = 'none';
    btnsetting.style.display = 'block';
    ser.value = '';
    home.style.display = 'none'; 
    div1.style.display = 'none';
    div2.style.display = 'block';
    div3.style.display = 'none';
    div4.style.display = 'none';
    divlogin.style.display = 'none';
    divcar.style.display = 'none';
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
    );
}
btn3.onclick = 
()=>{
    diivvv.style.display = 'none';
    divphone.style.display = 'none';
    divphone.classList.remove('phoneshow');
    divphone.classList.remove('phoneshow');
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
    );
}
btn4.onclick = 
()=>{
    diivvv.style.display = 'none';
    divphone.style.display = 'none';
    divphone.classList.remove('phoneshow');
    divphone.classList.remove('phoneshow');
    ser.value = '';
    ddiv.style.display = 'none';
    divsetting.classList.remove('divshow');
    diiiv.style.display = 'none';
    btnsetting.style.display = 'block';
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
     Taskbar.style.display = 'block';
    search.style.display = 'block';
}

btnlogin2.onclick = 
()=>{
    Taskbar.style.display = 'none';
    search.style.display = 'none';
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
    Taskbar.style.display = 'none';
    search.style.display = 'none';
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
         if(ser.value.includes('phone') ||
          ser.value.includes('موبايل') ||
          ser.value.includes('تليفون') ||
          ser.value.includes('ايفون') ||
          ser.value.includes('سامسونج') ||
          ser.value.includes('pone') ||
          ser.value.includes('Phone') ||
          ser.value.includes('iphone') ||
          ser.value.includes('Iphone') ||
          ser.value.includes('Infinix') ||
          ser.value.includes('infinix') ||
          ser.value.includes('APPLE') ||
          ser.value.includes('apple') ||
          ser.value.includes('Samsung') ||
          ser.value.includes('samsung') ||
          ser.value.includes('سمسونج') ||
          ser.value.includes('سامسونج')){
         divphone.style.display = 'block';
         loding.style.display = 'block';
         divphone.style.position = 'fixed';
         divdevice.style.display = 'none';
         divvphone.style.display = 'block';
         setTimeout(
            ()=>{
                divphone.classList.add('phoneshow');
                loding.style.display = 'none';
                 divphone.style.position = 'absolute';
            },2000
         )
    }else if(ser.value.includes('device') ||
          ser.value.includes('Device') ||
          ser.value.includes('DEVICE') ||
          ser.value.includes('اجهزه') ||
          ser.value.includes('اجهزة') ||
          ser.value.includes('فريزر') ||
          ser.value.includes('ثلاجه') ||
          ser.value.includes('ثلاجة') ||
          ser.value.includes('أجهزة كهربائيه') ||
          ser.value.includes('أجهزة كهربائية') ||
          ser.value.includes('اجهزه كهربائية') ||
          ser.value.includes('اجهزه كهربائيه') ||
          ser.value.includes('مايكرويف') ||
          ser.value.includes('Samsung') ||
          ser.value.includes('samsung') ||
          ser.value.includes('سمسونج') ||
          ser.value.includes('سامسونج')){
          divphone.style.display = 'block';
        divvphone.style.display = 'none';
        loding.style.display = 'block';
        divphone.style.position = 'fixed';
        divdevice.style.display = 'block';
         setTimeout(
            ()=>{
                search.style.backgroundColor = 'rgb(253, 215, 132)';
                divphone.classList.add('phoneshow');
                loding.style.display = 'none';
                ser.value = 'device';
                divphone.style.position = 'absolute';
            },2000
     )
    }else{
         divphone.style.display = 'none';
         divphone.classList.remove('phoneshow');
    }});
//search//
//btn//
btn9.onclick = 
()=>{
        divphone.style.display = 'block';
        divvphone.style.display = 'block';
        loding.style.display = 'block';
        divphone.style.position = 'fixed';
        divdevice.style.display = 'none';
         setTimeout(
            ()=>{
                search.style.backgroundColor = 'rgb(253, 215, 132)';
                divphone.classList.add('phoneshow');
                loding.style.display = 'none';
                ser.value = 'phone';
                divphone.style.position = 'absolute';
            },2000
     )
}
btn10.onclick = 
()=>{
        divphone.style.display = 'block';
        divvphone.style.display = 'none';
        loding.style.display = 'block';
        divphone.style.position = 'fixed';
        divdevice.style.display = 'block';
         setTimeout(
            ()=>{
                search.style.backgroundColor = 'rgb(253, 215, 132)';
                divphone.classList.add('phoneshow');
                loding.style.display = 'none';
                ser.value = 'device';
                divphone.style.position = 'absolute';
            },2000
     )
}
//btn//
//ser-color//
ser.onclick = 
()=>{
   search.style.backgroundColor = 'rgb(253, 215, 132)';
   diivvv.style.display = 'block';
}
diivvv.onclick = 
()=>{
    ser.value = '';
    diivvv.style.display = 'none';
    search.style.backgroundColor = 'rgba(240, 248, 255, 0.479)';
}
search.onclick = 
()=>{
    diivvv.style.display = 'block';
    search.style.backgroundColor = 'rgb(253, 215, 132)';
    ser.focus();
    divsetting.classList.remove('divshow');
    setTimeout(
        ()=>{
            ddiv.style.display = 'none';
        },200
    );
}
//ser-color//
phonebtn2.onclick = car ;
phonebtn4.onclick = car ;
phonebtn6.onclick = car ;
phonebtn8.onclick = car ;
phonebtn10.onclick = car ;
phonebtn12.onclick = car ;
phonebtn14.onclick = car ;
phonebtn16.onclick = car ;
function car(){
    btn2.click();
}
//-----------------car----------------------//
//iphone14//
phonebtn1.onclick = 
()=>{
    localStorage.setItem('carA','1');
    phonebtn1.style.display = 'none';
    phonebtn2.style.display = 'block';
    setTimeout(
        ()=>{
            iphone14.style.display = 'block';
        },3000
    );
}
phonebtnn1.onclick =
()=>{
    localStorage.setItem('carA','0');
    phonebtn1.style.display = 'block';
    phonebtn2.style.display = 'none';
    iphone14.style.display = 'none';
}
//iphone17//
phonebtn3.onclick = 
()=>{
    localStorage.setItem('carB','3');
    phonebtn3.style.display = 'none';
    phonebtn4.style.display = 'block';
    setTimeout(
        ()=>{
            iphone17.style.display = 'block';
        },3000
    );
}
phonebtnn2.onclick =
()=>{
    localStorage.setItem('carB','4');
    phonebtn3.style.display = 'block';
    phonebtn4.style.display = 'none';
    iphone17.style.display = 'none';
}
//Samsung//
phonebtn5.onclick = 
()=>{
    localStorage.setItem('carC','5');
    phonebtn5.style.display = 'none';
    phonebtn6.style.display = 'block';
    setTimeout(
        ()=>{
            Samsung.style.display = 'block';
        },3000
    );
}
phonebtnn3.onclick =
()=>{
    localStorage.setItem('carC','6');
    phonebtn5.style.display = 'block';
    phonebtn6.style.display = 'none';
    Samsung.style.display = 'none';
}
//Samsung2//
phonebtn7.onclick = 
()=>{
    localStorage.setItem('carD','7');
    phonebtn7.style.display = 'none';
    phonebtn8.style.display = 'block';
    setTimeout(
        ()=>{
            Samsung2.style.display = 'block';
        },3000
    );
}
phonebtnn4.onclick =
()=>{
    localStorage.setItem('carD','8');
    phonebtn7.style.display = 'block';
    phonebtn8.style.display = 'none';
    Samsung2.style.display = 'none';
}
//Samsung3//
phonebtn9.onclick = 
()=>{
    localStorage.setItem('carE','9');
    phonebtn9.style.display = 'none';
    phonebtn10.style.display = 'block';
    setTimeout(
        ()=>{
            Samsung3.style.display = 'block';
        },3000
    );
}
phonebtnn5.onclick =
()=>{
    localStorage.setItem('carE','10');
    phonebtn9.style.display = 'block';
    phonebtn10.style.display = 'none';
    Samsung3.style.display = 'none';
}
//Infinix1//
phonebtn11.onclick = 
()=>{
    localStorage.setItem('carF','11');
    phonebtn11.style.display = 'none';
    phonebtn12.style.display = 'block';
    setTimeout(
        ()=>{
            Infinix1.style.display = 'block';
        },3000
    );
}
phonebtnn6.onclick =
()=>{
    localStorage.setItem('carF','12');
    phonebtn11.style.display = 'block';
    phonebtn12.style.display = 'none';
    Infinix1.style.display = 'none';
}
//Infinix2//
phonebtn13.onclick = 
()=>{
    localStorage.setItem('carG','13');
    phonebtn13.style.display = 'none';
    phonebtn14.style.display = 'block';
    setTimeout(
        ()=>{
            Infinix2.style.display = 'block';
        },3000
    );
}
phonebtnn7.onclick =
()=>{
    localStorage.setItem('carG','14');
    phonebtn13.style.display = 'block';
    phonebtn14.style.display = 'none';
    Infinix2.style.display = 'none';
}
//Infinix3//
phonebtn15.onclick = 
()=>{
    localStorage.setItem('carH','15');
    phonebtn15.style.display = 'none';
    phonebtn16.style.display = 'block';
    setTimeout(
        ()=>{
            Infinix3.style.display = 'block';
        },3000
    );
}
phonebtnn8.onclick =
()=>{
    localStorage.setItem('carH','16');
    phonebtn15.style.display = 'block';
    phonebtn16.style.display = 'none';
    Infinix3.style.display = 'none';
}
window.onload = 
()=>{
    if(localStorage.getItem('carA') === '1'){
        phonebtn1.disabled = '1';
        phonebtn1.style.display = 'none';
        phonebtn2.style.display = 'block';
    setTimeout(
        ()=>{
            iphone14.style.display = 'block';
        },3000
    );
    }else if(localStorage.getItem('carA') === '0'){
        phonebtn1.style.display = 'block';
        phonebtn2.style.display = 'none';
        iphone14.style.display = 'none';
    }
    if(localStorage.getItem('carB') === '3'){
        phonebtn3.disabled = '3';
        phonebtn3.style.display = 'none';
        phonebtn4.style.display = 'block';
    setTimeout(
        ()=>{
            iphone17.style.display = 'block';
        },3000
    );
    }else if(localStorage.getItem('carB') === '4'){
        phonebtn3.style.display = 'block';
        phonebtn4.style.display = 'none';
        iphone17.style.display = 'none';
    }
     if(localStorage.getItem('carC') === '5'){
        phonebtn5.disabled = '5';
        phonebtn5.style.display = 'none';
        phonebtn6.style.display = 'block';
    setTimeout(
        ()=>{
            Samsung.style.display = 'block';
        },3000
    );
    }else if(localStorage.getItem('carC') === '6'){
        phonebtn5.style.display = 'block';
        phonebtn6.style.display = 'none';
        Samsung.style.display = 'none';
    }
    if(localStorage.getItem('carD') === '7'){
        phonebtn7.disabled = '7';
        phonebtn7.style.display = 'none';
        phonebtn8.style.display = 'block';
    setTimeout(
        ()=>{
            Samsung2.style.display = 'block';
        },3000
    );
    }else if(localStorage.getItem('carD') === '8'){
        phonebtn7.style.display = 'block';
        phonebtn8.style.display = 'none';
        Samsung2.style.display = 'none';
    }
    if(localStorage.getItem('carE') === '9'){
        phonebtn9.disabled = '9';
        phonebtn9.style.display = 'none';
        phonebtn10.style.display = 'block';
    setTimeout(
        ()=>{
            Samsung3.style.display = 'block';
        },3000
    );
    }else if(localStorage.getItem('carE') === '10'){
        phonebtn9.style.display = 'block';
        phonebtn10.style.display = 'none';
        Samsung3.style.display = 'none';
    }
    if(localStorage.getItem('carF') === '11'){
        phonebtn11.disabled = '11';
        phonebtn11.style.display = 'none';
        phonebtn12.style.display = 'block';
    setTimeout(
        ()=>{
            Infinix1.style.display = 'block';
        },3000
    );
    }else if(localStorage.getItem('carF') === '12'){
        phonebtn11.style.display = 'block';
        phonebtn12.style.display = 'none';
        Infinix1.style.display = 'none';
    }
    if(localStorage.getItem('carG') === '13'){
        phonebtn13.disabled = '13';
        phonebtn13.style.display = 'none';
        phonebtn14.style.display = 'block';
    setTimeout(
        ()=>{
            Infinix2.style.display = 'block';
        },3000
    );
    }else if(localStorage.getItem('carG') === '14'){
        phonebtn13.style.display = 'block';
        phonebtn14.style.display = 'none';
        Infinix2.style.display = 'none';
    }
    if(localStorage.getItem('carH') === '15'){
        phonebtn15.disabled = '15';
        phonebtn15.style.display = 'none';
        phonebtn16.style.display = 'block';
    setTimeout(
        ()=>{
            Infinix3.style.display = 'block';
        },3000
    );
    }else if(localStorage.getItem('carH') === '16'){
        phonebtn15.style.display = 'block';
        phonebtn16.style.display = 'none';
        Infinix3.style.display = 'none';
    }
}
//car//