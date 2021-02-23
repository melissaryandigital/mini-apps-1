import React from 'react';
import ReactDOM from 'react-dom';
import Square from './components/Square.jsx';
import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    return (
      <div>
        <h2>Connect Four!</h2>
        <div class="board">
          <div class="row">
          <Square x={0} y={0}/>
          <Square x={1} y={0}/>
          <Square x={2} y={0}/>
          <Square x={3} y={0}/>
          </div>
          <div class="row">
          <Square x={0} y={1}/>
          <Square x={1} y={1}/>
          <Square x={2} y={1}/>
          <Square x={3} y={1}/>
          </div>
          <div class="row">
          <Square x={0} y={2}/>
          <Square x={1} y={2}/>
          <Square x={2} y={2}/>
          <Square x={3} y={2}/>
          </div>
          <div class="row">
          <Square x={0} y={3}/>
          <Square x={1} y={3}/>
          <Square x={2} y={3}/>
          <Square x={3} y={3}/>
          </div>
        </div>


      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('app'));