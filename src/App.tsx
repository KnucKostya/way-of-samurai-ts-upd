import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import s from './Content.module.css';
import Navbar from "./Components/Navbar/Navbar";
import ProfileClassComponent from "./Components/Main/Profile/ProfileClassComponent";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Common/Login/LoginPage";
import {useLocalStateSection} from "./Common/hooks/useLocalStateSection";
import {Contacts} from "./Components/Main/Contacts/Contacts";
import News from "./Components/Main/News/News";
import {SectionCSSType} from "./Components/Main/Main";
import {Friends} from "./Components/Main/Friends/Friends";
import {Footer} from "./Components/Footer/Footer";
import Music from "./Components/Main/Music/Music";
import {Groups} from "./Components/Main/Groups/Groups";
import {Messages} from "./Components/Main/Dialogs/Messages";


export const App = () => {

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
                        <Route exact path="/"
                               render={()=><ProfileClassComponent/>}/>
                        <Route path="/profile/:userID?"
                               render={()=><ProfileClassComponent/>}/>
                        <Route path="/dialogs"
                               render={()=><Messages/>}/>
                        <Route path = "/users"
                               render={()=><Friends/>}/>
                        <Route path="/news"
                               render={()=><News />}/>
                        <Route path="/music"
                               render={()=><Music />} />
                    <Route path="/groups" render={()=><Groups />} />
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

export default App;


