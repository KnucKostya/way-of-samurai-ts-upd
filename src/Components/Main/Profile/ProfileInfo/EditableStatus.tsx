import React, { ChangeEvent } from 'react'
import s from './EditableStatus.module.css'

class EditableStatus extends React.Component<EditableStatusPropsType, any> {
  state = {
    isEdit: false,
    status: this.props.statusValue,
  }

  activateMode = () => {
    this.setState({ isEdit: true })
  }

  deactivateMode = () => {
    this.setState({ isEdit: false })
    this.props.updateStatus(this.state.status)
  }

  onChangeStatus = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ status: event.currentTarget.value })
  }

  onDoubleHandler = () => {}

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
          <span onDoubleClick={this.activateMode}>{this.props.statusValue}</span>
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
  paramUserId: number
}
