const audioElement = document.querySelector('.audio');

function reproducirAudio() {
    audioElement.play();
}

let clickCount = parseInt(localStorage.getItem('clickCount')) || 0;

function mostrarTexto(texto, callback) {
    const textoElement = document.createElement('p');
    textoElement.textContent = texto;
    textoElement.style.fontSize = '30px';
    textoElement.style.color = 'white';
    document.body.appendChild(textoElement);

    setTimeout(() => {
        document.body.removeChild(textoElement);
        callback();
    }, 4000);
}

    function historia () {
        const introduccion = [
            "La historia relata un sin fin de atrocidades que ocurrieron dentro de este hospital. ",
            "Sin embargo, las autoridades nunca tuvieron pruebas de ellas, ",
            "Lo que si estaba claro era que nadie sanaba alli. ",
            "El pueblo asegura que a las almas en pena que habitan dentro, no les agradan las visitas.",
        ];

        for (let intro of introduccion) {
            document.querySelector('#history').innerHTML = introduccion;
        }
    }

    historia();


function mostrarOpciones(opciones, callback) {
    const opcionesElement = document.createElement('p');
    opcionesElement.textContent = opciones;
    opcionesElement.style.fontSize = '30px';
    opcionesElement.style.color = 'white';
    document.body.appendChild(opcionesElement);

    const boton1 = document.createElement('button');
    boton1.textContent = "1";
    boton1.style.fontSize = '30px';
    boton1.style.backgroundColor = 'white';
    boton1.style.color = 'black';
    boton1.addEventListener('click', () => {
        document.body.removeChild(opcionesElement);
        document.body.removeChild(boton1);
        document.body.removeChild(boton2);
        callback('1');
    });

    const boton2 = document.createElement('button');
    boton2.textContent = "2";
    boton2.style.fontSize = '30px';
    boton2.style.backgroundColor = 'white';
    boton2.style.color = 'black';
    boton2.addEventListener('click', () => {
        document.body.removeChild(opcionesElement);
        document.body.removeChild(boton1);
        document.body.removeChild(boton2);
        callback('2');
    });

    document.body.appendChild(boton1);
    document.body.appendChild(boton2);
}

function iniciarJuego() {
    
    reproducirAudio();
    async function obtenerNombreAleatorio() {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          const data = await response.json();
          const nombreAleatorio = data[Math.floor(Math.random() * data.length)].name;
          return nombreAleatorio;
        } catch (error) {
          console.error('Error al obtener el nombre aleatorio:', error);
          return 'Nombre Aleatorio';
        }
      }
      
      // Función para mostrar el texto con el nombre aleatorio
      async function mostrarTextoConNombreAleatorio(texto, callback) {
        const nombreAleatorio = await obtenerNombreAleatorio();
        const textoModificado = texto.replace('######', nombreAleatorio);
        mostrarTexto(textoModificado, callback);
      }
      
      // Llamada inicial para mostrar el texto con el nombre aleatorio
      mostrarTextoConNombreAleatorio("Despertaste en el hospital abandonado ######. No recuerdas cómo llegaste. Sientes que algo te observa. Te asustas y empiezas a correr.", () => {
        mostrarOpciones("Ves 2 caminos. Elige:\n1 - Izquierda \n2 - Al frente",
            (eleccion) => {
                if (eleccion === '1') {
                    mostrarTexto("Llegaste a una habitación sin salida. Lo que te seguía te encontró, te masticó los brazos y te desangraste 💀. Muerte muy dolorosa.", () => {
                        mostrarTexto("Juego finalizado \n Gracias por jugar - Fin", () => { });
                    });
                } else if (eleccion === '2') {
                    mostrarTexto("Corres rápidamente hacia el frente intentando perder aquello que te sigue, solo viste su sombra, eso no es humano. ", () => {
                        mostrarOpciones("\n Ves una escalera \n1 - Subís \n2 - Bajas", (eleccion) => {
                            if (eleccion === '1') {
                                mostrarTexto("Subiste sin mirar atrás y llegaste a un nuevo pasillo", () => {
                                    mostrarOpciones("hay 2 puertas \n\n Elige una: \n1 - Puerta roja  \n2 - Puerta verde", (eleccion) => {
                                        if (eleccion === '1') {
                                            mostrarTexto("Ingresas y encuentras una ventana rota, sus vidrios están por todo el piso.", () => {
                                                mostrarTexto("Lo que te seguía quiso avalanzarse sobre ti y cortarte la garganta, pero tu pronta reacción te dio la ventaja...", () => {
                                                    Swal.fire({
                                                        position: 'top',
                                                        icon: 'success',
                                                        title: 'Después de tantos intentos fallidos... ¡felicidades, saliste con vida 🤸‍♀️! Ahora, corre perra, corre...!',
                                                        showConfirmButton: false,
                                                        timer: 5000
                                                    })
                                                    mostrarCredito(credito);
                                                });
                                            });
                                        } else if (eleccion === '2') {
                                            mostrarTexto("Vas a la derecha, la puerta está trabada desde dentro, te alcanzó. Te resististe todo lo que pudiste y lograste escapar, aunque el recuerdo de haberle visto el rostro te atormentará siempre.", () => {
                                                mostrarOpciones("Solo te quedan 2 opciones \n1 - Saltar por la ventana \n2 - Esconderte", (eleccion) => {
                                                    if (eleccion === '1') {
                                                        mostrarTexto("Saltás por la ventana y te arrastras por el suelo, te partiste las piernas. Tuviste una muerte llena de angustia y desolación", () => {
                                                            mostrarTexto("Juego finalizado \n Gracias por jugar", () => { });
                                                        });
                                                    } else if (eleccion === '2') {
                                                        mostrarTexto("Te escondes en un armario. Hiciste demasiado ruido. Te encontró.💀", () => {
                                                            mostrarTexto("Juego finalizado \n Gracias por jugar", () => { });
                                                        });
                                                    }
                                                });
                                            });
                                        }
                                    });
                                });
                            } else if (eleccion === '2') {
                                mostrarTexto("El sotano está inundado, repleto de heces y partes humanas. ¡¿Pero qué carajos es eso?! No llegaste a identificar la cosa que te ahogó.", () => {
                                    mostrarTexto("Juego finalizado \n Gracias por jugar", () => { });
                                });
                            }
                        });
                    });
                }
            });
    });
}

const btn = document.querySelector('.boton');
btn.addEventListener('click', () => {
    clickCount++;
    localStorage.setItem('clickCount', clickCount.toString());
    console.log('Click Count:', clickCount);
    btn.style.display = 'none';
    iniciarJuego();
});

const credito = {
    nombre: "Creado por Giuliana R. Bejarano",
    residencia: "Córdoba Capital, Argentina",
    motivo: {
        origen: "Proyecto CoderHouse",
        rama: "implementación JS"
    }
};

function mostrarCredito({ nombre, residencia, motivo: { origen, rama } }) {
    document.querySelector('#creador').innerHTML = `<p class="cred">${nombre}</p><p class="cred">${residencia}</p> <p class="cred">${origen}</p><p class="cred">${rama}</p>`
};

function finalGanador() {
    return new Promise((resolve) => {
      const mensajeFinal = "Basada en hechos reales.";
      
      const finalElement = document.querySelector("#final");
      finalElement.innerHTML = mensajeFinal;
      
      setTimeout(() => {
        resolve();
      }, 100000);
    });
  }

finalGanador()

.then(() => {
    location.reload();
});
