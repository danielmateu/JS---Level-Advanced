'use strict'

addEventListener('visibilitychange',(e)=>{
    // console.log('Se cambió de pestaña');
    // console.log(document.visibilityState);
    if(e.target.visibilityState == 'visible'){
        console.log('Porqué te vas?');
    }else{
        alert('Welcome again!');
    }
})
