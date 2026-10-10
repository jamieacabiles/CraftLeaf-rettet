/* Kun Figma-handlinger: overlays, luk ved klik udenfor, kosmetiske
   komponentvarianter og de dokumenterede desktop-karruselpile. */
'use strict';
const backdrop = document.querySelector('[data-menu-backdrop]');
let menuTrigger = null;
function closeMenu() {
  document.querySelectorAll('.menu-panel').forEach(panel => { panel.hidden = true; });
  backdrop.hidden = true;
  if (menuTrigger) { menuTrigger.setAttribute('aria-expanded', 'false'); }
}
document.querySelectorAll('[data-open-menu]').forEach(trigger => {
  trigger.addEventListener('click', () => {
    closeMenu();
    menuTrigger = trigger;
    const menu = document.getElementById(trigger.dataset.openMenu);
    menu.hidden = false;
    backdrop.hidden = false;
    trigger.setAttribute('aria-expanded', 'true');
  });
});
backdrop.addEventListener('click', closeMenu);
/* Escape er tastaturets ækvivalent til prototypens klik-udenfor-lukning. */
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !backdrop.hidden) {
    closeMenu();
    if (menuTrigger) { menuTrigger.focus(); }
  }
});
document.querySelectorAll('[data-cosmetic]').forEach(control => {
  control.addEventListener('click', () => { control.classList.add('is-selected'); });
});
document.querySelectorAll('[data-variant-carousel]').forEach(carousel => {
  carousel.querySelectorAll('[data-variant]').forEach(control => {
    control.addEventListener('click', () => {
      const next = control.dataset.variant;
      carousel.querySelectorAll('[data-panel]').forEach(panel => {
        panel.hidden = panel.dataset.panel !== next;
      });
      carousel.querySelector('[data-panel="' + next + '"] [data-variant]').focus();
    });
  });
});
