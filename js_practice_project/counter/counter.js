let count=0;

const value=document.querySelector(".value")
const btns=document.querySelectorAll(".btn")

btns.forEach((btn)=>{
    btn.addEventListener("click",(event)=>{
        let e=event.currentTarget.classList
        if(e.contains("INCREASE")){
            count+=1;
        }
        else if(e.contains("DECREASE")){
            count-=1;
        }
        else{
            count=0
        }
        value.textContent=count
    })
})


