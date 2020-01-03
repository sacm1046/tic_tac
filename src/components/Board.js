import React from 'react';

function Board(){
    return(
        <div className="container">
            <div className="row pt-2 pb-1">
                <div className="col-md-12">
                    <h3 className="font-weight-bold text-white text-center">It is X turn!</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                    <label className="bg-white rounded-lg pl-2 pr-2">Start Over</label>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="square col-md-2">X</div>
                <div className="square col-md-2 border-right border-left">O</div>
                <div className="square col-md-2">X</div>
                <div className="col-md-3"></div>
            </div>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="square col-md-2 border-top border-bottom">O</div>
                <div className="square col-md-2 border-top border-bottom border-right border-left">X</div>
                <div className="square col-md-2 border-top border-bottom">O</div>
                <div className="col-md-3"></div>
            </div>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="square col-md-2">O</div>
                <div className="square col-md-2 border-right border-left">X</div>
                <div className="square col-md-2">O</div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
}

export default Board;