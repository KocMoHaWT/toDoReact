import React from 'react';
import {connect} from "react-redux";

class Rectangle extends React.Component{


    render() {
       let style = {
            backgroundColor :  this.props.color || '#22194D',
            width: '100px',
            height: '100px'
        };
        return (
            <div style={style}>

            </div>
        );
    }
};

const mapStateToProps = state => ({
    color: state.color.color
});

export default connect(mapStateToProps)(Rectangle);