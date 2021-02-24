import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {GetFeed} from '../../Services/API_Videos';
import {O_AppBar_basic} from '../Organism/o-appBar';
import {M_Video_Miniature} from '../Molecules/m-videoMiniature';

import { O_SideBar } from '../Organism/o-sideBar'

function T_HomePage (){

    const [feed, setFeed] = useState([]);

    useEffect(() => {
        GetFeed(SetFeedVariables);
    }, []);

    const SetFeedVariables = (data) => {
        setFeed(data.feed);
    }

    function RenderFeed (){
        return feed.map(video => {
            return <div key={video.title} style={{width:"100%", height:"300px", maxHeight:'350px'}}>
                <M_Video_Miniature video={video}/>
            </div>
        })
    }

    return <div>
        <O_AppBar_basic/>
        <div style={{width:"100vw", display:"flex"}}>
            <O_SideBar style={{minHeight:'92vh'}}/>
            <MainContent>
                <div style={{width:"100%", height:'90%', marginTop:'30px', marginLeft:'20px', display:"grid", gridTemplateColumns:"repeat(auto-fit, 300px)", gridGap: '20px'}}>
                    {feed && RenderFeed()}
                </div>
            </MainContent>
            <RightSideMargin style={{width:"5%", minHeight:"92vh", backgroundColor:'#181818'}}/>
        </div>
    </div>
}

export default T_HomePage;

const MainContent = styled.div`
    width:85%;
    min-height:92vh;
    background-color: ${props => props.theme.colors.secondary};
`

const RightSideMargin = styled.div`
    width:1%;
    min-height:92vh;
    background-color: ${props => props.theme.colors.primary};
`