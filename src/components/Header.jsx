import React from 'react';
import styled from "styled-components";
import {Avatar} from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

function Header() {
    const [user] = useAuthState(auth);
    return (
        <HeaderContainer>
            
            <HeaderLeft>
                <HeaderAvatar onClick={()=>auth.signOut()}src={user?.photoURL} alt={user?.displayName}
                />
                <AccessTimeIcon />
            </HeaderLeft>
            <HeaderSearch>
                <input placeholder="Search the Alquimia"/>
                <SearchIcon />
            </HeaderSearch>

            <HeaderRight>
                <HelpOutlineIcon />
            </HeaderRight>

        </HeaderContainer>
    )
}

export default Header;

const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: "space-between";
    background-color: var(--slack-color);
    padding: 10px 0;

`;

const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;
    color:white;
    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 30px;
    }
`;

const HeaderAvatar = styled(Avatar)`
    cursor: pointer;
    :hover {opacity: 0.8}
`;

const HeaderSearch = styled.div`
    flex: 0.4;
    display: flex;
    text-align:center;
    opacity: 1;
    border-radius: 6px;
    background-color: var(--slack-color-four);
    color: var(--slack-color);
    border: 1px white solid;
    > input {
        background-color: transparent;
        border: none;
        text-align: center;
        color: var(--slack-color);
        min-width: 30vw;
        outline: 0;
        ::placeholder {
            color: grey;
        }
    }
`;

const HeaderRight = styled.div`
    flex: 0.3;
    display:flex;
    color: white;
    align-items: flex-end;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 20px;
    }
`;