import {connect} from "react-redux";
import {RootState} from "../../Redux/store";
import {Dispatch} from "redux";
import Users from "./Users";
import {
    APIusersType, combinerTypes,
    follow,
    setCurrentPage, setLoadingStatus,
    setTotalCount,
    setUsers,
    unfollow
} from "../../Redux/usersReducer";
import UsersClassContainer from "./UsersClassContainer";


const mapStateToProps = (state:RootState) => {
    return{
        users:state.usersPage.users,
        totalCount: state.usersPage.totalCount,
        count: state.usersPage.count,
        currentPage:state.usersPage.currentPage,
        isLoading:state.usersPage.isLoading,
        //users это обьект ДАТА с вложенным массивом АЙТЕМС
    }
}

// const mapDispatchToProps = (dispatch:Dispatch) => {
//   return{
//       // follow:(userID:number)=>dispatch(followAC(userID)),
//       // unfollow:(userID:number)=>dispatch(unfollowAC(userID)),
//       // setUsers:(users:APIusersType[])=>dispatch(setUsersAC(users)),
//       // setCurrentPage:(currentPage:number)=>dispatch(setCurrentPageAC(currentPage)),
//       // setTotalCount:(totalCount:number)=>dispatch(setTotalCountAC(totalCount)),
//       // setLoadingStatus:(isLoadingStatus:boolean)=>dispatch(setLoadingStatusAC(isLoadingStatus)),
//
//
//   }
// }





const mapDispatchToProps = {follow,unfollow,setUsers,setCurrentPage,setTotalCount,setLoadingStatus}

export type mapStateToPropsType = ReturnType<typeof mapStateToProps>
export type mapDispatchToPropsType = typeof mapDispatchToProps
export type combineType = mapStateToPropsType & mapDispatchToPropsType

export default connect(mapStateToProps,mapDispatchToProps)(UsersClassContainer)
    //сокращённо и приавильно mapDispatchToProps нужно писать вот так
    // приставка AC не используетс в проектах, поэтому её нуэно удалить