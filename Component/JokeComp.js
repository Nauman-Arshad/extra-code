import { PinDropSharp } from '@material-ui/icons';
import React from 'react';
function JokeComp(Props) {
    return (
        <div>
            <h5 style={{ color: "purple" }}>Question:{Props.question}</h5>
            <h5 style={{ color: "#888888" }}>Answer:{Props.punchLine}</h5>
            <hr />


        </div>
    )
}
export default JokeComp