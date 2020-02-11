import React from 'react';
import client from 'client';
import PostCard from 'component/ui/PostCard';
import AdUnit from 'component/ui/AdUnit';
import { AD_BOX, AD_BANNER } from 'data/constants';

export default class Home extends React.Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    client.param('_embed', true);
    const posts = await client.posts().get();
    this.setState({ posts });
  }

  render() {
    const { posts } = this.state;
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
      </div>
    );
  }
}
