import React from 'react';
import styled from 'styled-components';
import {A_Frame_basic} from '../Atoms/a-frame';
import {A_Avatar_basic} from '../Atoms/a-avatar';
import { A_Typography_Title } from '../Atoms/a-typography';
import { A_Typography_SubText } from '../Atoms/a-typography';

import { useHistory } from "react-router-dom";

export function M_Video_Search (props) {

    const video = props.video;
    const history = useHistory();

    const NextPage = (id) => {
        history.push("/video/" + id);
    };

    return <div key={video.title + '_mini'}>
        <VideoRow> 
            <img style={{width:"400px", height:"100%"}} src='https://picsum.photos/400/300' onClick={() => NextPage(video.id)}/>
            <div style={{display:'flex', flexDirection:'column', justifyContent:"space-between", marginLeft:'20px', maxWidth:'100%', height:'70%'}}>
                <div>
                    <A_Typography_Title text={video.title}/>
                    <A_Typography_SubText text={video.description}/>
                </div>
                <div style={{display:'flex', alignItems:'center'}}>
                    <A_Avatar_basic/>
                    <div style={{marginRight:'10px'}}/>
                    <A_Typography_SubText text={video.description}/>
                </div>
                <A_Typography_SubText text={'TM & © 2005 Cartoon Network. WarnerMedia Company. All Rights Reserved to CartoonNetwork.'}/>
            </div>
        </VideoRow> 
    </div> 
}

const VideoRow = styled.div`
    height:230px;

    display:flex;
    flex-direction:row;
    align-items:start;
    width:100%;

    margin-bottom:20px;
`

