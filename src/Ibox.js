import React from 'react';
import './Ibox.css';
import Btn from './components/Btn'
import SomeEl from './components/SomeEl'

class Ibox extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
            header: 'Some Header ',
            subTitle: 'Some Subtitle',
            bottomBlock: true,
            mainBlock: true,
            showOptions: false
        }
    }

    options = this.props.options.map((elem) => <li key={elem}><a href='#' className='dropdown-item'>{elem}</a></li>);

    opt = {
        position: 'absolute',
        top: '18px',
        left: '-68px',
        willChange: 'top, left',
        xPlacement: 'bottom-start'
    };

    showBottomBlock = () => {
        this.setState({bottomBlock: !this.state.bottomBlock})
    };

    close = () => {
        this.setState({mainBlock: false});
    };

    showOptions = () => {
        this.setState({showOptions : !this.state.showOptions})
    };

    render() {
            if(this.state.mainBlock) {
                return (
                    <div className="col-lg-7">
                        <div className='ibox'>
                            <div className='ibox-title'>
                                <h5>
                                    {this.state.header}
                                    <small>{this.state.subTitle}</small>
                                </h5>
                                <div className={'ibox-tools'}>
                                    {this.props.showCollapseBtn ? <Btn classIcon={this.state.bottomBlock ? 'fa fa-chevron-up' : 'fa fa-chevron-down'}
                                                                       state={this.state} do={this.showBottomBlock}/> : null}
                                    {this.props.showOptionsBtn ? <Btn classIcon={'fa fa-wrench'} do={this.showOptions}/> : null}
                                    {this.state.showOptions ? <ul className='dropdown-menu show' style={this.opt}>{this.options}</ul> : null}
                                    {this.props.showCloseBtn ? <Btn classIcon={'fa fa-times'} do={this.close}/> : null}
                                </div>
                            </div>

                            {this.state.bottomBlock ? <SomeEl class={'ibox-content'}/> : null}
                        </div>
                    </div>
               )
            } else {
                return null;
            }
    }
}



export default Ibox

