import React from 'react';
import Skeleton from 'react-loading-skeleton';
import getBestImage from 'utils/getBestImage';
import tagCleaner from 'utils/tagCleaner';
import { DEVICE_WIDTH, TEXT_SPACING, COLORS } from 'styles/constants';

const styles = {
    article:{
        minHeight:'100vh',
        borderBottom:`${TEXT_SPACING}px solid ${COLORS.primary}`  
    },
  paddedContent:{
    color: COLORS.text,
    marginLeft: '20px',
    marginRight: '20px',
    width: `calc(100% - ${TEXT_SPACING*2}px)`,
    maxWidth: '600px',
    fontSize: '1.125rem',
    paddingTop: TEXT_SPACING
  },
  figure: {
    marginTop: TEXT_SPACING,
    marginBottom: TEXT_SPACING
  },
  figcaption: {
    padding: `8px ${TEXT_SPACING}px 0 ${TEXT_SPACING}px`,
    fontStyle: 'italic',
    color: COLORS.text_light
  },
  skeleton_content:{
      marginTop: TEXT_SPACING,
      lineHeight:'1.5em' 
  }
};

export default ({ title, content, _embedded }) => {
    
  return (
    <article style={styles.article}>
      <header style={styles.paddedContent}>
        <h1>{!!title ?
            tagCleaner(title.rendered) 
            : 
            <span style={styles.skeleton_content}>
              <SkeletonBlock />
            </span>
        }</h1>
      </header>
      {!!_embedded ? 
        <figure style={styles.figure}> 
            <img 
            src={getBestImage(_embedded["wp:featuredmedia"]["0"].media_details.sizes)} 
            width={DEVICE_WIDTH} 
            alt={_embedded["wp:featuredmedia"]["0"].title.rendered} />
            <figcaption style={styles.figcaption}>
              {tagCleaner(_embedded["wp:featuredmedia"]["0"].title.rendered)}
            </figcaption>
        </figure>
        :
        <Skeleton height={200} />
      }
      <main>
        {!!content ? 
            tagCleaner(content.rendered, 'content') 
            : 
            <React.Fragment>
                <p style={styles.skeleton_content}>
                  <SkeletonBlock />
                </p>
                <p style={styles.skeleton_content}>
                  <SkeletonBlock />
                </p>
                <p style={styles.skeleton_content}>
                  <SkeletonBlock />
                </p>
            </React.Fragment>
        }
      </main>
    </article>
  );
}

const SkeletonBlock = () =>{
  return(
    <React.Fragment>
      <Skeleton width={DEVICE_WIDTH-40} />
      <Skeleton width={DEVICE_WIDTH-45} />
      <Skeleton width={DEVICE_WIDTH-40} />
      <Skeleton width={DEVICE_WIDTH-48} />
    </React.Fragment>
  )
  }