import React from 'react';
import {Button} from "@material-ui/core";
import { IconButton } from '@material-ui/core';

export function A_Button_basic (props) {
    return <Button variant={props.InputVariant} color={props.buttonColor} onClick={props.handleClick}>
        {props.buttonText}
    </Button>
}

export function A_Button_Icon (props) {
    return <IconButton variant={props.InputVariant} onClick={props.handleClick} 
        edge={props.edge}
        color={props.buttonColor}
        aria-label={props.label}>
        {props.icon}
    </IconButton>
}
