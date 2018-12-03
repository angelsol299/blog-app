import React, { Component } from "react";
import { database } from "../firebase";
import _ from "lodash";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      posts: {}
    };
    // binding
    this.onInputChange = this.onInputChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  // lifeCycle method
  componentDidMount() {
    database.on("value", snapshot => {
      this.setState({
        posts: snapshot.val()
      });
    });
  }
  //render post from firebase
  renderPosts() {
    return _.map(this.state.posts, (post, key) => {
      return (
        <div key={key}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      );
    });
  }

  onInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onHandleSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    database.push(post);
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onHandleSubmit}>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="title"
              placeholder="Title"
              onChange={this.onInputChange}
              ref="title"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="body"
              placeholder="Body"
              onChange={this.onInputChange}
              ref="body"
            />
          </div>
          <button className="btn btn-primary">Post</button>
        </form>
        <br />
        {this.renderPosts()}
      </div>
    );
  }
}

export default App;
