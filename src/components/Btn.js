import React from 'react';

class Btn extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <i className={this.props.classIcon} onClick={this.props.do}></i>

        )
    }
}

export default Btn;