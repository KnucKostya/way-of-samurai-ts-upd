import { connect } from 'react-redux'
import {
  follow,
  followingInProgress,
  setCurrentPage,
  setLoadingStatus,
  setTotalCount,
  setUsers,
  getUsersThunk,
  unfollow,
  PageChangedThunk,
  UnfollowUserThunk,
  FollowUserThunk,
} from '../../../../Redux/usersReducer'
import UsersClassContainer from './UsersClassContainer'
import React from 'react'
import { RootState } from '../../../../Redux/store'
import WithAuthRedirect from '../../../../Common/hoc/AuthRedirect'
import { compose } from 'redux'

const mapStateToProps = (state: RootState) => {
  return {
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    count: state.usersPage.count,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
    followingInProgressStatus: state.usersPage.followingInProgressStatus,
  }
}

const mapDispatchToProps = {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  setLoadingStatus,
  followingInProgress,
  getUsersThunk,
  PageChangedThunk,
  UnfollowUserThunk,
  FollowUserThunk,
}

export type mapStateToPropsType = ReturnType<typeof mapStateToProps>
export type mapDispatchToPropsType = typeof mapDispatchToProps
export type combineType = mapStateToPropsType & mapDispatchToPropsType

export default compose<React.FC>(
  connect(mapStateToProps, mapDispatchToProps),
  WithAuthRedirect
)(UsersClassContainer)
