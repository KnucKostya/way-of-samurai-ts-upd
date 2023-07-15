import {v1} from "uuid"
import {LEAVE_GROUP} from "../types"

const initialState: GroupsDataType = [
    {id: v1(), name: "Funparty", follow: 32, type: "Public", logo: "group1"},
    {id: v1(), name: "ABC News", follow: 5, type: "Private", logo: "group2"},
    {id: v1(), name: "SEO Zone", follow: 32, type: "Public", logo: "group3"},
    {id: v1(), name: "Max Us", follow: 7, type: "Public", logo: "group4"},
    {id: v1(), name: "Banana Friend", follow: 756, type: "Friends", logo: "group5"},
    {id: v1(), name: "Bad Boys N Girls", follow: 32, type: "Public", logo: "group6"},
    {id: v1(), name: "Bachelor's Fun", follow: 50, type: "Public", logo: "group7"},
]

export const groupsReducer = (
    state = initialState,
    action: GroupActionType,
): GroupsDataType => {
    switch (action.type) {
        case LEAVE_GROUP:
            return state.filter(el => el.id !== action.id)
        default:
            return state
    }
}

export const leaveGroupAC = (id: string) =>
    ({
        type: LEAVE_GROUP,
        id,
    } as const)

// Types
export type GroupType = {
    id: string
    name: string
    follow: number
    type: string
    logo: string
}

export type GroupsDataType = Array<GroupType>

export type GroupActionType = ReturnType<typeof leaveGroupAC>
