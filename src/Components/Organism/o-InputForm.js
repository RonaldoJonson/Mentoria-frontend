import React , {useState, useEffect} from 'react';
import styled from 'styled-components';
import {A_Input_basic, A_Input_password } from "../Atoms/a-InputField";
import {A_link_basic} from "../Atoms/a-link"; 
import {A_Button_basic} from '../Atoms/a-button';
import {Login} from '../../Services/API_User';
import {Register} from '../../Services/API_User';

import { useHistory } from "react-router-dom";

export function O_Form_login () {
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    const NextPage = () => {
        history.push("/home");
    };

    return <ContentFlex>
        <A_Input_basic InputTitle="Email" InputVariant="standard" value={userEmail} onChange={(event) => setUserEmail(event.target.value)}/>
        <A_Input_password InputTitle="Password" InputVariant="standard" value={password} onChange={(event) => setPassword(event.target.value)}/>

        <A_link_basic text='Forgot your password?' link='register'/>
        
        <A_Button_basic InputTitle="Login" InputVariant="contained" buttonColor="primary" buttonText="Login" handleClick={() => Login(userEmail, password, NextPage)}/>  
        <A_Button_basic InputTitle="Create Account" InputVariant="outlined" buttonColor="primary" buttonText="Create Account" handleClick={() => history.push("/Register")}/>
    </ContentFlex>
}

export function O_Form_register () {

    const [userName, setUsername] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const history = useHistory();

    const NextPage = () => {
        history.push("/");
    };

    return <ContentFlex>
        <A_Input_basic InputTitle="User" InputVariant="standard" value={userName} onChange={(event) => setUsername(event.target.value)}/>
        <A_Input_basic InputTitle="Email" InputVariant="standard" value={userEmail} onChange={(event) => setUserEmail(event.target.value)}/>
        <A_Input_password InputTitle="Password" InputVariant="standard" value={password} onChange={(event) => setPassword(event.target.value)}/>          
        <A_Input_password InputTitle="Confirm Password" InputVariant="standard" value={passwordConfirmation} onChange={(event) => setPasswordConfirmation(event.target.value)}/>          
        <A_Button_basic InputTitle="Login to existing account" InputVariant="outlined" buttonColor="primary" buttonText="Login to existing account" handleClick={() => NextPage()}/>
        <A_Button_basic InputTitle="Register" InputVariant="contained" buttonColor="primary" buttonText="Register" handleClick={() => Register(userName, userEmail, password, NextPage)}/>
    </ContentFlex>
}

const ContentFlex = styled.div`
        width: 100%;
        height: 100%;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    `