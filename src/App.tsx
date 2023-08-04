import React from 'react'
import { HashRouter, Route } from 'react-router-dom'
import './App.css'
import s from './Content.module.css'
import Navbar from './Components/Navbar/Navbar'
import ProfileClassComponent from './Components/Main/Profile/ProfileClassComponent'
import HeaderContainer from './Components/Header/HeaderContainer'
import LoginPage from './Common/Login/LoginPage'
import { Contacts } from './Components/Main/Contacts/Contacts'
import News from './Components/Main/News/News'
import { Friends } from './Components/Main/Friends/Friends'
import { Footer } from './Components/Footer/Footer'
import Music from './Components/Main/Music/Music'
import { Groups } from './Components/Main/Groups/Groups'
import { Messages } from './Components/Main/Dialogs/Messages'

export const App = () => {
  return (
    <HashRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <Contacts />

        <div className={s.content}>
          <Route exact path="/*" render={() => <LoginPage />} />
          <Route
            path="/profile/:userID?"
            render={() => <ProfileClassComponent />}
          />
          <Route path="/dialogs" render={() => <Messages />} />
          <Route path="/users" render={() => <Friends />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/groups" render={() => <Groups />} />
          <Route path={'/login'} render={() => <LoginPage />}></Route>
        </div>
        <Footer />
      </div>
    </HashRouter>
  )
}

export default App
