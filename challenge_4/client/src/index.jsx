import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    return (
      <div>
        <h2>Changes inside the JS</h2>
 Yoooo      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));