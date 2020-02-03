import React, { useEffect, useState } from 'react';
import ReactHtmlParser from 'react-html-parser';
import client from 'client';
import {
  useParams
} from "react-router-dom";
import getBestImage from 'utils/getBestImage';

export default function Post() {
  let { cat, slug} = useParams();
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
    excerpt,
    content,
    _embedded
  } = post[0];
  return (
    <div>
      <h1>{title.rendered}</h1>
      <i>{cat}</i>
      <img 
        src={getBestImage(_embedded["wp:featuredmedia"]["0"].media_details.sizes)} 
        width={document.documentElement.clientWidth} 
        alt={_embedded["wp:featuredmedia"]["0"].title.rendered} />
      <p>{ReactHtmlParser(excerpt.rendered)}</p>
      <p>{ReactHtmlParser(content.rendered)}</p>
    </div>
  );
}