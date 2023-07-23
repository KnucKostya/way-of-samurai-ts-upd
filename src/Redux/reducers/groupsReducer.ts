import { v1 } from 'uuid'
import { LEAVE_GROUP } from '../types'

const initialState: GroupsDataType = [
  {
    id: v1(),
    name: 'Funparty',
    follow: 320,
    type: 'Public',
    logo: 'https://s4x9x8w4.stackpathcdn.com/sites/default/files/styles/auto_1500_width/public/article-images/138756/slideshow-1673439861.jpg',
  },
  {
    id: v1(),
    name: 'ABC News',
    follow: 312,
    type: 'Private',
    logo: 'https://m.media-amazon.com/images/I/61YDuS-81ML.png',
  },
  {
    id: v1(),
    name: 'SEO Zone',
    follow: 28,
    type: 'Public',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSroX50IYAAQoCE_Ijy58kRcFFALT2drG0b-A&usqp=CAU',
  },
  {
    id: v1(),
    name: 'Max Us',
    follow: 7,
    type: 'Public',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7TCfdcvop377fMhtlNNnoiGyVilUjQVbfW59HH1c2WRhqE8TDX3uRZR_vqKMy7LuehCc&usqp=CAU',
  },
  {
    id: v1(),
    name: 'Banana Friend',
    follow: 756,
    type: 'Friends',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNinDG6mX8C8Wjw1DFD5-_5f0iUSGTAMcDTQ&usqp=CAU',
  },
  {
    id: v1(),
    name: 'Bad Boys N Girls',
    follow: 231,
    type: 'Public',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi3rLxGqXShN3P5KwJVIYnHInyPETMT9laPw&usqp=CAU',
  },
  {
    id: v1(),
    name: "Bachelor's Fun",
    follow: 50,
    type: 'Public',
    logo: 'https://i.pinimg.com/originals/8d/7a/e2/8d7ae27fba506a1b38f70eac3261e17a.jpg',
  },
]

export const groupsReducer = (state = initialState, action: GroupActionType): GroupsDataType => {
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
  }) as const

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
