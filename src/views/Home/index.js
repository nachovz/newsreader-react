import React, { useState, useEffect } from 'react';
import client from 'client';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import PostCard from 'component/ui/PostCard';
import AdUnit from 'component/ui/AdUnit';
import { AD_BOX, AD_BANNER } from 'data/constants';

export default function() {
  const [ state, setState ] = useState({ page: 0, posts: [] });
  const [ loadingMore, setLoadingMore] = useState(true);

  const fetchPosts = async (page=0) => {
    //client.param('_embed', true);
    const posts = await client.posts().get({
      per_page: 10,
      offset: page,
      _fields: 'title,excerpt,link,date_gmt,featured_media,_links,slug',
      _embed: 1,
    });
    return posts;
  } 

  useEffect(() => {
    if(state.posts.length === 0){
      fetchPosts().then((posts) => {
        setState({ page: state.page+10, posts: [...state.posts,...posts] });
        setLoadingMore(false);
      });
    }
  });

  useScrollPosition(({ currPos }) => {
    console.log((currPos.y*-1) > document.documentElement.scrollHeight - (window.innerHeight*1.5))
    if((currPos.y*-1) > document.documentElement.scrollHeight - (window.innerHeight*1.5)){
      setLoadingMore(true);
      fetchPosts(state.page).then((posts) => {
        setState({ page: state.page+10, posts: [...state.posts,...posts] });
        setLoadingMore(false);
      });
    }
  }, [state.posts], null, false, 3000);

  return (
    <div>
      {state.posts.map((post, ind) => {
        console.log(post);
        return(
          <React.Fragment key={ind}>
            <PostCard noImage={ind % 3} margin={(ind+1) % 3 === 0} {...post} />
            {(ind+1) % 3 === 0 &&
              <AdUnit type={ind % 2 === 0 ? AD_BOX: AD_BANNER }/>
            }
          </React.Fragment>
        )
      })}
      {loadingMore && 
      <React.Fragment>
        <PostCard />
        <PostCard />
      </React.Fragment>}
    </div>
  );
};
