import React from 'react';


function Greeting() {
    let curDate = new Date();
    curDate = curDate.getHours();
    let greeting = '';
    const cssStyle = {};

    if (curDate >= 1 && curDate < 12) {
        greeting = 'Good Morning';
        cssStyle.color = 'green';
    } else if (curDate >= 12 && curDate < 19) {
        greeting = 'Good AfterNoon';
        cssStyle.color = 'yellow';
    } else {
        greeting = 'Good Night';
        cssStyle.color = 'blue';
    }
    return (
        <>
            <div>
                <h1>Hello! ,<span style={cssStyle}>{greeting}</span></h1>
            </div>
        </>
    );
}
export default Greeting;