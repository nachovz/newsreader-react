import React, { useEffect, useState } from 'react';
import client from 'client';
import {
  useParams
} from "react-router-dom";
import getBestImage from 'utils/getBestImage';
import tagCleaner from 'utils/tagCleaner';
import { DEVICE_WIDTH, TEXT_SPACING, COLORS } from 'styles/constants';

const styles = {
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
    color: COLORS.light_text
  }
};

export default function Post() {
  let { slug } = useParams();
  const [ post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      client.param('_embed', true);
      const post = await client.posts().slug(slug);
      setPost( post );
    }
    
    if(!post){
      fetchPost();
    }
  })
  if(!post) return (<span>Cargando...</span>);
  console.log(post);
  const {
    title,
    content,
    _embedded
  } = post;
  return (
    <article>
      <header style={styles.paddedContent}>
        <h1>{tagCleaner(title.rendered)}</h1>
      </header>
      <figure style={styles.figure}>
        <img 
        src={getBestImage(_embedded["wp:featuredmedia"]["0"].media_details.sizes)} 
        width={DEVICE_WIDTH} 
        alt={_embedded["wp:featuredmedia"]["0"].title.rendered} />
        <figcaption style={styles.figcaption}>{_embedded["wp:featuredmedia"]["0"].title.rendered}</figcaption>
      </figure>
      <main>
        {tagCleaner(content.rendered, 'content')}
      </main>
    </article>
  );
}