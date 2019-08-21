import React from 'react';
import {ChromePicker} from 'react-color'
import {changeColor} from "../redux/actions/changeColorAction";
import {connect} from "react-redux";

class OptionColor extends React.Component {

    handleColor = (color, action) => {
        return this.props.onClick(color.hex);
    };

    render() {
        return (
            <div className={'someClass'}>
                <ChromePicker onChange={this.handleColor} />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onClick: color => dispatch(changeColor(color))
});



export default connect (null,mapDispatchToProps)(OptionColor);