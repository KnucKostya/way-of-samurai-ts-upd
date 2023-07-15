import React, {ReactElement} from "react"
import styles from "./Groups.module.css"
import Group from "./Group/Group"
import {ShowMore} from "../../../UIKit/ShowMore"
import {useAppSelector} from "../../../Redux/store";

export const Groups = (): ReactElement => {
    const groupsData = useAppSelector(state => state.groupsData)

    const groupElement = groupsData.map(group => (
        <Group
            key={group.id}
            id={group.id}
            name={group.name}
            follow={group.follow}
            type={group.type}
            logo={group.logo}
        />
    ))

    return (
        <div className={styles.groups}>
            <div className={styles.title}>Joined Groups</div>
            {groupElement}
            <ShowMore callback={() => {}} />
        </div>
    )
}
