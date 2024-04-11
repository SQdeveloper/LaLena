import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = ({closeModalLogin}) => {    
    const handleclick = (e)=>{
        // if(!e.target.matches('.login')){
        //     closeModalLogin('.login-bg')
        // }                
    }

    return (
        <>
        <div className='login-bg' onClick={handleclick}>
            <section className="login">
                <div className="login-button-close">
                    <button onClick={()=>{closeModalLogin('.login-bg')}}>
                        <img src="/icons/iconClose.svg" alt="button close" />
                    </button>
                </div>
                <h2>¡QUE BUENO VERTE DE NUEVO!</h2>
                <form action="">
                    <label name='info' htmlFor=""><strong>Ingresa tu correo electrónico o celular</strong></label>
                    <input name='info' type="text" placeholder='Ingresar número o correo'/>
                    <button>ingresar ahora</button>
                </form>
                <div>
                    <span>¿No tienes una cuenta? </span>
                    <Link to=''>Regístrate</Link>
                </div>
            </section>
        </div>
        </>
    );
};

export default Login;