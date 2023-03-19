setInterval(()=>{
   let d = new Date();
   let Hours = d.getHours()
   let Minuts = d.getMinutes()
  let  Secund = d.getSeconds()
    
    Hrotation = 30*Hours + Minuts/2;
    Mrotation  = 6*Minuts;
    Srotation = 6*Secund;

    let hours1 = document.getElementById("hours")
    let mimutes1 = document.getElementById("mimutes")
    let secound1 = document.getElementById("secound")

    hours1.style.transform = `rotate(${Hrotation}deg)`
    mimutes1.style.transform = `rotate(${Mrotation}deg)`
    secound1.style.transform = `rotate(${Srotation}deg)`
}, 1000)