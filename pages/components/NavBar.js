import React, { useSate, useEffect } from 'react';

const NavBar = () => {
  useEffect(() => {
    let thumb = document.getElementById('thumb');
    let container = document.getElementById('main-container');
    let nav = document.getElementById('nav-bar');
    container.addEventListener('scroll', (e) => {
      let scrollPos = container.scrollTop;
      updateNav(scrollPos);
    });

    const updateNav = (pos) => {
      const thumbBlock = 24; //play with this to control the indictor jump between links
      let prevSelected =
        document.getElementsByClassName('nav-link-selected')[0];
      const blockHeight =
        document.getElementById('main-container').offsetHeight;
      let nosotrosLink = document.getElementById('nosotros-link');
      let marcasLink = document.getElementById('marcas-link');
      let logosLink = document.getElementById('logos-link');
      let packagingLink = document.getElementById('packaging-link');
      let productionsLink = document.getElementById('productions-link');
      let contactLink = document.getElementById('contact-link');
      const breakpoints = {
        inicio: [0, 0.5 * blockHeight],
        nosotros: [0.5 * blockHeight, 3.5 * blockHeight],
        marcas: [3.5 * blockHeight, 4.5 * blockHeight],
        logos: [4.5 * blockHeight, 5.5 * blockHeight],
        packaging: [5.5 * blockHeight, 6.5 * blockHeight],
        productions: [6.5 * blockHeight, 7.5 * blockHeight],
        contact: [7.5 * blockHeight, 8.5 * blockHeight],
      };
      if (pos < breakpoints.inicio[1]) {
        nav.classList.replace('translate-x-0', 'translate-x-full');
        thumb.style.transform = `translateY(0px)`;
      }
      if (breakpoints.nosotros[0] <= pos && pos <= breakpoints.nosotros[1]) {
        nav.classList.replace('translate-x-full', 'translate-x-0');
        prevSelected.classList.replace('nav-link-selected', 'nav-link');
        nosotrosLink.classList.replace('nav-link', 'nav-link-selected');
        thumb.style.transform = `translateY(${1 * thumbBlock}px)`;
      }
      if (breakpoints.marcas[0] <= pos && pos <= breakpoints.marcas[1]) {
        nav.classList.replace('translate-x-full', 'translate-x-0');
        prevSelected.classList.replace('nav-link-selected', 'nav-link');
        marcasLink.classList.replace('nav-link', 'nav-link-selected');
        thumb.style.transform = `translateY(${2 * thumbBlock}px)`;
      }
      if (breakpoints.logos[0] <= pos && pos <= breakpoints.logos[1]) {
        nav.classList.replace('translate-x-full', 'translate-x-0');
        prevSelected.classList.replace('nav-link-selected', 'nav-link');
        logosLink.classList.replace('nav-link', 'nav-link-selected');
        thumb.style.transform = `translateY(${3 * thumbBlock}px)`;
      }
      if (breakpoints.packaging[0] <= pos && pos <= breakpoints.packaging[1]) {
        nav.classList.replace('translate-x-full', 'translate-x-0');
        prevSelected.classList.replace('nav-link-selected', 'nav-link');
        packagingLink.classList.replace('nav-link', 'nav-link-selected');
        thumb.style.transform = `translateY(${4 * thumbBlock}px)`;
      }
      if (
        breakpoints.productions[0] <= pos &&
        pos <= breakpoints.productions[1]
      ) {
        nav.classList.replace('translate-x-full', 'translate-x-0');
        prevSelected.classList.replace('nav-link-selected', 'nav-link');
        productionsLink.classList.replace('nav-link', 'nav-link-selected');
        thumb.style.transform = `translateY(${5 * thumbBlock}px)`;
      }
      if (breakpoints.contact[0] <= pos && pos <= breakpoints.contact[1]) {
        nav.classList.replace('translate-x-full', 'translate-x-0');
        prevSelected.classList.replace('nav-link-selected', 'nav-link');
        contactLink.classList.replace('nav-link', 'nav-link-selected');
        thumb.style.transform = `translateY(${6 * thumbBlock}px)`;
      }
    };
  }, []);

  return (
    <>
      <div
        id='nav-bar'
        className='fixed right-0 top-1/3 z-30 flex flex-row transition-all transform translate-x-full'
      >
        <div className='flex flex-row flex-nowrap items-start'>
          <div className='flex flex-col items-end text-white mr-2'>
            <a
              onClick={() => {
                document.getElementById('main-container').scrollTop = 0;
              }}
              id='inicio-link'
              className='nav-link-selected'
            >
              Inicio
            </a>
            <a id='nosotros-link' className='nav-link'>
              Nosotros
            </a>
            <a id='marcas-link' className='nav-link'>
              Marcas
            </a>
            <a id='logos-link' className='nav-link'>
              Logos
            </a>
            <a id='packaging-link' className='nav-link'>
              Packaging
            </a>
            <a id='productions-link' className='nav-link'>
              Producciones
            </a>
            <a id='contact-link' className='nav-link'>
              Contacto
            </a>
          </div>
          <div id='track' className='flex flex-col justify-start h-full pt-2'>
            <div
              id='thumb'
              className='w-24 h-2 bg-red top-0 transition-all'
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
