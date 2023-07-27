function iniciar() {

    function hospitalAbandonado() {
        const introduccion = [
            "Despertaste en un hospital abandonado. No recuerdas como llegaste",
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
                alert("Llegaste a una habitacion sin salida \n Lo que te seguia te encontró, te masticó los brazos y te desangraste 💀. \n\n Muerte muy dolorosa.");
                break;
            default:
                alert("Solo tienes 2 opciones!");
                break;
        }

        x = parseInt(prompt("Ingrese otro número"));
    }
    alert("Corres rápidamente hacia el frente intentando perder aquello que te sigue, solo viste su sombra, eso no es humano. \n Ves una escalera \n1 - Subís \n2 - Bajas");

    let y = parseInt(prompt("Ingrese una opción"));

    while (y !== 1) {
        switch (y) {
            case 2:
                alert("El sotano está inundado, repleto de heces y partes humanas. ¡¿Pero qué carajos es eso?! \n No llegaste a identificar la cosa que te ahogó");
                break;
            default:
                alert("Solo tienes 2 opciones!");
                break;
        }
        y = parseInt(prompt("Ingrese una opción"));
    }
    alert("Subiste sin mirar atrás y llegaste a una nuevo pasillo, hay 2 puertas \n\n Elije una: \n1 - Puerta roja  \n2 - Puerta verde");

    let v = parseInt(prompt("Ingrese una opción"));

    switch (v) {
        case 2:
            alert("Vas a la derecha, la puerta esta trabada desde dentro, te alcanzó.");
            alert("Te resististe todo lo que pudiste y lograste escapar, aunque el recuerdo de haberle visto el rostro te atormentará siempre.");
            alert("solo te quedan 2 opciones \n1 - Saltar por la ventana \n2 - Esconderte")

            let v2 = parseInt(prompt("Ingrese una opción"));
            if (v2 == 1) {
                alert("Saltás por la ventana y te arrastras por el suelo, te partiste las piernas.\n Tuviste una muerte llena de angustia y desolación");
                console.log("Juego finalizado \n Gracias por jugar");
            } else {
                alert("Te escondes en un armario. \n Hiciste demasiado ruido.\n Te encontró.💀");
                console.log("Juego finalizado \n Gracias por jugar");
            }
            break;
        case 1:
            alert("Ingresas y encuentras una ventana rota, sus vidrios están por todo el piso, lo que te seguia quiso avalanzarse sobre tí y cortarte la garganta, pero tu pronta reaccion te dio la ventaja...");

            function felicitarGanador() {
                const participantes = []; 
              
                const nombreGanador = prompt("Ingresa tu nombre y sabrás qué tipo de tortura te llevo a la muerte...");
              
                participantes.forEach(function(nombre) {
                  if (nombre === nombreGanador) {
                    alert(`Era broma, ${nombre}, después de tantos intentos fallidos...¡felicidades, saliste con vida! ahora, corre perra, corre...`);
                  }
                });
              
                if (participantes.length === 0) {
                  alert(`Era broma, ${nombreGanador}, después de tantos intentos fallidos...¡felicidades, saliste con vida 🤸‍♀️! ahora, corre perra, corre...`);
                }
              }
              
              felicitarGanador();
              
            console.log("Gracias por jugar - Fin");
            break;

    }
}

const credito = {
    nombre: "Creado por Giuliana R. Bejarano",
    residencia: "Córdoba Capital, Argentina",
    motivo: "Proyecto CoderHouse - implementación JS"
}

console.log(credito.nombre)
console.log(credito.residencia)
console.log(credito.motivo)

