function hospitalAbandonado (){
    const introduccion = [
        "Despertaste en un hospital abandonado \n No recuerdas como llegaste",
        "Sientes que algo te observa",
        "Te asustas y empiezas a correr",
        "Ves 2 caminos Elije:\n1 - Izquierda \n2 - Al frente",
    ];

    for (let intro of introduccion) {
        alert(intro);
      }
    }

    hospitalAbandonado();


let x = parseInt(prompt("Ingrese una opción"));

while (x !== 2) {
    switch (x) {
        case 1:
            alert("Llegaste a una habitacion sin salida \n Lo que te seguia te encontró \n\n Estas Muerto");
            break;
        default:
            alert("Solo tienes 2 opciones!");
            break;
    }

    x = parseInt(prompt("Ingrese otro número"));
}
alert("Corres con mas fuerza hacia el frente intentando perder aquello que te sigue \n Ves una escalera \n1 - Subis \n2 - Bajas");

let y = parseInt(prompt("Ingrese una opción"));

while (y !== 1) {
    switch (y) {
        case 2:
            alert("El sotano tenia tapadas todas las salidas \n Estas muerto");
            break;
        default:
            alert("Solo tienes 2 opciones!");
            break;
    }
    y = parseInt(prompt("Ingrese una opción"));
}
alert("Subiste sin mirar atras y llegaste a una nuevo pasillo, hay 2 puertas \n\n Elije: \n1 - Izquierda \n2 - Derecha");

let v = parseInt(prompt("Ingrese una opción"));

switch (v) {
    case 2:
        alert("Vas a la derecha, la puerta esta trabada desde dentro, te alcanzó.");
        alert("Te resististe todo lo que pudiste y lograste escapar");
        alert("solo te quedan 2 opciones \n1 - Saltar por la ventana \n2 - Esconderte")

        let v2 = parseInt(prompt("Ingrese una opción"));
        if (v2 == 1) {
            alert("Saltás por la ventana y te arrastras por el suelo, te partiste las piernas.\n Tuviste una muerte lenta y dolorosa");
            console.log("Juego finalizado \n Gracias por jugar");
        } else {
            alert("Te escondes en un armario. \n Hiciste demasiado ruido.\n Te encontró.");
            console.log("Juego finalizado \n Gracias por jugar");
        }
        break;
    case 1:
        alert("Ingresas y encuentras un vidrio muy filoso, quien te seguia quizo atacarte pero tu pronta reaccion te dio la ventaja...");
        
        function felicitar(){
            let ganador = (prompt("Ingresa tu nombre y sabrás cómo moriste..."))
            alert(ganador + " " + "era broma, no moriste, después de tantos intentos fallidos...¡felicidades, ganaste! ahora, corre perra, corre..."
            )
        }

        felicitar () 

        console.log("Gracias por jugar - Fin");
        break;

}

const credito = {
    nombre: "Creado por Giuliana R. Bejarano",
    residencia: "Córdoba Capital, Argentina",
    motivo: "Proyecto CoderHouse - implementación JS"
}

console.log (credito.nombre)
console.log (credito.residencia)
console.log (credito.motivo)

