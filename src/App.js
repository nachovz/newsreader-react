import React from 'react';
import client from './client';
import PostCard from './component/ui/PostCard';
import Header from './component/ui/Header';

import { HEADER_HEIGHT, SPACING } from './styles/constants';

export default class App extends React.Component {
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
        <Header />
        <div style={{ paddingTop: HEADER_HEIGHT + (SPACING*2) }}>
          {posts.map((post, ind) => {
            console.log(post);
            return(
              <PostCard key={ind} {...post} />
            )
          })}
        </div>
      </div>
    );
  }
}
