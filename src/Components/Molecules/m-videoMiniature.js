import React from 'react';
import {A_Frame_basic} from '../Atoms/a-frame';
import {A_Avatar_basic} from '../Atoms/a-avatar';
import { A_Button_Icon } from '../Atoms/a-button';
import { A_MenuIcon } from '../Atoms/a-icon';
import { A_Typography_Title } from '../Atoms/a-typography';
import { A_Typography_SubTitle } from '../Atoms/a-typography';

import { useHistory } from "react-router-dom";

export function M_Video_Miniature (props) {

    const video = props.video;
    const history = useHistory();

    const NextPage = (id) => {
        history.push("/video/" + id);
    };

    return <div key={video.title + '_mini'}>
        <img style={{width:"100%", height:"200px"}} src='https://picsum.photos/300/200' onClick={() => NextPage(video.id)}/>
        <div style={{display: 'flex', marginTop:"10px", justifyContent:'space-between', alignItems:'start', width:'100%', height:'50px'}}>
            <A_Avatar_basic alt={video.created_by} image='https://picsum.photos/200/300'></A_Avatar_basic>
            <div style={{display:'flex', flexDirection:'column', justifyContent:"space-between", width:'65%', marginTop:'4px', textAlign:'start'}}>
                <A_Typography_Title text={video.title}></A_Typography_Title>
                <br/>
                <A_Typography_SubTitle text={video.title}></A_Typography_SubTitle>
            </div>
            <A_Button_Icon icon={<A_MenuIcon />} edge='end' buttonColor='inherit' label='open drawer'/>
        </div> 
        <div style={{display: 'flex', width:'100%', height:'50px'}}>
        </div>
    </div> 
}

export function M_Video_CompactMiniature (props) {

    const video = props.video;
    const history = useHistory();

    const NextPage = (id) => {
        history.push("/video/" + id);
    };

    return <div key={video.title + '_mini'} id={video.id} style={{marginBottom:"10px", width:"100%", height:'110px'}}>
        <div style={{display:"flex", width:"100%", height:'100%', justifyContent:'space-between'}}>
            <img src='https://picsum.photos/300/200' draggable={false} style={{width:'37%', height:'100%'}}/>
            <div style={{display:"flex", justifyContent:'space-between', alignItems:'start', width:'60%', height:'100%'}}>
                <div style={{display:"flex", width:'100%', height:'100%', flexDirection:'column'}}>
                    <A_Typography_Title text={video.title}/>
                    <div style={{marginBottom:'10px'}}></div>
                    <A_Typography_SubTitle text={video.title}></A_Typography_SubTitle>
                </div>
                <A_Button_Icon icon={<A_MenuIcon/>}/>
            </div>
        </div>
    </div> 
}