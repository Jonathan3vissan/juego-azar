const leer = require ("prompt-sync")()
let i = 0;
let maxii=0;
let cantItenElegidos=0;
let secreto=0;
let minimo=0;
let elecionUsuario=0;

console.log("elegir cantidad de intentos ,con un minimo 3 intentos");
cantItenElegidos= (leer());
if (cantItenElegidos<3) {
     cantItenElegidos=3  
}
maxii= cantItenElegidos*2

console.log("Adivina el numero secreto en solo",cantItenElegidos,"intentos");
console.log("empezemos eligiendo un numero");
secreto= Math.round(Math.random()*(minimo-maxii)+maxii)


for (i=0;i<cantItenElegidos;i++) {
   
    elecionUsuario=leer();

    if (elecionUsuario==secreto) {       
       console.log("ganaste");
        i=(cantItenElegidos);
      
     }else
      {
        console.log("intento numero",i+1);
        
     } 
    
   
}
if (i==cantItenElegidos) {

    console.log("perdites te quedaste sin intentos, EL NUMERO SECRETO ERA",secreto);}




