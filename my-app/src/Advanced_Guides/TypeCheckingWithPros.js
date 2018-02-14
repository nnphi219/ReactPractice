import React, { Component } from 'react';

class Greeting extends React.Component {
    static defaultProps = {
      name: 'stranger'
    }
  
    render() {
      return (
        <div>Hello, {this.props.name}</div>
      )
    }
  }

class TypeCheckingWithPros extends Component {
    render(){
        return(
            <Greeting name={'test'}/>
        );
    }
}

export default TypeCheckingWithPros;