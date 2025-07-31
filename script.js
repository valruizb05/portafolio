document.addEventListener('DOMContentLoaded', () => {
  // MAIN TYPEWRITER
  const mainEl = document.getElementById('typewriter-main');
  mainEl.innerHTML = '';

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
    .typeHTML('<span class="text-success">Desarrolladora JR</span>')
    .pauseFor(1000)
    .deleteAll()
    .start();

  // SUBTYPEWRITER
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
