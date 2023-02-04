import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route} from 'react-router-dom';
import './App.css';
import s from './Content.module.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import ContaineerForDialogs from "./Components/Dialogs/ContaineerForDialogs";
import UsersContainer from "./Components/Users/UsersContainer";
 import ProfileClassComponent from "./Components/Profile/ProfileClassComponent";
import HeaderContainer from "./Components/Header/HeaderContainer";


const AppWithRedux = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>

                <div className={s.content}>
                        {/*<Route path="/profile"*/}
                        {/*       element={<ProfileClassComponent/>}/>*/}
                        <Route path="/profile/:userID?"
                               render={()=><ProfileClassComponent/>}/>

                        <Route path="/dialogs"
                               render={()=><ContaineerForDialogs/>}/>

                        <Route path = "/users"
                               render={()=><UsersContainer/>}/>
                        {/*<Route path="/news/news.jsx/"*/}
                        {/*       element={<News />} />*/}
                        {/*<Route path="/music/music.jsx"*/}
                        {/*       element={<Music />} />*/}
                        {/*<Route path="/settings/settings.jsx"*/}
                        {/*       element={<Settings />} />*/}
                </div>
            </div>
        </BrowserRouter>
    );
}

export default AppWithRedux;
