const btn=document.getElementById("mode-btn");
const currentTheme=localStorage.getItem("theme");
if(currentTheme==="dark"){
    setDarkMode();
}
btn.addEventListener("click",()=>{
    setTheme();
});

function setTheme(){
    let currentTheme = document.body.getAttribute("theme");
    if(currentTheme==="dark"){
        setLightMode();
    }else{
        setDarkMode(); 
    }
}

function setDarkMode(){
    document.body.setAttribute("theme" , "dark");
    localStorage.setItem("theme" , "dark");
};
function setLightMode(){
    document.body.removeAttribute("theme");
    localStorage.setItem("theme" , "light");
};
/*---------------------------*/
let Home=document.getElementById("home");
let About=document.getElementById("about");
let Exp=document.getElementById("experiences");

Home.addEventListener("click",()=>{
    Home.style.textDecorationLine="underline";
});
About.addEventListener("click",()=>{
    About.style.textDecorationLine="underline";
});
Exp.addEventListener("click",()=>{
    Exp.style.textDecorationLine="underline";
});

