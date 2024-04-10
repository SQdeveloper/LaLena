import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className='hero'>
            <img src="/icons/iconChicken.svg" alt="" />
            <span>DISFRUTA DE NUESTRO AUTÉNTICO SABOR</span>
            <h2>SI SABE A LEÑA ES NUESTRO</h2>
            <button className='button-style'>reservas</button>
        </section>
    );
};

export default Hero;