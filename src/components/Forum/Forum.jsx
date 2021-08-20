import { Component } from 'react';
import Post from "../Post/Post";
import Form from "../Form/Form";


export default class Forum extends Component {
    state = {
      posts: []
    }
  
    getPosts = async () => {
      await fetch("/api").then((res) => res.json()).then(data => this.setState({posts: data}))
    }
  
    componentDidMount() {
        this.getPosts()
      }
      
      render() {
          return (
            <div className="App">
              {this.state.posts.length ? 
                this.state.posts.map(p => (
                  <Post 
                    post={p}
                    getPosts={this.getPosts}
                  />
                ))
                  :
                <h1>No Posts</h1>
              }
              <Form
                getPosts={this.getPosts}
              />
            </div>
          );
        }}