import React from 'react';
import { Link } from 'react-router-dom';
import { COLORS, TEXT_SPACING, HEADER_CALC } from 'styles/constants';

const styles = {
  flyoutMenu: {
    width: `calc(100% - ${TEXT_SPACING*2}px)`,
    height: `calc(100vh - ${HEADER_CALC}px)`,
    backgroundColor: COLORS.background,
    position: 'fixed',
    top: HEADER_CALC,
    left: 0,
    transition: 'transform .3s cubic-bezier(0, .52, 0, 1)',
    overflow: 'scroll',
    zIndex: 1000,
    padding: TEXT_SPACING
  },
  hide: {
    transform: 'translate3d(-100vw, 0, 0)',
  },
  show: {
    transform: 'translate3d(0vw, 0, 0)',
    overflow: 'hidden',
  },
  links: {
    color: COLORS.primary,
    marginLeft: 15,
    textDecoration: 'none',
    "&:hover": {
      textDecoration: 'underline',
    },
    textTransform: 'uppercase'
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