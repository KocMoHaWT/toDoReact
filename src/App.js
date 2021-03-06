import React from 'react';
import { Provider} from 'react-redux'
import store from './redux/store'
import Ibox from './components/IboxComponent/Ibox';
import './App.css';
import OptionColor from './testComponents/OptionColor'
import Rectangle from './testComponents/Rectangle'

class App extends React.Component{

    render() {
        const  footer = (
            <div className='footer'>
                <h5 className='footer-text'>* - some bla bla bla</h5>
                <h5 className='absolute noselect'>some absolute thing</h5>
            </div>
        )
        const options = ( <ul className={'dropdown-menu show ibox--list'}>
                <li > <a href='#' className='dropdown-item'>3</a></li>
                <li> <a href='#' className='dropdown-item'>2</a></li>
                <li> <a href='#' className='dropdown-item'>1</a></li>
            </ul>
        );
        return (
            <Provider store={store}>
                <div className="wrapper-content">
                    <div className="row">
                        <div className="col-lg-7">
                            < Ibox showCollapseBtn={true}
                                   showOptionsBtn={true}
                                   showCloseBtn={true}
                                   optionsBody={
                                        <OptionColor/>
                                   }
                                   footerBody={footer}
                            >
                                <Rectangle/>
                            </Ibox>
                        </div>
                        <div className="col-lg-5">
                            < Ibox showCollapseBtn={true}
                                   showOptionsBtn={true}
                                   showCloseBtn={true}
                                   optionsBody={options}

                            >

                            </Ibox>
                        </div>
                    </div>
                </div>
            </Provider>
        )
    }
}



export default App