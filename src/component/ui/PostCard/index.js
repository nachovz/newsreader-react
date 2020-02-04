import React from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import urlCleaner from 'utils/urlCleaner';
import getBestImage from 'utils/getBestImage';

const styles = {
  imagesContainer:{
    display: 'flex'
  },
  title_container:{
    padding: 8
  }
}

export default function({ title, _embedded, link, ...props}){

  /*const loopImages = (media_details) => {
    let images = [];
    for( const sizeName in media_details){
      images.push(
        <div key={sizeName}>
          <h3>{sizeName}</h3>
          <img src={media_details[sizeName].source_url} width={media_details[sizeName].width} height={media_details[sizeName].height} />
        </div>
      )
    }
    return images;
  }*/

  

  return(
    <div>
      <Link to={urlCleaner(link)}>
        <div style={styles.imagesContainer}>
          <img 
            src={getBestImage(_embedded["wp:featuredmedia"]["0"].media_details.sizes)} 
            width={document.documentElement.clientWidth} 
            alt={_embedded["wp:featuredmedia"]["0"].title.rendered} />
        </div>
        <div style={styles.title_container}>
          <h2>{ReactHtmlParser(title.rendered)}</h2>
        </div>
      </Link>
    </div>
  )
}