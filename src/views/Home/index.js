import React from 'react';
import client from 'client';
import PostCard from 'component/ui/PostCard';

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
            <PostCard key={ind} {...post} />
          )
        })}
      </div>
    );
  }
}
