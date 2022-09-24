import React, { Component } from "react";
import axios from "axios";

class Contact extends Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    const {data} = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    this.setState({
      posts: data,
    });
  }

  render() {
    return (
      <>
        <h1 className="m-4 text-center">Contact us</h1>
        {this.state.posts.map((post) => (
          <div key={post.id} className="card p-2 m-2">{post.body}</div>
        ))}
      </>
    );
  }
}

export default Contact;
