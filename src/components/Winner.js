import React from 'react';

function Winner(props){
    return(
    <h1 className="display-4 text-white font-weight-bold text-center pt-5">User winner: ¡{props.winner}!</h1>
        )
}

export default Winner;
