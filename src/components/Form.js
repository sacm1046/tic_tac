import React from 'react';

function Form(props) {
    return (
        <div className="container">
            <div className="row pt-4 pb-3">
                <div className="col-md-12">
                    <h3 className="font-weight-bold text-white text-center">Pick A Weapon</h3>
                </div>
            </div>
            <div className="row pt-5">
                <div className="col-md-2"></div>
                <div className="col-md-8 pt-5 pb-4">
                    <h3 className="font-weight-bold text-center text-white ">CHOOSE YOUR WEAPON</h3>
                </div>
                <div className="col-md-2"></div>
            </div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8 form-inline d-flex justify-content-center">
                    <form className="form-group pb-2">
                        <input type="text" className="form-control" placeholder="Player 1 Username" id="player1" onChange={(e)=>props.input(e)} />
                        <span className="pl-1 pr-1"></span>
                        <input type="text" className="form-control" placeholder="Player 2 Username" id="player2" onChange={(e)=>props.input(e)} />
                    </form>
                </div>
                <div className="col-md-2"></div>
            </div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-4 d-flex justify-content-end pt-1 pb-5">
                    <a href="/" onClick={(e)=>props.btnBoard(e)} id="X" className="text-center display-1 font-weight-bold text-decoration-none text-warning">X</a>
                </div>
                <div className="col-md-4 d-flex justify-content-left pt-1 pb-5">
                    <a href="/" onClick={(e)=>props.btnBoard(e)} id="O" className="text-center display-1 font-weight-bold text-decoration-none">O</a>
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    )
}
export default Form;