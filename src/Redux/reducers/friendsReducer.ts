import { v1 } from 'uuid'
import { ThunkDispatch } from 'redux-thunk'
import { RootState, RootThunkType } from '../store'
import { friendsAPI } from '../../api/api'

export const CHANGE_FRIEND_STATUS = 'CHANGE_FRIEND_STATUS'
export const FOLLOWING_USER = 'FOLLOWING_USER'
export const UNFOLLOWING_USER = 'UNFOLLOWING_USER'
export const SET_USERS = 'SET_USERS'
export const SHOW_MORE_FOUND_USERS = 'SHOW_MORE_FOUND_USERS'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const SET_TOTAL_FOUND_FRIENDS = 'SET_TOTAL_FOUND_FRIENDS'
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
export const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS'

const initialState: FriendsDataType = {
  requests: [
    {
      id: v1(),
      name: 'Alise Zhviga',
      followed: false,
      photos:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHxkwD5LV34pfLt3gYmCAvM3r5EO6cD2DewDL5p8wwooygkScXF8fC67LAed8kbIVn6lc&usqp=CAU',
      status: "I'm OK",
      email: 'jennaortega@gmail.com',
    },
  ],
  friends: [
    {
      id: v1(),
      name: 'Jenna Ortega',
      followed: true,
      photos: 'https://www.beautycrew.com.au/media/55360/jo1.png?width=720',
      status: "I'm OK",
      email: 'jennaortega@gmail.com',
    },
    {
      id: v1(),
      name: 'Asahina Aja',
      followed: true,
      photos: 'https://www.sitnas.id/uploads/large/5bdd13174c68c4a46e0d02c01f3a9e18.jpg',
      status: "I'm OK",
      email: 'asiha@gmail.com',
    },
    {
      id: v1(),
      name: 'Emma Watson',
      followed: true,
      photos:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCSYU3UYh-jyxSbyEPZOY2D8QEawVe5hgFmA&usqp=CAU',
      status: "I'm OK",
      email: 'emmillie@gmail.com',
    },
    {
      id: v1(),
      name: 'Martha Nilsen',
      followed: true,
      photos:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZpAjYRG3ssuv0wmmwS1bWimQQ_Wz44R2dg&usqp=CAU',
      status: "I'm OK",
      email: 'nilsss@gmail.com',
    },
    {
      id: v1(),
      name: 'Jared Padalecki',
      followed: false,
      photos:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtaquyvAwpYg3YQGm8N4xr8mQO7TRN7GQCUg&usqp=CAU',
      status: "I'm OK",
      email: 'harrypotter@gmail.com',
    },
    {
      id: v1(),
      name: 'Danai Gurira',
      followed: true,
      photos: 'https://static.kinoafisha.info/k/news/610/upload/news/239715890800.jpg',
      status: "I'm OK",
      email: 'gurrirrraa78@gmail.com',
    },
    {
      id: v1(),
      name: 'Hunter Schafer',
      followed: true,
      photos:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Hunter_Schafer_2022.png/220px-Hunter_Schafer_2022.png',
      status: "I'm OK",
      email: 'hunty@gmail.com',
    },
    {
      id: v1(),
      name: 'Úrsula Corberó Delgado',
      followed: true,
      photos: 'https://www.kino-teatr.ru/acter/album/348852/1040247.jpg',
      status: "I'm OK",
      email: 'urksss220@gmail.com',
    },
    {
      id: v1(),
      name: 'Beren Saat',
      followed: true,
      photos: 'https://shoubiz.guru/wp-content/auploads/538568/fullsize.jpg',
      status: "I'm OK",
      email: 'saatberen@gmail.com',
    },
    {
      id: v1(),
      name: 'Matthew Mcconaughey',
      followed: false,
      photos:
        'https://media.gq.com/photos/5f885ac8bd3a91bc1eca619f/1:1/w_2968,h_2968,c_limit/Matthew%20McConaughey%20interview%20gq%20october%202020.jpg',
      status: "I'm OK",
      email: 'mattewmccc@gmail.com',
    },
    {
      id: v1(),
      name: 'Kostya Kokhanov',
      followed: false,
      photos: 'https://i1.sndcdn.com/avatars-dCy4HR4pgqSNChij-5gmiOQ-t500x500.jpg',
      status: "I'm OK",
      email: 'knuckosytya@gmail.com',
    },
  ],
  foundFriends: [],
  pageSize: 10,
  totalFoundFriends: 12,
  currentPageFindFriends: 1,
  isFetching: false,
  isFollowingInProgress: [],
}

