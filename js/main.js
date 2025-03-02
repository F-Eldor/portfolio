// let vazn = document.getElementById("vazn")
// let boy = document.getElementById("boy")
// let natija = document.getElementById("natija")
// let tugma = document.getElementById("tugma")



// tugma.addEventListener('click', function(){
//     let vaznQiymati = +vazn.value
//     let boyQiymati = +boy.value
//     let bmi = vaznQiymati / (boyQiymati * boyQiymati)
    
//     bmi = bmi.toFixed(1)

//     if(bmi < 18.5){
//         natija.textContent = `${bmi} va siz ozgin`
//     }


//     else if(bmi >= 18.5 && bmi < 24.9){
//         natija.textContent = `${bmi} va siz meyorida`
//     }

//     else if(bmi >= 25 && bmi < 29.9){
//         natija.textContent = `${bmi} va siz ortiqcha vaznli`
//     }
//     else if(bmi > 30 ){
//         natija.textContent = `${bmi} va siz semiz`
//     }
    
// })

let raqam1 = document.getElementById('raqam1')
let raqam2 = document.getElementById('raqam2')
let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let mult = document.getElementById('mult')
let divide = document.getElementById('divide')
let hisob = document.getElementById('hisob')


plus.addEventListener('click', function(){
    let raqam1Qiymat = +raqam1.value
    let raqam2Qiymat = +raqam2.value
    let javob = raqam1Qiymat + raqam2Qiymat
    hisob.textContent = javob
})
minus.addEventListener('click', function(){
    let raqam1Qiymat = +raqam1.value
    let raqam2Qiymat = +raqam2.value
    let javob = raqam1Qiymat - raqam2Qiymat
    hisob.textContent = javob
})
mult.addEventListener('click', function(){
    let raqam1Qiymat = +raqam1.value
    let raqam2Qiymat = +raqam2.value
    let javob = raqam1Qiymat * raqam2Qiymat
    hisob.textContent = javob
})
divide.addEventListener('click', function(){
    let raqam1Qiymat = +raqam1.value
    let raqam2Qiymat = +raqam2.value
    let javob = raqam1Qiymat / raqam2Qiymat
    hisob.textContent = javob
})









