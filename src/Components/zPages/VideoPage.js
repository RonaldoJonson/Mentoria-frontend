import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {O_AppBar_basic} from '../Organism/o-appBar';
import { GetVideoById, GetSideVideos } from '../../Services/API_Videos';
import {A_Avatar_basic} from '../Atoms/a-avatar';
import {A_Typography_Title, A_Typography_SubTitle} from '../Atoms/a-typography';
import { M_Video_CompactMiniature } from '../Molecules/m-videoMiniature';
import { A_MenuIcon } from '../Atoms/a-icon';
import { A_Button_Icon } from '../Atoms/a-button';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function VideoPage({
    match: {
        params: { id },
        },
    }) {

    const [video, setVideo] = useState();
    const [nextVideos, setNextVideos] = useState([]);
    const [sideVideos, setSideVideos] = useState([]);

    useEffect(() => {
        GetVideoById(id, SetVideoCallBack);
        GetSideVideos(SetSideVideoCallBack);
    }, []); 

    const SetVideoCallBack = (data) => {
        setVideo(data.video[0]);
    }

    const SetSideVideoCallBack = (data) => {
        setSideVideos(data.feed);
        setNextVideos([... nextVideos, data.feed[0]]);
    }

    const NextVideoMiniature = () => {
        return nextVideos.map((currentVideo, index) => {
            return <Draggable draggableId={"" + index} index={index}>
                {provided => (
                    <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        <M_Video_CompactMiniature key={currentVideo.title} video={currentVideo} index={index}/>
                    </div> 
                )}
            </Draggable>
        });
    }

    const SideBarVideoMiniatures = () => {
        return sideVideos.map((currentVideo, index) => {
           return <Draggable draggableId={"" + index} index={index}>
                {provided => (
                    <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                        <M_Video_CompactMiniature key={currentVideo.title} video={currentVideo} index={index}/>
                    </div> 
                )}
            </Draggable>
        });  
    }

    return <Background>
        <O_AppBar_basic/>
        <PageBackground>
            <PageContent>
                <MainSection>
                    {video && <div>
                        <iframe style={{width:'100%', height:'35vw'}} src={"https://www.youtube.com/embed/" + video.url} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope" allowFullScreen></iframe>
                        <VideoMainInfo>
                            <div style={{height:'70%', marginTop:'20px', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                                <A_Typography_Title text={video.title} size='large'></A_Typography_Title>
                                <A_Typography_SubTitle text={'121,870,675 views • Nov 23, 2009'} size='large'></A_Typography_SubTitle>
                            </div>
                        </VideoMainInfo>    
                        <ChannelInfo>
                            <div style={{height:'100%', marginTop:'20px'}}>
                                <div style={{display:'flex', height:'90%'}}>
                                    <A_Avatar_basic/>
                                    <div style={{marginLeft:'20px', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
                                        <div>   
                                            <A_Typography_Title text={video.title}></A_Typography_Title>
                                            <A_Typography_SubTitle text={'1.86M subscribers'}></A_Typography_SubTitle>
                                        </div>
                                        <div style={{marginBottom:'40px'}}>
                                            <A_Typography_Title text={video.description}></A_Typography_Title>
                                        </div>
                                        <A_Typography_SubTitle text={'SHOW MORE'} size='large'></A_Typography_SubTitle>
                                    </div>
                                </div>
                            </div>
                        </ChannelInfo>
                        <ChannelInfo>

                        </ChannelInfo>
                    </div>}
                </MainSection> 
                <SpacingColumn/>
                <SideBar>
                    {sideVideos && <div style={{width:"97%"}}>
                        <div style={{display:"flex", width:"100%", justifyContent:'space-between'}}>
                            <A_Typography_Title text={'PROXIMO'}/>
                            <div style={{display:"flex", justifyContent:'space-between', width:'100%'}}>
                                <A_Typography_Title text={'REPRODUÇÂO AUTOMATICA'}/>
                                <A_Button_Icon icon={<A_MenuIcon/>}/>
                            </div>
                        </div>
                        <DragDropContext>
                            <Droppable droppableId="NextVideos">
                            {provided => (
                                <div {...provided.droppableProps} ref={provided.innerRef}>
                                    {NextVideoMiniature()} 
                                    {provided.placeholder}
                                </div>
                            )} 
                            </Droppable>
                            <div style={{marginBottom:'20px', marginTop:"20px", width:'100%', border:'solid'}}/>
                            <Droppable droppableId="SideVideos">
                            {provided => ( 
                                <div {...provided.droppableProps} ref={provided.innerRef}>
                                    {SideBarVideoMiniatures()}
                                    {provided.placeholder}
                                </div>
                            )}  
                            </Droppable>   
                        </DragDropContext>
                    </div>}
                </SideBar>
            </PageContent>
        </PageBackground>
    </Background> 
}

export default VideoPage;

const Background = styled.div`
    background-color:${props => props.theme.colors.secondary};
`

const PageBackground = styled.div`
    background-color:${props => props.theme.colors.secondary};
    width:100%;
`

const PageContent = styled.div`
    display:flex;
    width:96.5%;
    margin: auto;
    justify-content: space-between;
`

const SpacingColumn = styled.div`
    width:2%;
    margin:30px 0px 0px 0px;
`

const MainSection = styled.div`
    width:75%;
    margin:30px 0px 0px 0px;
`

const SideBar = styled.div`
    width:33%;
    margin:30px 0px 0px 0px;
`

const VideoMainInfo = styled.div`
    height: 85px;

    border-bottom-style: solid;
    border-width: 1px;
    border-color: ${props => props.theme.colors.white}; 
`

const ChannelInfo = styled.div`
    height: 200px;

    border-bottom-style: solid;
    border-width: 1px;
    border-color: ${props => props.theme.colors.white}; 
`
