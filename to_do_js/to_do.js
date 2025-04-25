let datas=[]


const savedata=()=>{
    localStorage.setItem('datas',JSON.stringify(datas))
}
const getdata=()=>{
    const storagedata=JSON.parse(localStorage.getItem('datas'));
    if(storagedata){
        storagedata.forEach((data)=>{
            datas.push(data)
            updatetasklist();
            updataestates();
        })
    }

}

const addtask=()=>{
    const input=document.getElementById("input");
    const text=input.value
    if(text){
        datas.push({text:text,completed:false});
        input.value='';
        updatetasklist();
        savedata();
    } 

}
document.querySelector(".middle_container").addEventListener("submit",(e)=>{
    e.preventDefault();
    addtask();
})

const updatetasklist=()=>{
    const lower_container = document.querySelector(".lower_container");
    lower_container.innerHTML=''

    datas.forEach((data,index)=>{
      let div = document.createElement("div");
      div.className = "div";
      div.innerHTML = `
         <span class="task ${data.completed ? 'underline':''}">${data.text}</span>
                  <div class="icons">
                      <i class="fas fa-check-circle" onclick="tick(${index})" > </i>
                      <i class="fas fa-solid fa-pen-to-square" onclick="edit(${index})" ></i>
                
                  <i class="fas fa-trash delete" onclick="deletes(${index})"></i>
                  </div>
      `;
      lower_container.append(div);
    });
  
  }
 const tick=(index)=>{
    datas[index].completed=!datas[index].completed;
    updatetasklist();
    updataestates();
    savedata();
    
  };
const deletes=(index)=>{
    datas.splice(index,1);
    updatetasklist();
    updataestates();
    savedata();
}
const edit=(index)=>{
        const input=document.getElementById("input");
        input.value=datas[index].text
        datas.splice(index,1);
        updatetasklist();
        updataestates();
        savedata();
}

const updataestates=()=>{
    const inital=datas.filter(data=>data.completed).length;
    const total=(inital/datas.length)*100
    const progress=document.querySelector(".progress")
    progress.style.width=`${total}%`;

    const number_count=document.getElementById("number_count");
    number_count.textContent=`${inital}/${datas.length}`
    if(datas.length && inital==datas.length){
        animation();
    }

}
const animation=()=>{
const end = Date.now() + 1 * 1000;

// go Buckeyes!
const colors = ["#bb0000", "#ffffff"];

(function frame() {
  confetti({
    particleCount: 2,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: colors,
  });

  confetti({
    particleCount: 2,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: colors,
  });

  if (Date.now() < end) {
    requestAnimationFrame(frame);
  }
})();

}
updataestates();
getdata();

window.tick=tick;
window.deletes=deletes;
window.edit=edit;



