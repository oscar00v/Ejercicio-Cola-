function dividirCola(colores) {
    let cola1 = [];
    let cola2 = [];

    for (let i = 0; i < colores.length; i++) {
        if (i % 2 === 0) {
            cola1.push(colores[i]);  // Los índices pares (0, 2, 4, ...) van a Cola 1
        } else {
            cola2.push(colores[i]);  // Los índices impares (1, 3, 5, ...) van a Cola 2
        }
    }

    return { cola1, cola2 };
}

// Ejemplo de uso:
let colores = ['amarillo', 'rosa', 'rojo', 'verde', 'azul', 'negro', 'morado', 'blanco'];
let resultado = dividirCola(colores);
console.log("Cola 1:", resultado.cola1);  // Debería imprimir: ['amarillo', 'rojo', 'azul', 'morado']
console.log("Cola 2:", resultado.cola2);  // Debería imprimir: ['rosa', 'verde', 'negro', 'blanco']


////////////////////////////////////////////////////////////
console.log("Eje 2")

function filtrarCola(cola) {
    let usuariosRetirados = [];
    let colaFinal = [];

    while (cola.length > 0) {
        let usuario = cola.shift();  // quitamos el primer usuario
        if (usuario.ticket) {
            colaFinal.push(usuario);  // Si tiene ticket, lo volvemos a poner en la cola final
        } else {
            usuariosRetirados.push(usuario);  // Si no tiene ticket, lo retiramos
        }
    }

    return { colaFinal, usuariosRetirados };
}

// Ejemplo de uso:
let cola = [
    { user: 'User1', ticket: true },
    { user: 'User2', ticket: true },
    { user: 'User3', ticket: true },
    { user: 'User4', ticket: true },
    { user: 'User5', ticket: false },
    { user: 'User6', ticket: false },
    { user: 'User7', ticket: true },
    { user: 'User8', ticket: true },
    { user: 'User9', ticket: true },
    { user: 'User10', ticket: false },
    { user: 'User11', ticket: true }
];

let resultado2 = filtrarCola(cola);
console.log("Cola inicial:", cola);  // Cola inicial (después de procesar está vacía)
console.log("Usuarios retirados:", resultado2.usuariosRetirados);  // Usuarios sin ticket
console.log("Cola final:", resultado2.colaFinal);  // Usuarios con ticket



