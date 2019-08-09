import React from 'react';
import './Ibox.css';
import IboxTitleButton from '../IboxTitleButton'


class Ibox extends React.Component {
    constructor(props) {
        super(props);
        this.options = this.props.options.map(this.mapOptionsToList);
        this.state = {
            header: 'Some Header ',
            subTitle: 'Some Subtitle',
            content: true,
            iboxBlock: true,
            showOptions: false
        }
    }

    mapOptionsToList = (elem) => (
        <li key={elem}>
            <a href='#' className='dropdown-item'>{elem}</a>
        </li>
    );


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
                {this.renderTitle()}
                {this.renderContent()}
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
                classIcon={this.state.content ? 'fa fa-chevron-up' : 'fa fa-chevron-down'}
                state={this.state} action={this.toggleContent}/>)
        }

        if (showOptionsBtn) {
            buttons.push(<IboxTitleButton
                key={buttons.length}
                classIcon={'fa fa-wrench'}
                action={this.showOptions}/>)
            buttons.push(this.state.showOptions ?
                <ul className='dropdown-menu show ibox--list'>{this.options}</ul> : null
            )
        }

        if (showCloseBtn) {
            buttons.push(<IboxTitleButton
                key={buttons.length}
                classIcon={'fa fa-times'}
                action={this.close}/>);
        }
        return <div className='ibox-tools'>{buttons}</div>;
    }

    renderTitle() {
        return (
            <div className='ibox-title'>
                <h5>
                    {this.state.header}
                    <small>{this.state.subTitle}</small>
                </h5>
                {this.renderButtons()}
            </div>
        )
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

