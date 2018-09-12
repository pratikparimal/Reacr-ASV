import React from 'react';
import ReactDOM from 'react-dom';

import Uncontrolled from './FormComponent/UncontrolledComponent';
import Controlled from './FormComponent/ControlledComponent';
import RemoteData from './APIComponent/RemoteData'

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

var userapi = document.getElementById("apicomponent");
ReactDOM.render(
    <div>
        <RemoteData></RemoteData>
    </div>, userapi
)