export const friendsReducer = (
  state = initialState,
  action: FriendsActionType
): FriendsDataType => {
  switch (action.type) {
    case CHANGE_FRIEND_STATUS:
      return {
        ...state,
        friends: state.friends.map(el =>
          el.id === action.id ? { ...el, followed: !el.followed } : el
        ),
      }
    case 'CHANGE_REQUEST_STATUS':
      return {
        ...state,
        requests: state.requests.map(el =>
          el.id === action.id ? { ...el, followed: !el.followed } : el
        ),
      }
    case FOLLOWING_USER:
      return {
        ...state,
        foundFriends: state.foundFriends.map(el =>
          el.id === action.id ? { ...el, followed: true } : el
        ),
      }
    case UNFOLLOWING_USER:
      return {
        ...state,
        foundFriends: state.foundFriends.map(el =>
          el.id === action.id ? { ...el, followed: false } : el
        ),
      }
    case SET_USERS:
      return { ...state, foundFriends: action.friends }
    case SHOW_MORE_FOUND_USERS:
      return { ...state, pageSize: state.pageSize + 10 }
    case SET_CURRENT_PAGE:
      return { ...state, currentPageFindFriends: action.currentPage }
    case SET_TOTAL_FOUND_FRIENDS:
      return { ...state, totalFoundFriends: action.totalCount }
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching }
    case TOGGLE_FOLLOWING_IN_PROGRESS: {
      return {
        ...state,
        isFollowingInProgress: action.isProgress
          ? [...state.isFollowingInProgress, action.userId]
          : state.isFollowingInProgress.filter(id => id !== action.userId),
      }
    }
    default:
      return state
  }
}

// ActionCreator

export type FriendsActionType =
  | ReturnType<typeof changeStatusFriendAC>
  | ReturnType<typeof followingUserAC>
  | ReturnType<typeof unfollowingUserAC>
  | ReturnType<typeof setUsersAC>
  | ReturnType<typeof showMoreFoundUsersAC>
  | ReturnType<typeof setCurrentPageAC>
  | ReturnType<typeof setTotalFoundFriendsAC>
  | ReturnType<typeof toggleIsFetchingAC>
  | ReturnType<typeof toggleFollowingInProgressAC>
  | ReturnType<typeof changeStatusRequestFriendAC>

export const changeStatusRequestFriendAC = (id: string) =>
  ({
    type: 'CHANGE_REQUEST_STATUS',
    id,
  } as const)
export const changeStatusFriendAC = (id: string) =>
  ({
    type: CHANGE_FRIEND_STATUS,
    id,
  } as const)

export const followingUserAC = (id: string) =>
  ({
    type: FOLLOWING_USER,
    id,
  } as const)

export const unfollowingUserAC = (id: string) =>
  ({
    type: UNFOLLOWING_USER,
    id,
  } as const)

export const setUsersAC = (friends: Array<FriendsType>) =>
  ({
    type: SET_USERS,
    friends,
  } as const)

export const showMoreFoundUsersAC = () =>
  ({
    type: SHOW_MORE_FOUND_USERS,
  } as const)

export const setCurrentPageAC = (currentPage: number) =>
  ({
    type: SET_CURRENT_PAGE,
    currentPage,
  } as const)

export const setTotalFoundFriendsAC = (totalCount: number) =>
  ({
    type: SET_TOTAL_FOUND_FRIENDS,
    totalCount,
  } as const)

export const toggleIsFetchingAC = (isFetching: boolean) =>
  ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
  } as const)

export const toggleFollowingInProgressAC = (userId: string, isProgress: boolean) =>
  ({
    type: TOGGLE_FOLLOWING_IN_PROGRESS,
    userId,
    isProgress,
  } as const)

//Thunk Creator
//REMOVE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// export type ActionTypeForApp =
//     | FriendsActionType
//
// export type RootThunkType = ThunkAction<void, RootState, unknown, ActionTypeForApp>
export type ThunkDispatchType = ThunkDispatch<RootState, unknown, FriendsActionType>
//REMOVE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

export const getUsersTC =
  (currentPageFoundFriends: number, pageSize: number): RootThunkType =>
  async dispatch => {
    dispatch(toggleIsFetchingAC(true))
    const data = await friendsAPI.getUsers(currentPageFoundFriends, pageSize)
    const users = data.items.map((el: any) => ({
      id: el.id,
      name: el.name,
      followed: el.followed,
      photos: el.photos.small === null ? el.name : el.photos.small,
      status: el.status === null ? '...' : el.status,
      email: `${el.name.replace(' ', '').toLowerCase()}@gmail.com`,
    }))
    dispatch(toggleIsFetchingAC(false))
    dispatch(setUsersAC(users))
    dispatch(setTotalFoundFriendsAC(data.totalCount))
  }

export const followingUserTC =
  (id: string): RootThunkType =>
  async dispatch => {
    dispatch(toggleFollowingInProgressAC(id, false))
  }

export const unfollowingUserTC =
  (id: string): RootThunkType =>
  async dispatch => {
    dispatch(toggleFollowingInProgressAC(id, false))
  }

// Types
export type FriendsType = {
  id: string
  name: string
  followed: boolean
  photos: string
  status: string
  email: string
}

export type FriendsDataType = {
  requests: Array<FriendsType>
  friends: Array<FriendsType>
  foundFriends: Array<FriendsType>
  pageSize: number
  totalFoundFriends: number
  currentPageFindFriends: number
  isFetching: boolean
  isFollowingInProgress: string[]
}
