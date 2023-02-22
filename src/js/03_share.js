'use strict';

const sendBtn = document.querySelector('.js_create_button');
function handleClickSend(event){ //dentro de esta función tiene q ocurrir el FETCH, para q cuando la usuaria haga click los datos se envíen
    event.preventDefault();
    fetch(
        'https://dev.adalab.es/api/card/',//estos 3 parámetros se 'tunean'
        {
            method: 'POST',
            headers:{'content-type': 'application/json'},
            body: JSON.stringify(data), //Hay q tranformar el objeto data en string
        })
        .then(response => response.json())
        .then((data) =>{
            if( ! data.success){ 
                
                
                //si este success es false, la negación lo convierte a true
                //if(data.success === false){
                //monstrar mensaje a usuaria cuando success es FALSE
            }else{
                //mostar la dirección y el btn de Tw.Si succes es true, la negación lo convierte a false y saldría este sms
            }
        });
}
sendBtn.addEventListener('click', handleClickSend);