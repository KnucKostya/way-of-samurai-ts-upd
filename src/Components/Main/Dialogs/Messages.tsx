import React, {ReactElement} from "react"
import styles from "./Messages.module.css"
import {Dialog} from "./Message/Dialog"
import {AddMessage} from "./AddMessage/AddMessage"
import {useAppSelector} from "../../../Redux/store";
import {Contact} from "../Contacts/Contact/Contact";

export const Messages = (): ReactElement => {
    const friendsData = useAppSelector(state => state.friendsData.friends)

    let friendsDataFilter = friendsData.filter(el => el.followed)

    const contactElement = friendsDataFilter.map(contact => (
        <Contact
            key={contact.id}
            name={contact.name}
            email={contact.email}
            photos={contact.photos}
            id={contact.id}
        />
    ))
    return (
        <div className={styles.messages}>
            <div className={styles.title}>All Messages</div>
            <div className={styles.content}>
                <div>
                    <div className={styles.contactElement}>{contactElement}</div>
                </div>
                <div className={styles.main}>
                    <Dialog />
                    <AddMessage />
                </div>
            </div>
        </div>
    )
}
