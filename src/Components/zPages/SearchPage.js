import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {GetFeed} from '../../Services/API_Videos';
import {O_AppBar_basic} from '../Organism/o-appBar';
import {M_Video_Search} from '../Molecules/m-videoSearchResult';
import { O_SideBar } from '../Organism/o-sideBar'

function SearchPage () {
    const [feed, setFeed] = useState([]);

    useEffect(() => {
        GetFeed(SetFeedVariables);
    }, []);

    const SetFeedVariables = (data) => {
        setFeed(data.feed);
    }

    function RenderFeed (){
        return feed.map(video => {
            return <div key={video.title}>
                <M_Video_Search video={video} />
            </div>
        })
    }

    return <div>
        <O_AppBar_basic/>
        <div style={{width:"100vw", display:"flex"}}>
            <O_SideBar style={{minHeight:'92vh'}}/>
            <MainContent>
                <div style={{width:"92%", margin:"30px 30px", display:"flex", flexDirection:'column', justifyContent:"start"}}>
                    {feed && RenderFeed()}
                </div>
            </MainContent>
        </div>
    </div>
}

export default SearchPage;

const MainContent = styled.div`
    width:84%;
    min-height:92vh;
    background-color: ${props => props.theme.colors.secondary};
`