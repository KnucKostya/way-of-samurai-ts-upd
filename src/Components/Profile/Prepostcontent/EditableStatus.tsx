import React from 'react';


class EditableStatus extends React.Component<any, any> {

    state: { isEdit: boolean } = {
        isEdit: false
    }

    onChangeEditStatus = () => {
        this.setState({isEdit:!this.state.isEdit})
    }

    render() {
        return (
            <div>
                {this.state.isEdit ?
                    <input type="text" autoFocus={true} value={this.props.statusValue} onBlur={this.onChangeEditStatus.bind(this)} />
                    :
                    <span onDoubleClick={this.onChangeEditStatus.bind(this)}>{this.props.statusValue}</span>
                }
            </div>
        );
    }
};

export default EditableStatus;