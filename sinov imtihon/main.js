let boy = document.getElementById("boy")
let vazn = document.getElementById("vazn")
let natija = document.getElementById("natija")
let btn = document.getElementById('btn')
let xolati = document.getElementById("xolat")


function calculator() {
    let boyValue = boy.value;
    let vaznValue = vazn.value;

    let bmi = vaznValue / (boyValue * boyValue);

    if (bmi < 18.5) {
        xolati.textContent = "kam vazn"
        xolati.style.color = "red"
    }
    else if (bmi > 18.5 && bmi < 24.9) {
        xolati.textContent = "normal vazn"
        xolati.style.color = "green"
    }
    else if (bmi > 25 && bmi < 29.9) {
        xolati.textContent = "ortiqcha vazn"
        xolati.style.color = "yellow"
    }
    else if (bmi > 30) {
        xolati.textContent = 'semizlik'
        xolati.style.color = "red"
    }


}






