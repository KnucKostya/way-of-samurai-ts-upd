import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import s from './Content.module.css';
import Navbar from "./Components/Navbar/Navbar";
import ContaineerForDialogs from "./Components/Main/Dialogs/ContaineerForDialogs";
import ProfileClassComponent from "./Components/Main/Profile/ProfileClassComponent";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Common/Login/LoginPage";
import {useLocalStateSection} from "./Common/hooks/useLocalStateSection";
import {Contacts} from "./Components/Main/Contacts/Contacts";
import UsersContainer from "./Components/Main/Users/UsersContainer";
import News from "./Components/Main/News/News";
import {Main, SectionCSSType} from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";


export const AppWithRedux = () => {

    const [section, setSection] = useLocalStateSection("section", "sectionAll")

    const changeGrid = (value: SectionCSSType): void => {
        setSection(value)
    }

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar section={section} changeGrid={changeGrid}/>
                <Contacts />

                <div className={s.content}>
                {/*<div className={section}>*/}
                {/*    <Main section={section} changeGrid={changeGrid}/>*/}
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
                    render={()=><LoginPage />}>
                    </Route>
                    {/*{section === "sectionAll" && <Contacts />}*/}
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default AppWithRedux;


