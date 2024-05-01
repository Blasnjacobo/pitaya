import React, { useState, useEffect } from 'react';
import hamburguesa from '../img/hamburguesa.svg';
import home from '../img/home.svg';
import blas from '../img/Blas.jpg';
import { iniciarSesion } from '../Request/iniciarSesion';

const Header = () => {
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setHasToken(token ? true : false);
  }, []); // Run only once on component mount

  useEffect(() => {
    const handleStorageChange = () => {
      const token = localStorage.getItem('token');
      setHasToken(token ? true : false);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []); 

  const handleSesion = () => {
    iniciarSesion();
  };

  return (
    <div className='header-container'>
      <section className='header-section1'>
        {!hasToken && ( 
          <>
            <div className='icon-container'>
              <img
                className='header-hamburguesa'
                src={hamburguesa}
                alt='hamburguesa menu'
              />
            </div>
            <div
              style={{ width: '30%', textAlign: 'center' }}
              className='iniciarSesion'
            >
              Inicia sesión como invitado haciendo click en la casita
            </div>
          </>
        )}
        <div className='icon-container'>
          <img
            className='header-home'
            src={home}
            alt='home img'
            onClick={() => handleSesion()}
          />
        </div>
        <div className='separator' />
      </section>
      <section className='header-section2'>
        {hasToken && ( // Render header-user if token exists
          <img className='header-user' src={blas} alt='user profile img' />
        )}
      </section>
    </div>
  );
};

export default Header;
