
const bu=document.querySelector("button");
console.log(bu);

const video=document.querySelector("video");
const swap=document.querySelector(".switch")

bu.addEventListener("click",()=>{
    if (!swap.classList.contains("switch-add")){
        swap.classList.add("switch-add")
        video.play()
    }
    else{
        swap.classList.remove("switch-add")
        video.pause()
    }
})

const pre=document.querySelector(".preloader");
window.addEventListener("load",()=>{
    pre.classList.toggle("hide-preload")
})


