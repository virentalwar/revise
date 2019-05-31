import React, { Component } from 'react';
import axios from 'axios';

class Services extends Component {
  state = { posts: [] };

  async componentDidMount() {
    this.apicall();
  }

  async apicall() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
      {}
    );
    this.setState({ posts: response.data });
  }

  renderContent() {
    return this.state.posts.map(post => {
      return (
        <li className="list-group-item" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </li>
      );
    });
  }

  render() {
    return (
      <div className="container" style={{ marginTop: '1vh' }}>
        <h2>Using Axios for API call</h2>
        <ul className="list-group" style={{ marginTop: '2vh' }}>
          {this.renderContent()}
        </ul>
      </div>
    );
  }
}

export default Services;
