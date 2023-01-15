import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import s from './Content.module.css';
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import ContaineerForDialogs from "./Components/Dialogs/ContaineerForDialogs";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileClassComponent from "./Components/Profile/Profile";


const AppWithRedux = () => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <div className={s.content}>
                    <Routes>
                        <Route path="/profile"
                               element={<ProfileClassComponent/>}/>

                        <Route path="/dialogs"
                               element={<ContaineerForDialogs/>}/>

                        <Route path = "/users"
                               element={<UsersContainer/>}/>
                        {/*<Route path="/news/news.jsx/"*/}
                        {/*       element={<News />} />*/}
                        {/*<Route path="/music/music.jsx"*/}
                        {/*       element={<Music />} />*/}
                        {/*<Route path="/settings/settings.jsx"*/}
                        {/*       element={<Settings />} />*/}
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default AppWithRedux;
