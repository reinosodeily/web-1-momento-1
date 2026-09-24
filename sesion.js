
let usuario;
let contrasena;
let intentos= 3;
 validarAcceso(usuario, contrasena);

function validarAcceso (usuario, contrasena ) { 

  const CONTRASENA_CORRECTA = "1234";
  const USUARIO_CORRECTO = "admin";

 while (intentos > 0) {
    
    usuario = prompt("ingrese el usuario");
    contrasena = prompt("ingrese el contraseña");

    if(contrasena===CONTRASENA_CORRECTA && usuario===USUARIO_CORRECTO) {
        alert("el usuario y contraseña son correctos");
        console.log("¡Bienvenido al sistema!");
        return ;
    } else {
        intentos--;
        console.log("el usuario y contraseña es incorrecto");
         alert(`le quedan ${intentos} intentos`);
    }
}
    alert("Usuario bloqueado. Ha superado el número de intentos. ");
} 
 
