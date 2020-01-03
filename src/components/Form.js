import React from 'react';

function Form() {
    return (
        <div className="container">
            <div className="row pt-4">
                <div className="col-md-12">
                    <h3 className="font-weight-bold text-white text-center">Pick A Weapon</h3>
                </div>
            </div>
            <div className="row pt-5">
                <div className="col-md-1"></div>
                <div className="col-md-10 pt-5">
                    <h3 className="font-weight-bold text-center text-white ">CHOOSE YOUR WEAPON</h3>
                </div>
                <div className="col-md-1"></div>
            </div>
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-5 pt-0">
                    <form className="form-group">
                        <input type="text" className="form-control d-inline" />
                    </form>
                </div>    
                    <div className="col-md-5 pl-0">
                        <form className="form-group">
                            <input type="text" className="form-control d-inline" />
                        </form>
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>    
            )
        }
export default Form;