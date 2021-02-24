import React from 'react';
import styled from 'styled-components';
import {Typography} from "@material-ui/core";

export function A_Typography_Title (props) {
    return (props.size == 'large'? <Title>
        <b>{props.text}</b>
    </Title>
    : 
    <SmallerTitle>
        <b>{props.text}</b>
    </SmallerTitle>
    )   
}

export function A_Typography_SubTitle (props) {
    return (props.size == 'large'? <SubTitle>
        {props.text}
    </SubTitle>
    : 
    <SmallSubTitle>
        {props.text}
    </SmallSubTitle>
    )
}

export function A_Typography_SubText (props) {
    return <SubText>
        {props.text}
    </SubText>
}

const Title = styled.h2`
    width:100%;
    color:${props => props.theme.colors.title};
    text-align: left;
    vertical-align: center;

    font-size:1.2rem;
    overflow: hidden;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`

const SmallerTitle = styled.h3`
    width:100%;
    color:${props => props.theme.colors.title};
    text-align: left;
    vertical-align: center;

    font-size:1.0rem;
    overflow: hidden;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`

const SubTitle = styled.h4`
    width:100%;
    color:${props => props.theme.colors.subTitle};
    text-align: left;

    font-size:0.97rem;
    overflow: hidden;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`

const SmallSubTitle = styled.h5`
    width:100%;
    color:${props => props.theme.colors.subTitle};
    text-align: left;

    font-size:0.85rem;
    overflow: hidden;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`

const SubText = styled.p`
    width:100%;
    color:${props => props.theme.colors.subTitle};
    text-align: left;

    overflow: hidden;

    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`