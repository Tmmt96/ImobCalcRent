import React from 'react';
import './AppBar.css'
import PropTypes from 'prop-types';

const AppBar = () => (
   <div className='navdisplay'>
      <nav className='navbar'>
         <ul className='navlist'>
            <li className='navitem'><a className='navlink' href="/">Home</a></li>
            <li className='navitem'><a className='navlink' href="/about">About</a></li>
            <li className='navitem'><a  className='navlink' href="/services">Services</a></li>
            <li className='navitem'><a className='navlink' href="/contact">Contact</a></li>
         </ul>
      </nav>
   </div>
);

AppBar.propTypes = {};

AppBar.defaultProps = {};

export default AppBar;
