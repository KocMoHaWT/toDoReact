import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class IboxTitleButton extends React.Component{

    render() {
        return (
            <FontAwesomeIcon icon={this.props.icon} onClick={this.props.action} />
    )


    }
}

export default IboxTitleButton;