export const creatAmountElement=(id="1", amount="100,000")=>{
    const element=document.createElement('li');
    element.classList.add('ListItem');
    element.innerHTML='';
    element.innerHTML=String.raw`
            <span id="${id}" class="ListItemNumber">${id}</span>
            <span class="moneyAmount">${amount}</span>

    `;
    return element;

  
   

}