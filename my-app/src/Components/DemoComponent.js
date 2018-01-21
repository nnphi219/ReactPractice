import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function Welcome(props){
    return <h1>Hello, {props.name}</h1>;
}

function Comment(props) {
    return (
        <div className="Comment">
            <UserInfo user={props.author} />
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {props.date}    
            </div>
        </div>
    );
}
  
  function Avatar(props) {
    return (
      <img className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
      />
  
    );
  }

  function UserInfo(props) {
    return (
      <div className="UserInfo">
        <Avatar user={props.user} />
        <div className="UserInfo-name">
          {props.user.name}
        </div>
      </div>
    );
  }

function sum(a, b){
    return a + b;
}

class DemoComponent extends Component {
    render() {
        return <h1>Hello, {this.props.name}, {this.props.age}</h1>;
      }
}

export default DemoComponent;
