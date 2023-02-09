const containerE1 = document.querySelector(".container")
const containerE2 = document.querySelector(".popup-container")  
const btn = document.querySelector(".btn");
const closeIcon = document.querySelector(".close-icon");

btn.addEventListener("click",function(){
    containerE1.classList.add("active")
    containerE2.classList.remove("active")
})

closeIcon.addEventListener("click", ()=>{
    containerE1.classList.remove("active")
    containerE2.classList.add("active")
})

