let play = document.querySelector(".play")
let ok = document.querySelector(".ok")
play.addEventListener("click", () => {
    ok.style.display = "none"
    game()
})




function game() {
    let abs = document.querySelector(".abs");
let abs2 = document.querySelector(".abs2");
let abs3 = document.querySelector(".abs3");
abs.style.top = `0px`;
let ss = 0;
let randomL = Math.floor(Math.random() * 850);
abs.style.left = `${randomL}px`;
setInterval(() => {
    abs.style.top = `${ss}px`
    ss+=10
    if(abs.style.top == `900px`){
        let randomL = Math.floor(Math.random() * 850);
        abs.style.top = `0px`
        abs.style.left = `${randomL}px`;
        ss = 0;
    }
    
}, 40);
abs2.style.top = `-200px`;
setTimeout(() => {
let sss = -200;
let randomLl = Math.floor(Math.random() * 850);
abs2.style.left = `${randomLl}px`;
setInterval(() => {
    abs2.style.top = `${sss}px`
    sss+=10
    if(abs2.style.top == `900px`){
        let randomLl = Math.floor(Math.random() * 850);
        abs2.style.top = `0px`
        abs2.style.left = `${randomLl}px`;
        sss = 0;
    }
    
}, 40);
}, 1000);


abs3.style.top = `-200px`;
setTimeout(() => {
let ssss = -200;
let randomLll = Math.floor(Math.random() * 850);
abs3.style.left = `${randomLll}px`;
setInterval(() => {
    abs3.style.top = `${ssss}px`
    ssss+=10
    if(abs3.style.top == `900px`){
        let randomLll = Math.floor(Math.random() * 850);
        abs3.style.top = `0px`
        abs3.style.left = `${randomLll}px`;
        ssss = 0;
    }
    
}, 40);
}, 2000);   


let n = 0;
setInterval(() => {
  let daroga = document.querySelector(".daroga");
  daroga.style.transform = `translateY(${n}px)`;
  n += 20;
  if (daroga.style.transform == `translateY(880px)`) {
    daroga.style.transform = `translateY(0px)`;
    n = 0;
  }
}, 50);

let car = document.querySelector(".car");
let s = 0;
let chap = 350;
let tepa = 500;
document.addEventListener("keydown", (e) => {
  if (e.code == "ArrowRight") {
    //o'n
    chap += 10;
    car.style.left = `${chap}px`;
  } else if (e.code == "ArrowLeft") {
    //chap
    chap -= 10;
    car.style.left = `${chap}px`;
  } else if (e.code == "ArrowUp") {
    //tepa
    tepa -= 10;
    car.style.top = `${tepa}px`;
  } else if (e.code == "ArrowDown") {
    //pas
    tepa += 10;
    car.style.top = `${tepa}px`;
  }
});
}