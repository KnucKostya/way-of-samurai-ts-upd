import React from 'react'
import { combineType } from './UsersContainer'
import s from './usersContainer.module.css'
import Users from './Users'
import Preloader from '../../../../Common/Preloader'

class UsersClassContainer extends React.PureComponent<combineType> {
  componentDidMount() {
    this.props.getUsersThunk()
  }

  onPageChangedMethod = (currentPage: number) => {
    this.props.PageChangedThunk(currentPage, this.props.count)
  }

  render() {
    return (
      <div className={s.findUsersContainer}>
        {this.props.isLoading && <Preloader />}
        <Users
          onPageChangedMethod={this.onPageChangedMethod}
          totalCount={this.props.totalCount}
          count={this.props.count}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          users={this.props.users}
          currentPage={this.props.currentPage}
          followingInProgressStatus={this.props.followingInProgressStatus}
          followingInProgress={this.props.followingInProgress}
          UnfollowUserThunk={this.props.UnfollowUserThunk}
          FollowUserThunk={this.props.FollowUserThunk}
        />
      </div>
    )
  }
}

export default UsersClassContainer
