import React from 'react';
import logo from '../../Assets/yt_logo.png';
import styled from 'styled-components';
import { A_SearchBar_basic } from '../Atoms/a-searchBar';
import { A_MenuIcon, A_UploadIcon, A_AppsIcon, A_NotificationsIcon } from '../Atoms/a-icon'; 
import { A_Button_Icon} from '../Atoms/a-button';
import { A_Avatar_basic } from '../Atoms/a-avatar';
import { useHistory } from "react-router-dom";

export function O_AppBar_basic (props) {

    const history = useHistory();

    const NextPage = (page) => {
        history.push("/" + page);
    };

    return (
    <AppBar>
        <ToolBar>
            <LeftMenuContent>
                <A_Button_Icon icon={<A_MenuIcon />} edge='start' buttonColor='inherit' label='open drawer' handleClick={() => NextPage('Home')}/>
                <img src={logo} style={{margin:"auto 0", height:'23px', width:'106px'}} onClick={() => NextPage('Home')}/>
                <div/>
                <div/>
            </LeftMenuContent>
            <SearchContent>
                <A_SearchBar_basic/>
            </SearchContent>
            <RightMenuContent>
                <A_Button_Icon icon={<A_UploadIcon />} edge='start' buttonColor='inherit' label='open drawer' handleClick={() => NextPage('Upload')}/>
                <A_Button_Icon icon={<A_AppsIcon />} edge='start' buttonColor='inherit' label='open drawer' handleClick={() => NextPage('Upload')}/>
                <A_Button_Icon icon={<A_NotificationsIcon />} edge='start' buttonColor='inherit' label='open drawer' handleClick={() => NextPage('Upload')}/>
                <A_Avatar_basic alt='profileAvatar' image='https://picsum.photos/300/200'/>
            </RightMenuContent>     
        </ToolBar>      
    </AppBar>
    )
}


const AppBar = styled.div`
    width:100vw;
    height:60px;
    background-color: ${props => props.theme.colors.primary};
`

const ToolBar = styled.section`
    height:60px;

    display: flex;
    justify-content: space-between;
    align-items:center;
`

const LeftMenuContent = styled.div`
    width:14%;
    display: flex;
    justify-content: space-around;
    align-items:center;
`

const SearchContent = styled.div`
    width:45%;
    height:36px;
    display: flex;
    justify-content: space-between;
    align-items:center;
    background-color: grey;
`

const RightMenuContent = styled.div`
    width:12%;

    margin-right: 40px;

    display: flex;
    justify-content: space-between;
    align-items:center;
`
