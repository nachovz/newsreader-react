import React from 'react';

const styles = {
  imagesContainer:{
    display: 'flex'
  },
  title_container:{
    padding: 8
  },
  post_title:{
    fontFamily: 'Merriweather'
  }
}

export default function({ title, _embedded, ...props}){

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

  const getBestImage = (media_details) => {
    let images = [];
    Object.keys(media_details).forEach( sizeName => {
      const retinaDevice = window.devicePixelRatio > 1;
      if (retinaDevice && sizeName.indexOf('_retina')){
        if(media_details[sizeName].width/2 <= document.documentElement.clientWidth) images.push({sizeName, ...media_details[sizeName]});
      }
      if (!retinaDevice && !sizeName.indexOf('_retina')){
        if(media_details[sizeName].width <= document.documentElement.clientWidth) images.push({sizeName, ...media_details[sizeName]});
      }
    });
    return images.sort((a, b) => b.width - a.width)[0].source_url || "";
  }

  return(
    <div>
      <div style={styles.imagesContainer}>
        <img 
          src={getBestImage(_embedded["wp:featuredmedia"]["0"].media_details.sizes)} 
          width={document.documentElement.clientWidth} 
          alt={_embedded["wp:featuredmedia"]["0"].title.rendered} />
      </div>
      <div style={styles.title_container}>
        <h2 style={styles.post_title}>{title.rendered}</h2>
      </div>
    </div>
  )
}