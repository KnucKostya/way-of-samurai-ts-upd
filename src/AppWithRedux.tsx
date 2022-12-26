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
import {RootState, store, useAppSelector} from '../src/Redux/store'
import {useSelector} from "react-redux";
import PresentationForDialogs from "./Components/Dialogs/PresentationForDialogs";





const AppWithRedux = () => {

    // const profilePage = useSelector<RootState, Profilepage>((state) => state.profilePage)

    const profilePage = useAppSelector(state=>state.profilePage)
    const messagePage = useAppSelector(state => state.messagesPage)

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <div className={s.content}>
                    <Routes>
                        <Route path="/"
                               element={<Profile
                                   postData={profilePage.postData}
                                   textArreaText={profilePage.textArreaText}
                                   dispatch={store.dispatch.bind(store)}
                               />}/>
                        <Route path="/dialogs"
                               element={<PresentationForDialogs users={messagePage.users}
                                                 messages={messagePage.messages}
                                                 textArreaValueforDialogs={messagePage.textArreaDialog}
                                                 dispatch={store.dispatch.bind(store)}
                               />}/>
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
