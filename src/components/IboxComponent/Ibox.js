import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown, faWrench, faTimes } from '@fortawesome/free-solid-svg-icons'
import './Ibox.css';
import IboxTitleButton from './IboxTitleButton';
import IboxToolOptions from './IboxToolOptions';
import IboxFooter from './IboxFooter'


class Ibox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'Some Header ',
            subTitle: 'Some Subtitle',
            content: true,
            iboxBlock: true,
            showOptions: false
        }
    }

    toggleContent = () => {
        this.setState((old) => {
            const oldContent = old.content;
            return Object.assign({}, old, {content: !oldContent})
        })
    };

    close = () => {
        this.setState({iboxBlock: false});
    };

    showOptions = () => {
        this.setState((old) => {
            const oldOptions = old.showOptions;
            return Object.assign({}, old, {showOptions: !oldOptions});
        });
    };

    render() {
        if (!this.state.iboxBlock) {
            return null;
        }
        return (
            <div className='ibox'>
                {this.renderHeader()}
                {this.renderContent()}
                {this.renderFooter()}
            </div>
        )
    }

    renderButtons() {
        const buttons = [];
        const {
            showCollapseBtn,
            showOptionsBtn,
            showCloseBtn
        } = this.props;

        if (showCollapseBtn) {
            buttons.push(<IboxTitleButton
                key={buttons.length}
                icon={this.state.content ? faChevronUp : faChevronDown}
                state={this.state} action={this.toggleContent}/>)
        }

        if (showOptionsBtn) {
            buttons.push(<IboxTitleButton
                key={buttons.length}
                icon={faWrench}
                action={this.showOptions}/>)
            buttons.push(this.state.showOptions ?
                       <IboxToolOptions optionsBody={this.props.optionsBody}/> : null
            )
        }

        if (showCloseBtn) {
            buttons.push(<IboxTitleButton
                key={buttons.length}
                icon={faTimes}
                action={this.close}/>);
        }
        return <div className='ibox-tools'>{buttons}</div>;
    }

    renderHeader() {
        return (
            <div className='ibox-header'>
                <h5 className='ibox-title'>
                    {this.state.title}
                    <small>{this.state.subTitle}</small>
                </h5>
                {this.renderButtons()}
            </div>
        )
    }

    renderFooter() {
        if(this.props.footerBody && this.state.content) {
            return <IboxFooter footerBody={this.props.footerBody}/>
        }
    }

    renderContent() {
        if (!this.state.content) {
            return null;
        }
        return (
            <div className="ibox-content">
                {this.props.children}
            </div>
        )
    }
}


export default Ibox

