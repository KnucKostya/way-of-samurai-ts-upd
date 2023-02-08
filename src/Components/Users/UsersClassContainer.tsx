import React from 'react';
import {combineType} from "./UsersContainer";
import Users from "./Users";
import Preloader from "../../Common/Preloader";
import {FollowUserThunk, UnfollowUserThunk} from "../../Redux/usersReducer";


class UsersClassContainer extends React.Component<combineType> {
    // constructor(props:combineType) {
    //     super(props);
    // } и т.к в конструкторе уже не происходит АЯЙКС запрос, то его и мето супер
    // уже писать не обязательно, это проихсрдит за кадром

    componentDidMount() {
        this.props.getUsersThunk()
    }

    onPageChangedMethod = (currentPage: number) => {
        this.props.PageChangedThunk(currentPage, this.props.count)
    }

    render() {
        return (
            <>
                {this.props.isLoading && <Preloader/>}
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
            </>
        )
    }
}

export default UsersClassContainer;