import React from 'react';
import {combineType} from "./UsersContainer";
import axios from 'axios'
import Users from "./Users";
import Preloader from "../../Common/Preloader";

class UsersClassContainer extends React.Component<combineType> {

    // constructor(props:combineType) {
    //     super(props);
    // } и т.к в конструкторе уже не происходит АЯЙКС запрос, то его и мето супер
    // уже писать не обязательно, это проихсрдит за кадром

    componentDidMount() {
        this.props.setLoadingStatus(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users`,{withCredentials:true})
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
                this.props.setLoadingStatus(false)
            })

    }

    onPageChangedMethod = (currentPage: number) => {
        this.props.setLoadingStatus(true)
        this.props.setCurrentPage(currentPage)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.count}`,{withCredentials:true})
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setLoadingStatus(false)
            })

    }

    render() {
        return (
            <>
                {this.props.isLoading && <Preloader/>}
                <Users onPageChangedMethod={this.onPageChangedMethod}
                       totalCount={this.props.totalCount}
                       count={this.props.count}
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}
                       users={this.props.users}
                       currentPage={this.props.currentPage}
                />
            </>
        )
    }
}

export default UsersClassContainer;