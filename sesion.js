let usuario;
let contrasena;
let intentos= 3;


function validarAcceso () { 
const CONTRASENA_CORRECTO = "1234";
const USUARIO_CORRECTO = "admin";

 while (intentos < 0) {
    usuario = prompt("ingrese el usuario");
    contrasena = prompt("ingrese el contrasena")

    if(contrasena===CONTRASENA_CORRECTO && usuario===USUARIO_CORRECTO) {
        alert("el usuario y contraseña son correctos")
        console.log("¡Bienvenido al sistema!");
        return ;
    } else {
        intentos--;
        console.log("el usuario y contraseña es incorrecto")
         alert(`le quedan ${intentos} intentos`)
    }
}
    console.log(" ")
} 
 validarAcceso();
