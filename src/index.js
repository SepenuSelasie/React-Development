import React from 'react';
import ReactDOM from 'react-dom';
let counter = 0;
function show()
{
    counter++;
    const element = <p>{counter}</p>;
ReactDOM.render(element, document.getElementById("root"));
}
setInterval(show, 1000)