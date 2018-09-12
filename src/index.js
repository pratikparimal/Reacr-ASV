import React from 'react';
import ReactDOM from 'react-dom';

import Uncontrolled from './FormComponent/UncontrolledComponent';
import Controlled from './FormComponent/ControlledComponent';

var uncontrol = document.getElementById("formcomponent");
ReactDOM.render(
    <div>
        <Uncontrolled></Uncontrolled>
    </div>, uncontrol
)

var control = document.getElementById("formcomponent");
ReactDOM.render(
    <div>
        <Controlled></Controlled>
    </div>, control
)