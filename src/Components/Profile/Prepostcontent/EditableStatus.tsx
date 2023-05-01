import React, {ChangeEvent} from 'react';


class EditableStatus extends React.Component<any, any> {
    state = {
        isEdit: false,
        status:this.props.statusValue
    }

    activateMode = () => {
        this.setState({isEdit:true})
    }

    deactivateMode = () => {
        this.setState({isEdit:false})
        this.props.updateStatus(this.state.status)

    }

    onChangeStatus =  (event:ChangeEvent<HTMLInputElement>)=>{
        //здесь нужно сетнуть статус
        this.setState({status:event.currentTarget.value})
    }

    render() {
        return (
            <div>
                {this.state.isEdit ?
                    <input type="text" autoFocus={true} value={this.state.status} onBlur={this.deactivateMode} onChange={this.onChangeStatus}/>
                    :
                    <span onDoubleClick={this.activateMode}>{this.props.statusValue}</span>
                }
            </div>
        );
    }
}

export default EditableStatus;