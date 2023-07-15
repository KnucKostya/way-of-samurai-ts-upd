import React, {ReactElement} from "react";
import s from "./Footer.module.css";
import logo from '../../Common/img/Images/react.png'
import {
    faCcMastercard,
    faCcVisa,
    faAndroid,
    faApple,
    faWindows,
    faFacebook,
    faTwitter,
    faInstagram,
    faGooglePlusG,
    faPinterestSquare,
} from "@fortawesome/free-brands-svg-icons";
import {
    faMobileScreen,
    faMapLocation
} from "@fortawesome/free-solid-svg-icons";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Footer: React.FC = (): ReactElement | null => {
    // if (section === "sectionLogout" || section === "sectionError") {
    //     return null
    // }

    return (
        <div className={s.footer}>
            <div className={s.footerInfo}>
                <div className={s.footerColumn}>
                    <img
                        src={logo}
                        alt="knuckless"/>
                    <p>The Social Network. <br/> 2023.
                    </p>
                    <ul>
                        <li><FontAwesomeIcon icon={faMapLocation} size="lg" pull="left"/>Ukraine, Kharkiv
                        </li>
                        <li><FontAwesomeIcon icon={faMobileScreen} size="lg" pull="left"/>+380-99-40-399
                        </li>
                    </ul>
                </div>
                <div className={s.footerColumn}>
                    <h4>Follow</h4>
                    <ul>
                        <li><FontAwesomeIcon icon={faFacebook} size="lg" pull="left"/><a
                            href={"#"}>Facebook</a></li>
                        <li><FontAwesomeIcon icon={faTwitter} size="lg" pull="left"/><a
                            href={"#"}>Twitter</a></li>
                        <li><FontAwesomeIcon icon={faInstagram} size="lg" pull="left"/><a
                            href={"#"}>Instagram</a></li>
                        <li><FontAwesomeIcon icon={faGooglePlusG} size="lg" pull="left"/><a
                            href={"#"}>Google+</a></li>
                        <li><FontAwesomeIcon icon={faPinterestSquare} size="lg" pull="left"/><a
                            href={"#"}>Pintrest</a>
                        </li>
                    </ul>
                </div>
                <div className={s.footerColumn}>
                    <h4>Navigate</h4>
                    <ul>
                        <li><a href={"#"}>About</a></li>
                        <li><a href={"#"}>Us Contact</a></li>
                        <li><a href={"#"}>Us Terms & Conditions</a></li>
                        <li><a href={"#"}>RSS Syndication</a></li>
                        <li><a href={"#"}>Sitemap</a></li>
                    </ul>
                </div>
                <div className={s.footerColumn}>
                    <h4>Useful Links</h4>
                    <ul>
                        <li><a href={"#"}>Leasing</a></li>
                        <li><a href={"#"}>Submit Route</a></li>
                        <li><a href={"#"}>How Does It Work?</a></li>
                        <li><a href={"#"}>Agent Listings</a></li>
                        <li><a href={"#"}>View All</a></li>
                    </ul>
                </div>
                <div className={s.footerColumnButton}>
                    <h4>Download Apps</h4>
                    <ul>
                        <li><FontAwesomeIcon className={s.fa} icon={faAndroid} size="lg"
                                             pull="left"/><a
                            href="#">Android</a></li>
                        <li><FontAwesomeIcon className={s.fa} icon={faApple} size="lg"
                                             pull="left"/><a
                            href="#">IPhone</a></li>
                        <li><FontAwesomeIcon className={s.fa} icon={faWindows} size="lg"
                                             pull="left"/><a
                            href="#">Windows</a></li>
                    </ul>
                </div>
            </div>
            <div className={s.reserved}>
                <p> ©Knuckless 2023. All rights reserved.
                    <FontAwesomeIcon icon={faCcVisa} size="2x" pull="right"/>
                    <FontAwesomeIcon icon={faCcMastercard} size="2x" pull="right"/>
                </p>
            </div>
        </div>
    )
}

// TYPES
// type FooterPropsType = {
//     section: string
// }