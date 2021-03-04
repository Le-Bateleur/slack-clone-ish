import React from 'react';
import styled from "styled-components";

function Message({message,timestamp,timelocal,user,userImage,}) {
    return (
        <MessageContainer>
            <img src={userImage} alt="userImage"/>
            <MessageInfo>
                <h4>
                    {user}{""}
                    <span>
                        {timelocal}
                    </span>
                    <p>
                       {message} 
                    </p>
                </h4>
            </MessageInfo>
        </MessageContainer>
    )
}

export default Message

const MessageContainer = styled.div`
    display:flex;
    align-items: center;
    padding:20px;
    > img {
        height: 50px;
        border-radius: 8px;
    }
`;
const MessageInfo = styled.div`
    padding-left: 10px;
    > h4 {
        font-weight: 400;
    }
    > h4 > span {
        color: gray;
        font-weight: 300;
        margin-left: 4px;
        font-size: 10px;
    }
`;
