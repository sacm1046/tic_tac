import React from 'react';

function Board(props){
    return(
        <div className="container">
            <div className="row pt-2 pb-1">
                <div className="col-md-12">
                    <h3 className="font-weight-bold text-white text-center">It is {props.player} turn!</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                    <button className="bg-white rounded-lg pl-1 pr-1" onClick={(e)=>props.refresh(e)}>Start Over</button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="square col-md-2" id="btn1" onClick={(e)=>props.select(e)}></div>
                <div className="square col-md-2 border-right border-left" id="btn2" onClick={(e)=>props.select(e)}></div>
                <div className="square col-md-2" id="btn3" onClick={(e)=>props.select(e)}></div>
                <div className="col-md-3"></div>
            </div>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="square col-md-2 border-top border-bottom" id="btn4" onClick={(e)=>props.select(e)}></div>
                <div className="square col-md-2 border-top border-bottom border-right border-left" id="btn5" onClick={(e)=>props.select(e)}></div>
                <div className="square col-md-2 border-top border-bottom" id="btn6" onClick={(e)=>props.select(e)}></div>
                <div className="col-md-3"></div>
            </div>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="square col-md-2" id="btn7" onClick={(e)=>props.select(e)}></div>
                <div className="square col-md-2 border-right border-left" id="btn8" onClick={(e)=>props.select(e)}></div>
                <div className="square col-md-2" id="btn9" onClick={(e)=>props.select(e)}></div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
}

export default Board;