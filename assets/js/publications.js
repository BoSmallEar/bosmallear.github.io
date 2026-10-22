(() => {
  const toggle = document.querySelector('[data-publication-animation-toggle]');
  const stills = document.querySelectorAll('source[data-publication-still]');
  if (!toggle || !stills.length) return;

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let paused = reducedMotion.matches;

  const update = () => {
    stills.forEach((source) => {
      source.media = paused ? 'all' : 'not all';
    });
    toggle.textContent = paused ? 'Play animations' : 'Pause animations';
  };

  toggle.addEventListener('click', () => {
    paused = !paused;
    update();
  });
  reducedMotion.addEventListener('change', (event) => {
    paused = event.matches;
    update();
  });

  update();
  toggle.hidden = false;
})();
