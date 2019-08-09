import React from 'react';

class IboxTitleButton extends React.Component{

    render() {
        return (
            <i className={this.props.classIcon} onClick={this.props.action}></i>

        )
    }
}

export default IboxTitleButton;