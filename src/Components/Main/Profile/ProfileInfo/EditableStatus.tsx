import React, { ChangeEvent } from 'react'
import s from './EditableStatus.module.css'
import { toast } from 'react-toastify'

class EditableStatus extends React.Component<EditableStatusPropsType, any> {
  state = {
    isEdit: false,
    status: this.props.statusValue,
  }

  activateMode = () => {
    if (this.props.userID === this.props.idAuth) {
      this.setState({ isEdit: true })
    }
  }

  deactivateMode = () => {
    this.setState({ isEdit: false })
    if (this.state.status.length > 0) {
      this.props.updateStatus(this.state.status)
    } else {
      toast.warning('status length should have 1 and more symbols ')
    }
  }

  onChangeStatus = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ status: event.currentTarget.value })
  }

  render() {
    return (
      <div className={s.profileStatus}>
        {this.state.isEdit ? (
          <input
            type="text"
            autoFocus={true}
            value={this.state.status}
            onBlur={this.deactivateMode}
            onChange={this.onChangeStatus}
          />
        ) : (
          <span onDoubleClick={this.activateMode}>
            {this.props.statusValue ? this.props.statusValue : 'user status'}
          </span>
        )}
      </div>
    )
  }
}

export default EditableStatus

//TYPES
type EditableStatusPropsType = {
  statusValue: string
  updateStatus: (status: string) => void
  userID?: number
  idAuth: number | null
}
