import React, {ReactElement} from "react"
import styles from "./Main.module.css"
import {useAppSelector} from "../../Redux/store";
import {Redirect, Route} from "react-router-dom";
import UsersContainer from "./Users/UsersContainer";
import ProfileClassComponent from "./Profile/ProfileClassComponent";
import ContaineerForDialogs from "./Dialogs/ContaineerForDialogs";
import News from "./News/News";
import LoginPage from "../../Common/Login/LoginPage";


// const Photos = React.lazy(() => import("./Photos/Photos"))
// const Videos = React.lazy(() => import("./Videos/Videos"))

export const Main: React.FC<MainPropsType> = React.memo(({section, changeGrid}): ReactElement | null => {
    const isAuth = useAppSelector(state => state.auth.isAuth)

    if (section === "sectionLogout") {
        return null
    }

    // Authorization check
    if (!isAuth) {
        changeGrid("sectionLogout")
        return <Redirect to="logout" />
    }

    return (
        <div className={styles.main}>
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

                {/*<Route path="logout" render={()=><Logout changeGrid={changeGrid} />} />*/}
        </div>
    )
})

// TYPES
type MainPropsType = {
    section: string
    changeGrid: (value: SectionCSSType) => void
}

export type SectionCSSType =
    | "sectionAll"
    | "sectionMessages"
    | "sectionLogout"
    | "sectionError"