//Como no tengo una Base de Datos voy a suponer que existe una donde los usuarios están logeados por un número de ID, que no puede ser menor a 1 (no hay usuarios con el número cero)

//Declaro la variable sin inicializarla
let id;


//Le pediré al usuario que ingrese un valor, y mientras no ingrese un número positivo igual o mayor a 1 el sistema le sigue requiriendo el datos

do {
    id = parseInt(prompt("Ingrese su ID")); //Pido al usuario el valor de la variable
    console.log(id); //Muestro en Consola todo los valores que el usuario ingresó
} while (isNaN(id) || (id <= 0)); //El ciclo se repite MIENTRAS el valor ingresado NO es un número O es un número menor a 1

//Una vez que el sistema los acepta, les mostraré en pantalla un mensaje a todos los usuarios, pero a determinados IDs les aparecerá un texto o un cartel extra

switch (id) {
    case 10:
        document.write(`Usuario ${id}, bienvenido a la aplicación web.<br>Por favor, comuniquese con el administrador de la aplicación web.`);
        break;
    case 999:
        document.write(`Usuario ${id}, bienvenido a la aplicación web.<br>Tiene notificaciones pendientes de leer.`);
        break;
    case 1234:
        let suscripto = confirm("¿Desea renovar su suscripción?");
        console.log(suscripto);

        if (suscripto) {
            document.write(`Usuario ${id}, bienvenido a la aplicación web.`);
        } else {
            alert("Lamentamos eso, esperamos que pronto te nos unas de nuevo");
            document.write(`Usuario ${id}, bienvenido a la aplicación web.<br>Hoy es su último día, alcanzó la fecha límite de su suscripción.`);
        }

        break;
    default:
        document.write(`Usuario ${id}, bienvenido a la aplicación web.`);
        break;
}



//Espero que esté todo correcto, quise probar el DO...WHILE que no hicimos ningún ejemplo en las clases comunes y añadí algunas cosas que vimos en los After Classes como el confirm(), el isNaN y el document.write(). Además, usé un operador lógico y el If para que tenga un poco de todo y poder probarlo anidado dentro del Switch