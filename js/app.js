const display= document.getElementById('screen');
let buttons= document.querySelectorAll('button');
for(item of buttons){
    item.addEventListener('click',(e)=>{
        const buttonText= e.target.innerText;
        display.value=buttonText;
    })
}
