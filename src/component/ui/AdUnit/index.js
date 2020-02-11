import React from 'react';
import { AD_BOX, AD_BANNER } from 'data/constants';
import { BORDER_STYLE, COLORS } from 'styles/constants';

const styles={
  unit_container: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    margin: '20px 0 40px 0'
  },
  unit_block:{
    margin: '0 auto',
    border: BORDER_STYLE,
  },
  [AD_BOX]:{
    width: 300,
    height: 250,
  },
  [AD_BANNER]:{
    width: 320,
    height: 50,
  },
  unit_default_text:{
    lineHeight: '35px',
    fontStyle: 'italic',
    color: COLORS.border
  }
}

export default function({ type=AD_BOX }) {
  return(
    <div style={styles.unit_container}>
      <div style={{...styles.unit_block, ...styles[type]}}>
        <span style={styles.unit_default_text}>Publicidad</span>
      </div>
    </div>
  );
}