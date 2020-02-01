import React from 'react';
import client from './client';

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
        <h1>Wordpress.org</h1>
        <ul>
          {posts.map(post => {
            console.log(post);
            return(
              <li key={post.id}>{post.title.rendered}</li>
            )
          })}
        </ul>
      </div>
    );
  }
}
