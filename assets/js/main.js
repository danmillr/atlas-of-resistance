(() => {
  const button = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#main-nav');

  if (!button || !nav) return;

  button.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    button.setAttribute('aria-expanded', String(isOpen));
  });
})();
