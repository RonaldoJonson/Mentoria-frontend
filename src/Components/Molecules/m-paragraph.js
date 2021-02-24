import React from 'react';
import {A_Typography_Title, A_Typography_SubText} from '../Atoms/a-typography';

export function M_Paragraph_basic (props) {
    return <div>
        <A_Typography_Title text={props.title}/>
        <A_Typography_SubText text={props.text}/>
    </div>
}