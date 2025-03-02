let vazifaInput  = document.getElementById("vazifaInput");
let vazifaBtn  = document.getElementById("vazifaBtn");
let vazifaList  = document.getElementById("vazifaList");


vazifaBtn.addEventListener("click", function(){
    let qiymat = vazifaInput.value

    let li = document.createElement("li");
    li.textContent = qiymat

    
   
    vazifaInput.value = ""



    let tugma = document.createElement("button")

    tugma.textContent = "O'chirish"
    tugma.onclick = function(){
        li.remove()
    }
vazifaList.appendChild(li);
    li.appendChild(tugma)

    


  
})

