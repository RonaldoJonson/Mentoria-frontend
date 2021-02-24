import React, {useEffect, useState} from 'react';
import {O_AppBar_basic} from '../Organism/o-appBar';
import { A_Input_fullwidth } from '../Atoms/a-InputField';
import { A_Button_basic } from '../Atoms/a-button';

import { UploadVideo } from '../../Services/API_Videos'

function CreateVideo (){

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [videoURL, setVideoURL] = useState(''); 
    
    const SendVideo = () => {
        UploadVideo(title, description, videoURL, VideoSentCallback)
    }

    const VideoSentCallback = (data) => {
        console.log(data);
    }

    return <div>
        <O_AppBar_basic/>
        <div style={{marginTop:"100px"}}/>
        <A_Input_fullwidth InputTitle="title" InputVariant="standard" value={title} onChange={(event) => setTitle(event.target.value)}/>
        <A_Input_fullwidth InputTitle="description" InputVariant="standard" value={description} onChange={(event) => setDescription(event.target.value)}/>
        <A_Input_fullwidth InputTitle="videoURL" InputVariant="standard" value={videoURL} onChange={(event) => setVideoURL(event.target.value)}/>
        
        <p>youtube URL = https://www.youtube.com/watch?v=<b>cpU7Yrl-AwM</b>&ab_channel=MenITrust</p>
        <p>Embed URL is in between the v= and the &ab_channel</p>
        <p>valid embeding URL = cpU7Yrl-AwM</p>

        <A_Button_basic InputTitle="Send Video" InputVariant="contained" buttonColor="primary" buttonText="Send Video" handleClick={() => SendVideo()}/>
    </div>
}

export default CreateVideo;