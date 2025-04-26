const btns=document.querySelectorAll(".tab-btn");
const about = document.querySelector('.about');
const article=document.querySelectorAll(".content");


about.addEventListener("click",(e)=>{  
    const id=e.target.dataset.id
    if(id){
        btns.forEach((btn)=>{
            btn.classList.remove("active");
            e.target.classList.add("active");
        })
        article.forEach((art)=>{
            art.classList.remove("active");
        })
        const arti=document.getElementById(id);
        arti.classList.add("active")
    }
})



