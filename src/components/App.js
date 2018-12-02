import React, { Component } from "react";
import { database } from "firebase";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({
      [e.target.value]: e.target.value
    });
  }

  onHandleSubmit(e) {
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    };
    database.savePost(post);
  }

  render() {
    return (
      <div className="container">
        <form action="" onSubmit={this.onHandleSubmit}>
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
      </div>
    );
  }
}

export default App;
