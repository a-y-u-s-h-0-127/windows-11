document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;

    const toggleBackground = () => {
        body.classList.toggle('hide-background');
    };

    setInterval(toggleBackground, 5000);
});

const taskbar = document.getElementsByClassName('windows-key')[0];
const startmenu = document.getElementsByClassName('startmenu')[0];

taskbar.addEventListener('click', ()=>{
    if(startmenu.style.margin === "0px"){
        startmenu.style.margin = "0px 0px -558px 0px";
    }

    else{
        startmenu.style.margin = "0px";
    }
});