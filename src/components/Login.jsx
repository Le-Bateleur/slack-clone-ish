import React from 'react';
import styled from "styled-components";
import logo from "./images/logo.png";
import { Button } from "@material-ui/core";
import {auth, provider} from "../firebase";
function Login() {
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error)=>alert(error.message));

    };
    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src={logo} alt="logo"/>
                <h2>Sign In to Alquimia</h2>
                <img className="googleIcon" src="https://www.flaticon.es/svg/vstatic/svg/281/281764.svg?token=exp=1614729772~hmac=ac8c8cf874764b99fe715d2784fa92ef" alt="google-icon"/>
                <Button type="submit" onClick={signIn}>Sign in with Google</Button>
            </LoginInnerContainer>
        </LoginContainer>
    )
}

export default Login


const LoginContainer = styled.div`
    background-color: var(--slack-color-two);
    height: 100vh;
    display:grid;
    place-items: center;

`;

const LoginInnerContainer = styled.div`
    padding: 100px;
    text-align: center;
    background-color: white;
    border-radius: 10px;
    box-shadow: 5px 2px 2px gray;
    justify-content:center;
    align-items:center;
    > .googleIcon {
        height: 25px;
        width: 25px;
        margin-top:20px;
        padding-top:20px;
    }
    > Button {
    }
`;