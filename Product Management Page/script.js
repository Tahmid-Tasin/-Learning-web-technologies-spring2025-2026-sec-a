

let btn = document.getElementById('btn');





btn.addEventListener('click', ()=>{

    let field = document.getElementById('field');
    let qty = field.value;
    let total;
    qty = parseInt(qty);
    if(qty<0)
    {
        field.value=0;
        alert("Enter logical Quantity");
    }

    else{
            document.getElementById('cls').classList.remove('hidden');
            total = qty * 150;
          let li =  document.createElement('li');
          li.innerHTML = "Cheese\t\tX"+`${qty}`+"\t\t\t"+`${total}`+"Tk";
          document.querySelector('.listclass').appendChild(li);
    }


    console.log(field.value);
    console.log(total);
})