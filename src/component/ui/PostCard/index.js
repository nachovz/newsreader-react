import React from 'react';
import { Link } from 'react-router-dom';
import tagCleaner from 'utils/tagCleaner';
import urlCleaner from 'utils/urlCleaner';
import getBestImage from 'utils/getBestImage';
import dateAgoToText from 'utils/dateAgoToText';
import { TEXT_SPACING, SPACING } from 'styles/constants';

const styles = {
  post_container:{
    background: 'white'
  },
  imagesContainer:{
    display: 'flex'
  },
  title_container:{
    padding: TEXT_SPACING
  },
  title_smaller:{
    fontSize: '1.3em'
  },
  date_container:{
    width: '100%',
    textAlign: 'right',
    fontStyle: 'italic',
    color: '#333',
    paddingBottom: SPACING,
    borderBottom: '1px solid #e4e4e4'
  },
  margin_bottom:{
    marginBottom: SPACING*2
  }
}

export default function({ title, _embedded, link, excerpt, date_gmt, noImage=false, margin=false }){
  return(
    <article style={styles.post_container}>
      {!noImage &&
        <div style={styles.imagesContainer}>
          <Link to={urlCleaner(link)}>
            <img 
              src={getBestImage(_embedded["wp:featuredmedia"]["0"].media_details.sizes)} 
              width={document.documentElement.clientWidth} 
              alt={_embedded["wp:featuredmedia"]["0"].title.rendered} />
          </Link>
        </div>
      }
      <div style={{...styles.title_container, ...margin ? styles.margin_bottom : {}}}>
        <Link to={urlCleaner(link)}>
          <h2 style={noImage ? styles.title_smaller : {}}>{tagCleaner(title.rendered)}</h2>
          <div>{tagCleaner(excerpt.rendered)}</div>
        </Link>
        <div style={styles.date_container}>
          <span>{dateAgoToText(new Date(date_gmt+'Z'))}</span>
        </div>
      </div>
    </article>
  )
}