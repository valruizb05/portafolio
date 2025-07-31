document.addEventListener('DOMContentLoaded', () => {
  const mainEl = document.getElementById('typewriter-main');
  mainEl.innerHTML = '';

  const twMain = new Typewriter(mainEl, {
    loop: true,
    delay: 95,
    deleteSpeed: 50
  });

  twMain
    .pauseFor(500)
    // Mostramos nombre y rol juntos
    .typeString('Valeria Ruiz')
    .pauseFor(2000)
    .deleteAll()
    // Podrías encadenar otros mensajes si quieres, por ejemplo:
    .typeString('Desarrollladora JR')
    .pauseFor(2000)
    .deleteAll()
    .start();
});
