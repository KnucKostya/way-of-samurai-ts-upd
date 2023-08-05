import { RootState } from './store'

export const getUsers = (state: RootState) => {
  return state.usersPage.users
}
export const getCount = (state: RootState) => {
  return state.usersPage.count
}
