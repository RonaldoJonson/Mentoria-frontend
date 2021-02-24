import React from 'react';
import { Search } from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';

export function A_SearchIcon (props) {
    return <Search fontSize="default" style={{fill:'grey'}}/>
}

export function A_MenuIcon (props) {
    return <MenuIcon fontSize="default" style={{fill:'white'}}/>
}

export function A_AddIcon (props) {
    return <AddIcon fontSize="default" style={{fill:'white'}}/>
}

export function A_UploadIcon (props) {
    return <VideoCallIcon fontSize="default" style={{fill:'white'}}/>
}

export function A_AppsIcon (props) {
    return <AppsIcon  fontSize="default" style={{fill:'white'}}/>
}

export function A_NotificationsIcon (props) {
    return <NotificationsIcon fontSize="default" style={{fill:'white'}}/>
}
