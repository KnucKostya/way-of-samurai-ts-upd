import {ProfilePageDataType} from "../../../Redux/state";
import MyPosts from "./MyPosts";
import React from "react";
import {AddPostAC, ChangeValueAC} from "../../../Redux/profileReducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootState} from "../../../Redux/store";


const mapStateToProps = (state:RootState) :ProfilePageDataType=> {
    return {
        postData:state.profilePage.postData,
        textAreaText:state.profilePage.textAreaText,
        profilePageInfo:null
        }
}

type mapDispatchToPropsOutterType = {
    addPost:(text:string)=>void
    changeValueFunc:(e:string)=>void
}

const mapDispatchToProps = (dispatch:Dispatch):mapDispatchToPropsOutterType => {
    return{
        addPost:(textArreaText:string)=>dispatch(AddPostAC(textArreaText)),
        changeValueFunc:(event:string)=>dispatch(ChangeValueAC(event))
    }
}

// в ContaineerForDialogs реализован другой подход
export type mapStateToProps = ReturnType<typeof mapStateToProps>
export type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>

export type combineType = mapStateToProps & mapDispatchToPropsType


const ContaineerMyPostComponent = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default ContaineerMyPostComponent