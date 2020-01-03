import React from 'react';
import Board from './components/Board';
import Form from './components/Form';

function App(props) {
  return (
    <div className="container">
      <div className="row pt-4">
        <div className="col-md-12">
          <h1 class="text-white text-center font-weight-bold">Tic Tac Toe in React.js</h1>
        </div>
      </div>
      <div className={`row ${props.visibleBoard}`}>
        <div className="col-md-12">
          <Board />
        </div>
      </div>
      <div className={`row ${props.visibleForm}`}>
        <div className="col-md-12">
          <Form />
        </div>
      </div>
    </div> 
  );
}

export default App;
