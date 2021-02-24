import React, {useState} from 'react';
import styled from 'styled-components';


export function O_SideBar(props) {
    return <LeftSideBar/>
}

const LeftSideBar = styled.div`
    width:16%;
    min-height:100%;
    background-color: ${props => props.theme.colors.primary};
`