import React from 'react'
import ReactDOM from 'react-dom'

const customStyle = {
  color: ""
}

const date = new Date();
const CurrentTime = date.getHours()
let greeting;
if (CurrentTime < 12) {
  greeting = "Good Morning";
  customStyle.color = "green";
} else if (CurrentTime < 18) {
  greeting = "Good AfterNoon";
  customStyle.color = "orange";
} else {
  greeting = "Good Night";
  customStyle.color = "gray";
}

ReactDOM.render(
  <>
    <h1 className="heading" style={customStyle}>{greeting}</h1>
  </>,
  document.getElementById('root')
)


