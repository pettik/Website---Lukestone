/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  // Validate that variables exist
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      // We add the show-menu class to the div tag with the nav__menu class
      nav.classList.toggle('show-menu');
    });

    // Close the menu if the user clicks outside of it
    document.addEventListener('click', event => {
      if (!nav.contains(event.target) && !toggle.contains(event.target)) {
        nav.classList.remove('show-menu');
      }
    });
  }
};
showMenu('nav-toggle', 'nav-menu');

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');
const navMenu = document.querySelector('.nav__menu');

function linkAction() {
  navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.add('active-link');
    } else {
      document
        .querySelector('.nav__menu a[href*=' + sectionId + ']')
        .classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const nav = document.getElementById('header');
  // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 210) nav.classList.add('scroll-header');
  else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-toggle-right';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme)
    ? 'bx-toggle-left'
    : 'bx-toggle-right';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
    darkTheme
  );
  themeButton.classList[selectedIcon === 'bx-toggle-left' ? 'add' : 'remove'](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});

/*=============== touchTouch Lightbox gallery ===============*/
touchTouch(
  document.querySelector('.about__imgs').querySelectorAll('.about__img'),
  { showCaption: true }
);

touchTouch(
  document
    .querySelector('.gallery__container')
    .querySelectorAll('.opernazed-zulova'),
  { showCaption: true }
);
touchTouch(
  document
    .querySelector('.gallery__container')
    .querySelectorAll('.bazen-kobyla'),
  { showCaption: true }
);
touchTouch(
  document
    .querySelector('.gallery__container')
    .querySelectorAll('.holesov-obklad'),
  { showCaption: true }
);
touchTouch(
  document
    .querySelector('.gallery__container')
    .querySelectorAll('.chodnik_zlotystok'),
  { showCaption: true }
);
touchTouch(
  document
    .querySelector('.gallery__container')
    .querySelectorAll('.supikovice-prijezdova-cesta'),
  { showCaption: true }
);
touchTouch(
  document
    .querySelector('.gallery__container')
    .querySelectorAll('.holesov-garaz'),
  { showCaption: true }
);
touchTouch(
  document
    .querySelector('.gallery__container')
    .querySelectorAll('.prijezdovacesta_vapenna'),
  { showCaption: true }
);
touchTouch(
  document
    .querySelector('.gallery__container')
    .querySelectorAll('.vlcatin-chodnik'),
  { showCaption: true }
);
touchTouch(
  document
    .querySelector('.gallery__container')
    .querySelectorAll('.cernavoda-chodnik'),
  { showCaption: true }
);

/*=============== touchTouch Lightbox FOOTER - GALLERY ===============*/

touchTouch(
  document
    .querySelector('.footer__gallery')
    .querySelectorAll('.opernazed-zulova2'),
  { showCaption: true }
);
touchTouch(
  document.querySelector('.footer__gallery').querySelectorAll('.bazen-kobyla2'),
  { showCaption: true }
);
touchTouch(
  document
    .querySelector('.footer__gallery')
    .querySelectorAll('.holesov-obklad2'),
  { showCaption: true }
);
touchTouch(
  document
    .querySelector('.footer__gallery')
    .querySelectorAll('.chodnik_zlotystok2'),
  { showCaption: true }
);
touchTouch(
  document
    .querySelector('.footer__gallery')
    .querySelectorAll('.supikovice-prijezdova-cesta2'),
  { showCaption: true }
);
touchTouch(
  document
    .querySelector('.footer__gallery')
    .querySelectorAll('.holesov-garaz2'),
  { showCaption: true }
);
touchTouch(
  document
    .querySelector('.footer__gallery')
    .querySelectorAll('.prijezdovacesta_vapenna2'),
  { showCaption: true }
);
touchTouch(
  document
    .querySelector('.footer__gallery')
    .querySelectorAll('.vlcatin-chodnik2'),
  { showCaption: true }
);
touchTouch(
  document
    .querySelector('.footer__gallery')
    .querySelectorAll('.cernavoda-chodnik2'),
  { showCaption: true }
);

/*=============== GSAP ANIMATION ===============*/

gsap.from('.home__title', 1, {
  opacity: 0,
  y: -200,
  delay: 0.2,
  ease: 'bounce.out',
});
gsap.from('.home__subtitle,.home-btn-up', 2, {
  opacity: 0,
  x: -300,
  delay: 0.7,
  ease: 'elastic.out(1, .3)',
});

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 400,
  // reset: true
});

sr.reveal(
  `.about__data, .security__data,.gallery_section, .gallery__data,  .footer__container`
);
sr.reveal(`.home__img, .preprava__description, .preprava-btn-up`, {
  origin: 'left',
  delay: 400,
  distance: '100px',
  interval: 100,
});
sr.reveal(`.home-btn-down, .contact__content li`, {
  origin: 'left',
  interval: 200,
});
sr.reveal(`.preprava__data .section__title-center, .preprava__car__image`, {
  origin: 'right',
  interval: 250,
});
sr.reveal(`.about__list li, .footer__links li`, { interval: 200 });
sr.reveal(`.about__imgs a`, { delay: 400, distance: '200px', interval: 300 });
sr.reveal(`.gallery__imgbox`, { delay: 100, distance: '100px', interval: 50 });
