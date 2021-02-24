import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { A_SearchIcon } from './a-icon';

export function A_SearchBar_basic (props) {
    const [search, setSearch] = useState('');
    const history = useHistory();

    const Search = () => {
        history.push(`/Search/${search}`);
    };

    return <SearchBarContent>
        <SearchBar type='text' placeholder='Search' value={search.value} onChange={(newValue) => setSearch(newValue.target.value)} />
        <SearchBarButton type='button' onClick={() => Search()}><A_SearchIcon/></SearchBarButton>
    </SearchBarContent>
}


const SearchBarContent = styled.div`
    width:100%;
    height:100%;
    display: flex;
    align-items:center;
`

const SearchBar = styled.input`
    width:89%;
    height:100%;
    border-radius:0px;

    background-color:#121212;
    color:white;

    padding:12px;
`

const SearchBarButton = styled.button`
    width:11%;
    height:100%;
    border-radius:0px;

    background-color:#313131;
`

