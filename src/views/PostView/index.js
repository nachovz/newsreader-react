import React, { useEffect, useState } from 'react';
import client from 'client';
import { useParams } from 'react-router-dom';
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import Post from 'component/ui/Post';
import KeepReading from 'component/ui/KeepReading';

export default function PostView() {
  let { slug } = useParams();
  const [ posts, setPosts] = useState([]);
  const [ loadingMore, setLoadingMore ] = useState(true);

  const fetchPost = async () => {
    client.param('_embed', true);
    const post = await client.posts().slug(slug);
    return post;
  }

  useEffect(() => {
    if(posts.length === 0){
      fetchPost().then((post) => {
        setPosts( [ post ] );
        setLoadingMore(false);
      });
    }
  });

  useScrollPosition(({ prevPos, currPos }) => {
    console.log((currPos.y*-1) > document.documentElement.scrollHeight - (window.innerHeight*1.5))
    if((currPos.y*-1) > document.documentElement.scrollHeight - (window.innerHeight*1.5)){
      setLoadingMore(true);
      fetchPost().then((post) => {
        setPosts( [...posts, post ] );
        setLoadingMore(false);
      });
    }
  }, [posts], null, false, 3000)

  return (
    <React.Fragment>
      {posts.map((post, ind, arr)=> <Post key={ind} {...post}/>)}
      <KeepReading />
      {loadingMore && <Post />}
    </React.Fragment>
  );
}