import React, { useState, useEffect } from 'react';
import client from 'client';
import PostCard from 'component/ui/PostCard';
import AdUnit from 'component/ui/AdUnit';
import { AD_BOX, AD_BANNER } from 'data/constants';

export default function() {
  const [ posts, setPosts ] = useState([]);
  const [ loadingMore, setLoadingMore] = useState(true);

  const fetchPosts = async () => {
    client.param('_embed', true);
    const posts = await client.posts().get();
    return posts;
  } 

  useEffect(() => {
    if(posts.length === 0){
      fetchPosts().then((posts) => {
        setPosts(posts);
        setLoadingMore(false);
      })
    }
  })

  return (
    <div>
      {posts.map((post, ind) => {
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
      {loadingMore && <PostCard />}
    </div>
  );
};
