import React, { Component } from 'react';

function ListItem(props) {
    return <li>{props.value}</li>;
  }

  function NumberList(props) {
    const numbers = props.numbers;

    return (
      <ul>
        {numbers.map((number) =>
            <ListItem key={number.toString()} value={number} />
        )}
      </ul>
    );
  }

  function Blog(props) {
    const sidebar = (
      <ul>
        {props.posts.map((post) =>
          <li key={post.id}>
            {post.title}
          </li>
        )}
      </ul>
    );
    const content = props.posts.map((post) =>
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
    return (
      <div>
        {sidebar}
        <hr />
        {content}
      </div>
    );
  }

class ListsAndKeys extends Component {
    render(){
        const numbers = [1, 2, 3, 4, 5];
        const listItems  = numbers.map((number) => 
            <li>{number}</li>
        );
        
        const posts = [
            {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
            {id: 2, title: 'Installation', content: 'You can install React from npm.'}
          ];
          
        return (
            <div>
                <NumberList numbers={numbers}/>
                <Blog posts={posts} />
            </div>
        );
    }
}

export default ListsAndKeys;