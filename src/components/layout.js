import React from 'react';
import Navbar from './navbar';
import '../styles/global.css';

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>hello, footer.</footer>
    </div>
  );
};

export default Layout;
