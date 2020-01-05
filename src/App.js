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
      visual: 1,
      symbol: "",
      player1: "",
      playerSymbol1: "",
      player2: "",
      playerSymbol2: "",
      winner: "",
    }
    this.goBoard = this.goBoard.bind(this);
    this.selectPlayer = this.selectPlayer.bind(this);
    this.refresh = this.refresh.bind(this);
    this.playersName = this.playersName.bind(this);
  }
  //Función que guarda los nombres de usuarios ingresados en los inputs del Form en Player1 y Player2 del state.
  playersName(e) {
    e.target.id === "player1" ? this.setState({ player1: e.target.value }) : this.setState({ player2: e.target.value });
  }
  //Función que nos lleva desde el Form al Board, cumpliendo ciertas condiciones.
  goBoard(e) {
    e.preventDefault();
    if (this.state.player1 === "" || this.state.player2 === "") { alert("Complete the usernames") }
    else if (this.state.player1 === this.state.player2) { alert("Duplicate users") }
    else {
      this.setState({ visual: 2 })
      let a = e.target.textContent;
      if (a === "X") {
        this.setState({ symbol: "X" });
        this.setState({ playerSymbol1: "X" })
        this.setState({ playerSymbol2: "O" })
      }
      else {
        this.setState({ symbol: "O" });
        this.setState({ playerSymbol1: "O" })
        this.setState({ playerSymbol2: "X" })
      }
    }
  }
  //Función que alterna entre X y O las selecciones de los espacios vacíos de la cuadrícula del juego.
  selectPlayer(e) {
    e.preventDefault();
    let a = document.getElementById(e.target.id);
    a.innerHTML = `${this.state.symbol}`
    a.style.pointerEvents = "none";
    this.state.symbol === "X" ? this.setState({ symbol: "O" }) : this.setState({ symbol: "X" });

    let btn1 = document.getElementById("btn1").textContent;
    let btn2 = document.getElementById("btn2").textContent;
    let btn3 = document.getElementById("btn3").textContent;
    let btn4 = document.getElementById("btn4").textContent;
    let btn5 = document.getElementById("btn5").textContent;
    let btn6 = document.getElementById("btn6").textContent;
    let btn7 = document.getElementById("btn7").textContent;
    let btn8 = document.getElementById("btn8").textContent;
    let btn9 = document.getElementById("btn9").textContent;

    if (btn1 === "X" && btn2 === "X" && btn3 === "X" ||
      btn4 === "X" && btn5 === "X" && btn6 === "X" ||
      btn7 === "X" && btn8 === "X" && btn9 === "X" ||
      btn1 === "X" && btn4 === "X" && btn7 === "X" ||
      btn2 === "X" && btn5 === "X" && btn8 === "X" ||
      btn3 === "X" && btn6 === "X" && btn9 === "X" ||
      btn1 === "X" && btn5 === "X" && btn9 === "X" ||
      btn3 === "X" && btn5 === "X" && btn7 === "X") {
      this.setState({ visual: 3 })
      //console.log(this.state.playerSymbol1)
      this.state.playerSymbol1 === "X" ? this.setState({ winner: this.state.player1 }) : this.setState({ winner: this.state.player2 })
    }

    else if (btn1 === "O" && btn2 === "O" && btn3 === "O" ||
      btn4 === "O" && btn5 === "O" && btn6 === "O" ||
      btn7 === "O" && btn8 === "O" && btn9 === "O" ||
      btn1 === "O" && btn4 === "O" && btn7 === "O" ||
      btn2 === "O" && btn5 === "O" && btn8 === "O" ||
      btn3 === "O" && btn6 === "O" && btn9 === "O" ||
      btn1 === "O" && btn5 === "O" && btn9 === "O" ||
      btn3 === "O" && btn5 === "O" && btn7 === "O") {
      this.setState({ visual: 3 })
      //console.log(this.state.playerSymbol1)
      this.state.playerSymbol1 === "O" ? this.setState({ winner: this.state.player1 }) : this.setState({ winner: this.state.player2 })
    }
  }
  //Función para refrescar la ventana actualmente utilizada.
  refresh(e) {
    e.preventDefault();
    window.location.reload();
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
            <Winner winner={this.state.winner} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
