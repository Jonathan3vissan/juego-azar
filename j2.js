const leer = require ("prompt-sync")();

let secreto=0;
let maxii=6; 
let minimo=0;
let elecionUsuario=0;
secreto= Math.round(Math.random()*(minimo-maxii)+maxii)
console.log("Adivina el numero secreto en solo 3 intentos");
console.log("empezemos eligendo un numero");


for (i=1;i<4;i++) {
   
    elecionUsuario=leer();

    if (elecionUsuario==secreto) {       
       console.log("ganaste");
        i=(6);
      
     }else
      {
        console.log("intento numero",i);
        
     } 
    
   
}
if (i==4) {

    console.log("perdites te quedaste sin intentos");}




