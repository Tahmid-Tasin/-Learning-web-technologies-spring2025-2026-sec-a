let btn7 = document.getElementById("seven");
let btn8 = document.getElementById("eight");
let btn9 = document.getElementById("nine");
let btn4 = document.getElementById("four");
let btn5 = document.getElementById("five");
let btn6 = document.getElementById("six");
let btn0 = document.getElementById("zero");
let btn1 = document.getElementById("one");
let btn2 = document.getElementById("two");
let btn3 = document.getElementById("three");
let btnac = document.getElementById("ac");
let field = document.getElementById("output");


btn7.addEventListener("click",function(){
    field.value=field.value+'7';
});

btn8.addEventListener("click",function(){
    field.value=field.value+'8';
});

btn9.addEventListener("click",function(){
    field.value=field.value+'9';
});

btn4.addEventListener("click",function(){
    field.value=field.value+'4';
});

btn5.addEventListener("click",function(){
    field.value=field.value+'5';
});

btn6.addEventListener("click",function(){
    field.value=field.value+'6';
});

btn0.addEventListener("click",function(){
    field.value=field.value+'0';
});

btn1.addEventListener("click",function(){
    field.value=field.value+'1';
});

btn2.addEventListener("click",function(){
    field.value=field.value+'2';
});

btn3.addEventListener("click",function(){
    field.value=field.value+'3';
});