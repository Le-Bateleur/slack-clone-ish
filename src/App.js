import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";
import SideBar from "./components/SideBar";
import Chat from "./components/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Login from "./components/Login";
import logo from "./components/images/logo.png";
import Spinner from "react-spinkit";
function App() {
  const [user,loading] = useAuthState(auth);
  if(loading){
    return (
      <AppLoading>
        <AppLoadingContents>
          <img src={logo} alt="logo"/>
          <Spinner 
            name="ball-spin-fade-loader"
            color="red"
            fadeIn="none"
          />
        </AppLoadingContents>
      </AppLoading>
    );
  }
  
  return (
    <div className="App">
      <Router>
      {!user ? (
        <Login />
      ) : (
        <>
        <Header />
        <AppBody>
          <SideBar />
          <Switch>
            <Route path="/">
              <Chat />
            </Route>
          </Switch>
        </AppBody>
        </>)}
          
    </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: ${window.innerHeight};
`;
const AppLoading = styled.div`
  display:grid;
  place-items:center;
  height: 100vh;
  width: 100%;
`;
const AppLoadingContents = styled.div`
  text-align: center;
  padding-bottom:100px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;

  }
`;