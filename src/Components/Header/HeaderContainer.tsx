import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { WholeStateType } from '../../Redux/state'
import { compose } from 'redux'
import { getAuthUserData, SetUserAuth } from '../../Redux/reducers/authReducer'

type mstpType = ReturnType<typeof mstp>
type mdtpType = typeof mdtp
export type commonType = mstpType & mdtpType

class HeaderContainer extends React.Component<commonType> {
  componentDidMount() {
    this.props.getAuthUserData()
  }

  render() {
    return (
      <>
        <Header />
      </>
    )
  }
}

const mstp = (state: WholeStateType) => {
  return {
    login: state.auth.data.login,
    isAuth: state.auth.isAuth,
  }
}
const mdtp = { SetUserAuth, getAuthUserData }

export default compose<React.FC>(connect(mstp, mdtp))(HeaderContainer)
