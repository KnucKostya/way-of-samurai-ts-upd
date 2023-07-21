import React, {ReactElement} from "react";
import s from "./Footer.module.css";
import logo from '../../Common/img/Images/react.png'
import {
    faAndroid,
    faApple,
    faCcMastercard,
    faCcVisa,
    faGithub,
    faInstagram,
    faLinkedinIn,
    faTelegram,
    faWindows,
} from "@fortawesome/free-brands-svg-icons";
import {faMapLocation, faMobileScreen} from "@fortawesome/free-solid-svg-icons";

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
                        <li><FontAwesomeIcon icon={faTelegram} size="lg" pull="left"/><a
                            href={"https://t.me/knucknuck"}>Telegram</a></li>
                        <li><FontAwesomeIcon icon={faLinkedinIn} size="lg" pull="left"/><a
                            href={"https://www.linkedin.com/in/%D0%BA%D0%BE%D1%81%D1%82%D1%8F-%D0%BA%D0%BE%D1%85%D0%B0%D0%BD%D0%BE%D0%B2-776440245"}>LinkedIn</a></li>
                        <li><FontAwesomeIcon icon={faInstagram} size="lg" pull="left"/><a
                            href={"https://instagram.com/knuckless_dev?igshid=OGQ5ZDc2ODk2ZA=="}>Instagram</a></li>
                        <li><FontAwesomeIcon icon={faGithub} size="lg" pull="left"/><a
                            href={"https://github.com/KnucKostya"}>GitHub</a></li>
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