import React from 'react';
import styled from 'styled-components';
import {O_Form_login} from '../Organism/o-InputForm';
import {M_Paragraph_basic} from '../Molecules/m-paragraph';

function T_LoginPage (){
    return <LoginContainer>
        <MainBar>
            <LoginSideBar>
                <M_Paragraph_basic title='Login' text='login to your account'/>
                <O_Form_login></O_Form_login>   
            </LoginSideBar>
        </MainBar>
        <ImageContainer>
            <img/>
        </ImageContainer>
    </LoginContainer>
}

export default T_LoginPage;

const LoginContainer = styled.div`
    display: flex;
`

const MainBar = styled.div`
    width:50vw;
    height:100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
`

const LoginSideBar = styled.div`
    margin: auto;
    width:50%;
    height:50%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const ImageContainer = styled.div`
    width:50vw;
    height:100vh;
    background-color:blue;
`