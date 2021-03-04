import { Button } from '@material-ui/core'
import React, { useState }from 'react'
import styled from "styled-components";
import firebase from "firebase";
import { auth, db } from "../firebase";
import { useAuthState } from 'react-firebase-hooks/auth';

function ChatInput({channelName, channelId, chatRef}) {
        
        const [input,setInput] = useState("");
        const [user] = useAuthState(auth);

        const sendMessage = (e) => {
            e.preventDefault();
            var date = new Date().toLocaleString();
            if(!channelId){
                return false;
            }
            db.collection("rooms").doc(channelId).collection("messages").add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                timelocal: date,
                user: user.displayName,
                userImage: user.photoURL,         
            });
            setInput("");
            chatRef.current.scrollIntoView({
                behavior: "smooth",
            });
        };

    return (
        <ChatInputContainer>
            <form>
                <input value={input} onChange={text=>setInput(text.target.value)} placeholder={`Message #${channelName}`}/>
                <Button hidden type="submit" onClick={sendMessage}>
                SEND
                </Button>
            </form>
            
        </ChatInputContainer>
    )
}

export default ChatInput

const ChatInputContainer = styled.div`

    border-radius: 20px;
    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }
    > form > input {
        position: fixed;
        width: 60%;
        bottom: 30px;
        border: 1px solid gray;
        border-radius: 3px;
        padding: 20px;
        outline: none;
    }
    > form > button {
        display: none !important;
    }


`;