const menuIcon=document.querySelector("#menu__icon");
const menu=document.querySelector("#menu");
menuIcon.addEventListener("click",()=>{
    if(menu?.className=="hidden"){
        menu.classList.remove("hidden");
    }else{
        menu.classList.add("hidden");
    }
});