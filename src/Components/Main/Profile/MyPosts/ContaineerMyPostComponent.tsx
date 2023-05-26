import {ProfilePageDataType} from "../../../../Redux/state";
import MyPosts from "./MyPosts";
import {AddPostAC} from "../../../../Redux/profileReducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootState} from "../../../../Redux/store";


const mapStateToProps = (state:RootState) :ProfilePageDataType=> {
    return {
        postData:state.profilePage.postData,
        profilePageInfo:null,
        status:state.profilePage.status
        }
}

type mapDispatchToPropsOutterType = {
    addPost:(postText:string)=>void
}

const mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsOutterType => {
    return{
        addPost:(postText:string)=>dispatch(AddPostAC(postText)),
    }
}

// в ContaineerForDialogs реализован другой подход
export type mapStateToProps = ReturnType<typeof mapStateToProps>
export type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>

export type combineType = mapStateToProps & mapDispatchToPropsType


const ContaineerMyPostComponent = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default ContaineerMyPostComponent