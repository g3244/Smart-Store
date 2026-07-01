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
let divcar2 = document.querySelector('.div-body-car2');
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
let car2 = document.getElementById('phone-btn1');
let car3 = document.getElementById('phone-btn2');
let car4 = document.getElementById('phone-btn3');
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
//car//
//iphone12//
let btnpone12 = document.getElementById('btnpone12');
btnpone12.onclick = 
()=>{
    let iphone12 = document.getElementById('iphone12');
    let iphone12coby = iphone12.cloneNode(true);
    let btncoby1 = iphone12coby.querySelector('.box1-btn');
    localStorage.btnpone12 = 1;
    btncoby1.innerHTML = '🛒 حذف من السلة';
    btncoby1.id = 'removeph1';
    btncoby1.name = 'remov';
    divcar2.appendChild(iphone12coby);
    btnpone12.style.display = 'none';
    car2.style.display = 'block';
    removeph1.onclick = ()=>{
        delete localStorage.btnpone12;
        iphone12coby.remove();
        btnpone12.style.display = 'block'
        car2.style.display = 'none';
    }
}
//iphone17//
let btnpone17 = document.getElementById('btnpone17');
btnpone17.onclick = 
()=>{
    let iphone17 = document.getElementById('iphone17');
    let iphone17coby = iphone17.cloneNode(true);
    let btncoby2 = iphone17coby.querySelector('.box1-btn');
    localStorage.btnpone17 = 1;
    btncoby2.innerHTML = '🛒 حذف من السلة';
    btncoby2.id = 'removeph2';
    btncoby2.name = 'remov';
    divcar2.appendChild(iphone17coby);
    btnpone17.style.display = 'none';
    car3.style.display = 'block';
    removeph2.onclick = ()=>{
        delete localStorage.btnpone17;
        iphone17coby.remove();
        btnpone17.style.display = 'block'
        car3.style.display = 'none';
    }
}
//samsung26//
let btnpone26 = document.getElementById('btnpone26');
btnpone26.onclick = 
()=>{
    let phone26 = document.getElementById('phone26');
    let phone26coby = phone26.cloneNode(true);
    let btncoby3 = phone26coby.querySelector('.box1-btn');
    localStorage.btnpone26 = 1;
    btncoby3.innerHTML = '🛒 حذف من السلة';
    btncoby3.id = 'removeph3';
    btncoby3.name = 'remov';
    divcar2.appendChild(phone26coby);
    btnpone26.style.display = 'none';
    car4.style.display = 'block';
    removeph3.onclick = ()=>{
        delete localStorage.btnpone26;
        phone26coby.remove();
        btnpone26.style.display = 'block'
        car4.style.display = 'none';
    }
}
//car//
car2.onclick = Car;
car3.onclick = Car;
car4.onclick = Car;
function Car(){
    btn2.click();
}
//car//
if(localStorage.btnpone12){
    btnpone12.click();
}
if(localStorage.btnpone17){
    btnpone17.click();
}
if(localStorage.btnpone26){
    btnpone26.click();
}
//car//