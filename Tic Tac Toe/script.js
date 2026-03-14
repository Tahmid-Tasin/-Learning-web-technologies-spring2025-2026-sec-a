let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");

var playerx=true;

document.getElementById("pl2t").classList.remove("animate2");

btn1.addEventListener("click",()=>{
    if(playerx === true)
    {
    btn1.innerText="X";
    btn1.style.color="red";
    btn1.disabled=true;
    playerx=false;
    document.getElementById("pl1t").classList.remove("animate1");
    document.getElementById("pl2t").classList.add("animate2");



    }

    else
    {
        btn1.innerText="O";
            btn1.style.color="blue";
        btn1.disabled=true;
        playerx=true;
            document.getElementById("pl2t").classList.remove("animate2");
    document.getElementById("pl1t").classList.add("animate1");

    }
}
)

btn2.addEventListener("click",()=>{
    if(playerx === true)
    {
    btn2.innerText="X";
        btn2.style.color="red";
    btn2.disabled=true;
    playerx=false;
        document.getElementById("pl1t").classList.remove("animate1");
    document.getElementById("pl2t").classList.add("animate2");

    }

    else
    {
        btn2.innerText="O";
                btn2.style.color="blue";
        btn2.disabled=true;
        playerx=true;
    document.getElementById("pl2t").classList.remove("animate2");
    document.getElementById("pl1t").classList.add("animate1");
    }
}
)

btn3.addEventListener("click",()=>{
    if(playerx === true)
    {
    btn3.innerText="X";
            btn3.style.color="red";
    btn3.disabled=true;
    playerx=false;
    document.getElementById("pl1t").classList.remove("animate1");
    document.getElementById("pl2t").classList.add("animate2");
    }

    else
    {
        btn3.innerText="O";
                btn3.style.color="blue";
        btn3.disabled=true;
        playerx=true;
            document.getElementById("pl2t").classList.remove("animate2");
    document.getElementById("pl1t").classList.add("animate1");

    }
}
)

btn4.addEventListener("click",()=>{
    if(playerx === true)
    {
    btn4.innerText="X";
            btn4.style.color="red";
    btn4.disabled=true;
    playerx=false;
    document.getElementById("pl1t").classList.remove("animate1");
    document.getElementById("pl2t").classList.add("animate2");
    }

    else
    {
        btn4.innerText="O";
        btn4.style.color="blue";       
        btn4.disabled=true;
        playerx=true;
    document.getElementById("pl2t").classList.remove("animate2");
    document.getElementById("pl1t").classList.add("animate1");
    }
}
)

btn5.addEventListener("click",()=>{
    if(playerx === true)
    {
    btn5.innerText="X";
    btn5.style.color="red";
    btn5.disabled=true;
    playerx=false;
    document.getElementById("pl1t").classList.remove("animate1");
    document.getElementById("pl2t").classList.add("animate2");
    }

    else
    {
        btn5.innerText="O";
            btn5.style.color="blue";
        btn5.disabled=true;
        playerx=true;
    document.getElementById("pl2t").classList.remove("animate2");
    document.getElementById("pl1t").classList.add("animate1");
    }
}
)

btn6.addEventListener("click",()=>{
    if(playerx === true)
    {
    btn6.innerText="X";
    btn6.style.color="red";
    btn6.disabled=true;
    playerx=false;
    document.getElementById("pl1t").classList.remove("animate1");
    document.getElementById("pl2t").classList.add("animate2");
    }

    else
    {
        btn6.innerText="O";
        btn6.style.color="blue";
        btn6.disabled=true;
        playerx=true;
    document.getElementById("pl2t").classList.remove("animate2");
    document.getElementById("pl1t").classList.add("animate1");
    }
}
)

btn7.addEventListener("click",()=>{
    if(playerx === true)
    {
    btn7.innerText="X";
    btn7.style.color="red";
    btn7.disabled=true;
    playerx=false;
    document.getElementById("pl1t").classList.remove("animate1");
    document.getElementById("pl2t").classList.add("animate2");
    }

    else
    {
        btn7.innerText="O";
        btn7.style.color="blue";
        btn7.disabled=true;
        playerx=true;
    document.getElementById("pl2t").classList.remove("animate2");
    document.getElementById("pl1t").classList.add("animate1");
    }
}
)

btn8.addEventListener("click",()=>{
    if(playerx === true)
    {
    btn8.innerText="X";
    btn8.style.color="red";
    btn8.disabled=true;
    playerx=false;
    document.getElementById("pl1t").classList.remove("animate1");
    document.getElementById("pl2t").classList.add("animate2");
    }

    else
    {
        btn8.innerText="O";
        btn8.style.color="blue";
        btn8.disabled=true;
        playerx=true;
    document.getElementById("pl2t").classList.remove("animate2");
    document.getElementById("pl1t").classList.add("animate1");
    }
}
)

btn9.addEventListener("click",()=>{
    if(playerx === true)
    {
    btn9.innerText="X";
    btn9.style.color="red";
    btn9.disabled=true;
    playerx=false;
    document.getElementById("pl1t").classList.remove("animate1");
    document.getElementById("pl2t").classList.add("animate2");
    }

    else
    {
        btn9.innerText="O";
        btn9.style.color="blue";
        btn9.disabled=true;
        playerx=true;
    document.getElementById("pl2t").classList.remove("animate2");
    document.getElementById("pl1t").classList.add("animate1");
    }
}
)
