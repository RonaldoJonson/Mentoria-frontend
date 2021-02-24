import React from 'react';
import { Link } from '@material-ui/core';

export function A_link_basic (props) {
    return <Link href={props.link}>
    {props.text}
  </Link>
}