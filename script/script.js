let btn = document.getElementsByClassName("btn")[0];
let rtn = document.getElementsByClassName("btn")[1];

let meat = document.getElementsByClassName("meat")[0];
let beer = document.getElementsByClassName("beer")[0];
let soda = document.getElementsByClassName("soda")[0];

let main = document.getElementsByClassName("main")[0];
let results = document.getElementsByClassName("results")[0];

let count = 0;

btn.addEventListener("click", calcular);
rtn.addEventListener("click", changeDisplay);


function calcular(){
    let women = document.getElementById("women").value;
    let men = document.getElementById("men").value;
    let kids = document.getElementById("kids").value;
    let time = document.getElementById("time").value;

    let carne = qtdCarne(women, men, kids, time);
    let cerveja = qtdCerveja(women, men, time);
    let sumo = qtdSumo(women, men, kids, time);

    meat.innerHTML = carne + "kg de carne";
    beer.innerHTML = cerveja + "l de cerveja";
    soda.innerHTML = sumo + "l de sumo";

    changeDisplay();
}

function qtdCarne(w, m, k, t){
    if(t >= 6){
        return Math.ceil(0.500*w + 0.650*m + 0.325*k);
    } else {
        return Math.ceil(0.300*w + 0.400*m + 0.200*k);
    }
}

function qtdCerveja(w, m, t){
    if(t >= 6){
        return Math.ceil(1.5*w + 2.0*m);
    } else {
        return Math.ceil(0.8*w + 1.2*m);
    }
}

function qtdSumo(w, m, k, t){
    if(t >= 6){
        return Math.ceil(1.200*w + 1.500*m + 0.750*k);
    } else {
        return Math.ceil(0.800*w + 1.000*m + 0.500*k);
    }
}

function changeDisplay(){
    if(count%2 === 0){
        main.style.display = "none";
        results.style.display = "flex";
    } else {
        main.style.display = "flex";
        results.style.display = "none";
    }

    count++;
}