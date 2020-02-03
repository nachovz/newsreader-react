import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
  flyoutMenu: {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#FFE600',
    position: 'fixed',
    top: 0,
    left: 0,
    transition: 'transform .3s cubic-bezier(0, .52, 0, 1)',
    overflow: 'scroll',
    zIndex: 1000,
  },
  hide: {
    transform: 'translate3d(-100vw, 0, 0)',
  },
  show: {
    transform: 'translate3d(0vw, 0, 0)',
    overflow: 'hidden',
  },
  links: {
    color: '#333',
    marginLeft: 15,
    textDecoration: 'none',
    "&:hover": {
      textDecoration: 'underline',
    }
  }
};

export default function({opened, handleMouseDown}){
  return(
    <div
      onMouseDown={handleMouseDown} 
      style={{...styles.flyoutMenu, ...opened ? styles.show : styles.hide} }>
      <h2><Link to="/" style={styles.links}>Home</Link></h2>
      <h2><a style={styles.links} href="https://www.elnacional.com">About</a></h2>
      <h2><a style={styles.links} href="https://www.elnacional.com">Contact</a></h2>
      <h2><a style={styles.links} href="https://www.elnacional.com">Search</a></h2>  
    </div>
  )
}