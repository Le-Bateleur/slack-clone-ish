import { FormControl, Input, Button} from '@material-ui/core';
import React, { useState, useEffect } from 'react'
import {useDispatch} from "react-redux";
import styled from "styled-components"
import DialogForm from "./DialogForm"
import { auth, db } from "../firebase.js";
import { enterRoom } from '../features/appSlice';

function SideBarOption({ Icon, title, addChanelOption, id }) {
    const dispatch = useDispatch();
    const [naming, setNaming] = useState(false);
    const handleNaming = () => {
        setNaming(prev=>!prev);
    };
    const addChannel = (input) => {

        /*firebase code*/
        if(input){
            db.collection("rooms").add({
            name: input,
        });
        }
    };
    const selectChannel = () => {

        if(id){
            dispatch(enterRoom({
                roomId: id,
            }));
        }

    };
    return (
        <SideBarOptionContainer onClick={addChanelOption ? handleNaming : selectChannel}>
        {Icon && <Icon fontSize="small" style={{padding:10}}/>}
        {Icon ? (
            <h3>{title}</h3>
        ):(
            <SideBarOptionChannel>
                <span>#</span> {title}
            </SideBarOptionChannel>
        )}

        {naming?<DialogForm done={addChannel}/>:<></>}

        
        </SideBarOptionContainer>
    )
}

export default SideBarOption;

const SideBarOptionContainer = styled.div`
    display:flex;
    font-size: 10px;
    align-items: center;
    padding-left: 2px;
    cursor: pointer;
    
    :hover {
        opacity:0.8;
        background-color: var(--slack-color-three);
    }
    > h3 {
        font-weight: 500;
    }
    > span {
        padding: 15px;
    }
`;

const SideBarOptionFormControl = styled(FormControl)`
    color:white;
    background-color: transparent;
    text-decoration: white; 
    font-weight: 500;
    > input {
        
        color:white;
        background-color:transparent;
        border:none;
        display:flex;
        outline:none;
        border-bottom: 1px solid var(--slack-color-three);

    }
    > button {
        padding: 5px 0;
        flex:1;

        align-self: stretch;
        display: flex;
        align-items:center;
        justify-content:center;
        background-color: transparent;
        border:none;
        outline:none;
        color: white;
        cursor: pointer;
        :hover {
            opacity:0.8;
            border: 1px solid var(--slack-color);
        }

    }
`;

const SideBarOptionChannel = styled.h3`
    padding: 10px 0;
    font-weight: 300;

`;

