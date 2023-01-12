import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Routes, Route} from 'react-router-dom';
import './App.css';
import s from './Content.module.css';
import Dialogs from './Components/Dialogs/Dialogs';
import {Profilepage, State, textArreaValueforDialogs, TsarType} from "./Redux/state";
import Profile from "./Components/Profile/Profile";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import {store, useAppSelector} from '../src/Redux/store'
import ContaineerForDialogs from "./Components/Dialogs/ContaineerForDialogs";
import Users from "./Components/Users/Users";
import UsersContainer from "./Components/Users/UsersContainer";


const AppWithRedux = () => {

    // const profilePage = useSelector<RootState, Profilepage>((state) => state.profilePage)

    const profilePage = useAppSelector(state => state.profilePage)
    const messagePage = useAppSelector(state => state.messagesPage)

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <div className={s.content}>
                    <Routes>
                        <Route path="/"
                               element={<Profile/>}/>

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
