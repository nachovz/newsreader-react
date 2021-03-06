import React from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import tagCleaner from 'utils/tagCleaner';
import { urlCleaner } from 'utils/urlUtil';
import getBestImage from 'utils/getBestImage';
import dateAgoToText from 'utils/dateAgoToText';
import { TEXT_SPACING, SPACING, BORDER_STYLE, COLORS } from 'styles/constants';

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
    color: COLORS.text_light,
    paddingBottom: SPACING,
    borderBottom: BORDER_STYLE
  },
  margin_bottom:{
    marginBottom: SPACING*2
  }
}

export default function({ 
  title, 
  _embedded, 
  link, 
  excerpt, 
  date_gmt, 
  noImage=false, 
  margin=false
}){
  return(
    <article style={styles.post_container}>
      {!!_embedded ? !noImage && !!_embedded["wp:featuredmedia"]["0"].media_details && !!link &&
        <div style={styles.imagesContainer}>
          <Link to={urlCleaner(link)}>
            <img 
              src={getBestImage(_embedded["wp:featuredmedia"]["0"].media_details.sizes)} 
              width={document.documentElement.clientWidth} 
              alt={_embedded["wp:featuredmedia"]["0"].title.rendered} />
          </Link>
        </div>
        :
        <Skeleton height={200} />
      }
      <div style={{...styles.title_container, ...margin ? styles.margin_bottom : {}}}>
        {!!link && !!title && !!excerpt && !!date_gmt ? 
          <React.Fragment>
            <Link to={urlCleaner(link)}>
              <h2 style={noImage ? styles.title_smaller : {}}>
                {tagCleaner(title.rendered)}
              </h2>
              <div>{tagCleaner(excerpt.rendered)}</div>
            </Link>
            <div style={styles.date_container}>
              <span>{dateAgoToText(new Date(date_gmt+'Z'))}</span>
            </div>
          </React.Fragment>
        :
          <React.Fragment>
            <h2>
              <Skeleton count={2}/>
            </h2>
            <p>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </p>
          </React.Fragment>
        }
      </div>
    </article>
  )
}