//alert("Hola Mundo <3");

// se ocupa let porque var hace que las variables vivan en otros archivos

let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
    loop: true,
    delay: 75,
});

// aqui permite que la etiqueta sea manipulada
//reconoces una accion tiene paréntesis después del nombre de la accion
// a veces tiene el operador punto
//typewriter

typewriter
    .pauseFor(2500) //milisegundos 2.5 segundos
    .typeString('Valeria Ruiz')
    .pauseFor(300)
    .deleteAll()
    .typeString('Desarrolladora FRONT-END JR ')
    .pauseFor(1000)
    .start();


let frase = document.getElementById('frase');

let typewriterFrase = new Typewriter(frase, {
    loop: true,
    delay: 95,
});

// aqui permite que la etiqueta sea manipulada
//reconoces una accion tiene paréntesis después del nombre de la accion
// a veces tiene el operador punto
//typewriter

typewriterFrase
    .pauseFor(2500) //milisegundos 2.5 segundos
    .typeString('"Hay algunas flores que solo ves cuando tomas desvíos."')
    .pauseFor(400)
    .deleteAll()
    .typeString('Tanaka Seako ')
    .pauseFor(1000)
    .start();




