import React from 'react';
import Board from './components/Board';
import Form from './components/Form';
import Winner from './components/Winner';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: "",
      invisible: "d-none",
      visual: 2,
      symbol: "X",
      player1: "",
      player2: "",
      winner: "Hola"
    }
    this.goBoard = this.goBoard.bind(this);
    this.selectPlayer = this.selectPlayer.bind(this);
    this.refresh = this.refresh.bind(this);
    this.playersName = this.playersName.bind(this);
    this.winPlayer = this.winPlayer.bind(this);
  }
  //Función que guarda los nombres de usuarios ingresados en los inputs del Form en Player1 y Player2 del state.
  playersName(e) {
    e.target.id === "player1" ? this.setState({ player1: e.target.value }) : this.setState({ player2: e.target.value });
  }
  //Función que nos lleva desde el Form al Board, cumpliendo ciertas condiciones.
  goBoard(e) {
    e.preventDefault();
    if (this.state.player1 === "" || this.state.player2 === "") { alert("Complete the usernames") }
    else if(this.state.player1 === this.state.player2) { alert("Duplicate users") }
    else {
      this.setState({ visual: 2 })
      let a = e.target.id;
      a.includes("X") ? this.setState({ symbol: "X" }) : this.setState({ symbol: "O" });
    }
  }
  //Función que alterna entre X y O las selecciones de los espacios vacíos de la cuadrícula del juego.
  selectPlayer(e) {
    e.preventDefault();
    this.state.symbol === "X" ? this.setState({ symbol: "O" }) : this.setState({ symbol: "X" });
    let a = document.getElementById(e.target.id);
    a.innerHTML = `${this.state.symbol}`
    a.style.pointerEvents = "none";
  }
  //Función para refrescar la ventana actualmente utilizada.
  refresh(e) {
    e.preventDefault();
    window.location.reload();
  }

  winPlayer(){
  }

  render() {
    return (
      <div className="container">
        <div className="row pt-4">
          <div className="col-md-12">
            <h1 class="text-white text-center font-weight-bold">Tic Tac Toe in React.js</h1>
          </div>
        </div>
        <div className={`row ${this.state.visual === 1 ? this.state.visible : this.state.invisible}`}>
          <div className="col-md-12">
            <Form btnBoard={this.goBoard} input={this.playersName} />
          </div>
        </div>
        <div className={`row ${this.state.visual === 2 ? this.state.visible : this.state.invisible}`}>
          <div className="col-md-12">
            <Board select={this.selectPlayer} player={this.state.symbol} refresh={this.refresh} />
          </div>
        </div>
        <div className={`row ${this.state.visual === 3 ? this.state.visible : this.state.invisible}`}>
          <div className="col-md-12">
            <Winner winner={this.state.winner}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
