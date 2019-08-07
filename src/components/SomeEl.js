import React from 'react';

class SomeEl extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }

    render() {
        return (
            <div className={this.props.class}>

            </div>
        );
    }
}
const someElement = {
    height: '100px',
    backgroundColor: '#333'
}
export default SomeEl;