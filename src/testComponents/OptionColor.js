import React from 'react';
import {ChromePicker} from 'react-color'
import {changeColor} from "../redux/actions/changeColorAction";
import {connect} from "react-redux";

class OptionColor extends React.Component {

    handleColor = () => {
        const red = document.getElementById('red').value;
        const green = document.getElementById('green').value;
        const blue = document.getElementById('blue').value;
        return this.props.onClick('rgb(' + red + ',' + green + ',' + blue + ')');
    };

    render() {
        return (
            <div className={'someClass'}>
                {/*<ChromePicker onChange={this.handleColor} />*/}
                <input type="range" id={'red'} min={0} max={255}/>
                <input type="range" id={'green'} min={0} max={255}/>
                <input type="range" id={'blue'} min={0} max={255}/>
                <button onClick={this.handleColor}>Pick</button>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    onClick: color => dispatch(changeColor(color))
});



export default connect (null,mapDispatchToProps)(OptionColor);