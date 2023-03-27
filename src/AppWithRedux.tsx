import React from 'react';
import {BrowserRouter, Redirect} from 'react-router-dom';
import {Route} from 'react-router-dom';
import './App.css';
import s from './Content.module.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import ContaineerForDialogs from "./Components/Dialogs/ContaineerForDialogs";
import UsersContainer from "./Components/Users/UsersContainer";
 import ProfileClassComponent from "./Components/Profile/ProfileClassComponent";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/LoginPage";
import News from "./Components/News/News";


const AppWithRedux = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>

                <div className={s.content}>
                        <Route exact path="/"
                               render={()=><UsersContainer/>}/>
                        <Route path="/profile/:userID?"
                               render={()=><ProfileClassComponent/>}/>

                        <Route path="/dialogs"
                               render={()=><ContaineerForDialogs/>}/>

                        <Route path = "/users"
                               render={()=><UsersContainer/>}/>
                        <Route path="/news/news.jsx/"
                               render={()=><News />}/>
                        {/*<Route path="/music/music.jsx"*/}
                        {/*       element={<Music />} />*/}
                        {/*<Route path="/settings/settings.jsx"*/}
                        {/*       element={<Settings />} />*/}
                    <Route path={'/login'}
                    render={()=><LoginPage />}
                    ></Route>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default AppWithRedux;
