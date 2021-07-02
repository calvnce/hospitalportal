import data from './data.js';

/** -------------------------------------------
 * CONTROL THE AUTO HIDE AND SHOW OF THE HEADER
 * ---------------------------------------------
 * */

const screen = window.innerWidth <= 768;

function navTop() {
  const nav = document.querySelector('.nav-bar');
  const carousel = document.querySelector('.carousel-container');

  let lastScrollTop = 0;
  const scrollTop = window.scrollY;

  if (screen) {
    nav.style.top = 0;
  } else {
    if (scrollTop <= lastScrollTop) {
      nav.style.top = '30px';
      carousel.style.padding = '65px 0 0 0';
    } else {
      nav.style.top = 0;
      carousel.style.padding = '35px 0 0 0';
    }
    nav.style.transitionTimingFunction = 'linear';
    lastScrollTop = scrollTop;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', navTop, true);
});

/** -------------------
 * CREATES THE CAROUSEL
 * --------------------
 */
function createCarousel() {
  const carouselContainer = document.querySelector('.carousel');

  data.forEach((element) => {
    element.carouse.forEach((e) => {
      const carouselImageContainer = document.createElement('div');
      carouselImageContainer.className = ('carousel-card');
      carouselImageContainer.classList.add('fade');
      carouselImageContainer.style.backgroundImage = `url(${e.image})`;

      const coverText = document.createElement('div');
      coverText.classList.add('carousel-card-overlay');

      const textContainer = document.createElement('div');
      textContainer.classList.add('carousel-cover-text');
      textContainer.classList.add('slide');

      const title = document.createElement('h1');
      title.innerText = e.name;

      const hr = document.createElement('hr');

      const desc = document.createElement('p');
      desc.innerHTML = e.desc;

      const a = document.createElement('a');
      a.href = ('#');
      a.setAttribute('aria-label', 'Book Appointment Link');
      a.innerText = 'Book Appointment';
      a.classList.add('appoint');
      a.classList.add('slide');

      textContainer.appendChild(title);
      textContainer.appendChild(hr);
      textContainer.appendChild(desc);
      textContainer.appendChild(a);

      coverText.appendChild(textContainer);

      carouselImageContainer.appendChild(coverText);

      carouselContainer.appendChild(carouselImageContainer);
    });
  });
}

let index = 0;
function slideShow() {
  const cards = document.querySelectorAll('.carousel-card');
  cards.forEach((card) => {
    card.style.display = 'none';
  });
  if (index >= cards.length) index = 0;

  cards[index].style.display = 'flex';
  cards[index].style.width = '100%';
  index += 1;
  setTimeout(slideShow, 8000);
}

window.addEventListener('scroll', navTop, true);
window.addEventListener('load', createCarousel, true);
window.addEventListener('load', slideShow, true);

/** ------------------------------------
 *           MOBILE MENU
 * --------------------------------------
 */

const navLinks = document.querySelector('.nav-bar-links');

function handleMenuEvenets() {
  const menuButton = document.querySelector('.navbar-button');
  const carousel = document.querySelector('.carousel-container');

  menuButton.addEventListener('click', () => {
    if (menuButton.classList.contains('menu-open')) {
      menuButton.classList.remove('menu-open');

      if (navLinks.classList.contains('open'));
      navLinks.classList.remove('open');

      if (carousel.classList.contains('visible'));
      carousel.classList.remove('visible');
    } else {
      menuButton.classList.add('menu-open');
      navLinks.classList.add('open');
      carousel.classList.add('visible');
    }
  });
}

window.addEventListener('load', handleMenuEvenets, true);

function handleNavEvents() {
  const navs = document.querySelectorAll('.nav-bar-links-link');
  navs.forEach((nav) => {
    nav.addEventListener('click', () => {
      navs.forEach((el) => {
        if (el.classList.contains('active')) {
          el.classList.remove('active');
        }
      });
      nav.classList.add('active');
    });
  });
}

window.addEventListener('load', handleNavEvents, true);

/**----------------------------------
 *        PAGE CONTENTS
 * ---------------------------------
 */

function showCases() {
  const cards = document.querySelectorAll('.card-title');

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      if (card.classList.contains('card-expand')) {
        card.classList.remove('card-expand');
        card.lastElementChild.classList.remove('card-expand');
        card.firstElementChild.firstElementChild.classList.remove('fa-minus');
        card.firstElementChild.firstElementChild.classList.add('fa-plus');
      } else {
        card.classList.add('card-expand');
        card.lastElementChild.classList.add('card-expand');
        card.firstElementChild.firstElementChild.classList.add('fa-minus');
        card.firstElementChild.firstElementChild.classList.remove('fa-plus');
      }
    });
  });
}

window.addEventListener('load', showCases, true);