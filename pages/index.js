import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import Landing from './views/Landing/Landing';
import About1 from './views/About/About1';
import About2 from './views/About/About2';
import About3 from './views/About/About3';
import NavBar from './components/NavBar';
import Marcas from './views/Marcas/Marcas';
import Logos from './views/Logos/Logos';
import Packaging from './views/Packaging/Packaging';
import Productions from './views/Productions/Productions';
import Contact from './views/Contact/Contact';

export default function Home() {
  useEffect(() => {
    const mousePos = document.getElementById('about2');
    const canvas = document.getElementById('space');
    const innerW = window.innerWidth;
    const innerH = window.innerHeight;
    mousePos.addEventListener(
      'mousemove',
      (e) => {
        let xAxis = (innerW / 2 - e.pageX) / 100;
        let yAxis = (innerH / 2 - e.pageY) / 100;
        canvas.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
      },
      []
    );
  });

  return (
    <>
      <Head>
        <title>La Compañía | Agencia de Marketing y Publicidad</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/media/ami.png' />
      </Head>
      <NavBar />
      <div className='snap-container flex flex-col relative'>
        <Landing />
        <About1 />
        <About2 />
        <About3 />
        <Marcas />
        <Logos />
        <Packaging />
        <Productions />
        <Contact />
      </div>
    </>
  );
}
