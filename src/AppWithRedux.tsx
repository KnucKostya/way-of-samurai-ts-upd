import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import s from './Content.module.css';
import Navbar from "./Components/Navbar/Navbar";
import ContaineerForDialogs from "./Components/Dialogs/ContaineerForDialogs";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileClassComponent from "./Components/Profile/ProfileClassComponent";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/LoginPage";
import News from "./Components/News/News";
import {compose} from "redux";
import {connect} from "react-redux";
import {RootReducersType} from "./Redux/store";
import Preloader from "./Common/Preloader";
import {InitializeApp} from "./Redux/appReducer";


class AppWithRedux extends React.Component<CommonType> {

    componentDidMount() {
        this.props.InitializeApp()
    }

    render() {

        if(!this.props.isInitialized){
           return <Preloader/>
        }

        return (
            <BrowserRouter>
                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>

                    <div className={s.content}>
                        <Route exact path="/"
                               render={() => <UsersContainer/>}/>
                        <Route path="/profile/:userID?"
                               render={() => <ProfileClassComponent/>}/>

                        <Route path="/dialogs"
                               render={() => <ContaineerForDialogs/>}/>

                        <Route path="/users"
                               render={() => <UsersContainer/>}/>
                        <Route path="/news/news.jsx/"
                               render={() => <News/>}/>
                        {/*<Route path="/music/music.jsx"*/}
                        {/*       element={<Music />} />*/}
                        {/*<Route path="/settings/settings.jsx"*/}
                        {/*       element={<Settings />} />*/}
                        <Route path={'/login'}
                               render={() => <LoginPage/>}
                        ></Route>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mstp = (state:RootReducersType) => {
    return {
        isInitialized:state.app.isInitialized
    }
}
const mdtp = {InitializeApp}


export default compose<React.FC>(connect(mstp, mdtp))(AppWithRedux);

// types
export type CommonType = MstpType & MdtpType
export type MstpType = ReturnType<typeof mstp>
export type MdtpType = typeof mdtp