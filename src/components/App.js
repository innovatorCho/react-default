import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        name: ''
      };
  };

  render() {
    return(
      <div>
        <div>
          <button onClick={() => {this.setState({name:'aaa'});}}>click me</button>
          <h1>reactd add1a {this.state.name}</h1>
        </div>

      </div>
    );
  }
}

export default App;
