import React from 'react';
import Menu from '../Menu/Menu';
import Login from '../Login/Login';
import './Header.css';

const Header = () => {
    const openModal = (targetClass)=>{
        //Abro el menu
        const target = document.querySelector(`${targetClass}`);        
        target.classList.add('active');

        //Inhabilito el scroll del window
        document.body.style.overflow = 'hidden';
    }
    
    const closeModal = (targetClass)=>{
        //Cierro el menu
        const target = document.querySelector(`${targetClass}`);        
        target.classList.remove('active');

        //Habilito el scroll del window
        document.body.style.overflow = 'auto';
    }

    // const openLogin = ()=>{
    //     const login = document.querySelector('.login-bg');
    //     login.classList.remove('active');
    // }

    return (
        <>        
        <Login closeModalLogin={closeModal}/>
        <Menu closeMenu={()=>{closeModal('.menu-bg')}}/>
        <div className="header-top">¡Todos tus pedidos online tienen envío gratis!</div>
        <header className='header'>
            <div className="header-left">                
                <button onClick={()=>{openModal('.menu-bg')}}><svg className='header-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/></svg></button>
                <button onClick={()=>{openModal('.login-bg')}}><svg className='header-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/></svg></button>
            </div>
            <a href=""><img className='header-logo' src="/images/logo/iconLogo.svg" alt="" /></a>
            <button className="header-button">ordernar</button>
        </header>        
        </>
    );
};

export default Header;