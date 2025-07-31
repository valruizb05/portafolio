document.addEventListener('DOMContentLoaded', () => {
  // ——— HEADER TYPEWRITER ———
  const mainEl = document.getElementById('typewriter-main');
  mainEl.innerHTML = '';  // limpiamos por si acaso

  const twMain = new Typewriter(mainEl, {
    loop: true,
    delay: 95,
    deleteSpeed: 50
  });

  twMain
    .pauseFor(2500)
    .typeString('Valeria Ruiz')
    .pauseFor(300)
    .deleteAll()
    // usa typeHTML para que el <span> venga ya coloreado
    .typeHTML('<span class="text-success">Desarrolladora JR</span>')
    .pauseFor(1000)
    .deleteAll()
    .start();


  // ——— SUBTITLE / FRASE TYPEWRITER ———
  const subEl = document.getElementById('typewriter-sub');
  subEl.innerHTML = '';

  const twSub = new Typewriter(subEl, {
    loop: true,
    delay: 95,
    deleteSpeed: 40
  });

  twSub
    .pauseFor(2500)
    .typeString('Tú defines tu propio éxito.')
    .pauseFor(400)
    .deleteAll()
    .typeString('¡Hazlo realidad!')
    .pauseFor(1000)
    .deleteAll()
    .start();
});
