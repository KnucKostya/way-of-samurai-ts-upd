import { ProfilePageDataType } from '../../../../Redux/state'
import MyPosts from './MyPosts'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { RootState } from '../../../../Redux/store'
import { AddPostAC } from '../../../../Redux/reducers/profileReducer'

const mapStateToProps = (state: RootState): ProfilePageDataType => {
  return {
    postData: state.profilePage.postData,
    profilePageInfo: state.profilePage.profilePageInfo,
    status: state.profilePage.status,
  }
}

type mapDispatchToPropsOutterType = {
  addPost: (postText: string, date: string) => void
}

const mapDispatchToProps = (
  dispatch: Dispatch
): mapDispatchToPropsOutterType => {
  return {
    addPost: (postText: string, date: string) =>
      dispatch(AddPostAC(postText, date)),
  }
}

export type mapStateToProps = ReturnType<typeof mapStateToProps>
export type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>

export type combineType = mapStateToProps & mapDispatchToPropsType

const ContaineerMyPostComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts)

export default ContaineerMyPostComponent
