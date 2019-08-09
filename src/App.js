import React from 'react';
import Ibox from './components/IboxComponent/Ibox';

class App extends React.Component{
    arr = ['1','2','3'];
    render() {
        return (
            <div className="row">
                <div className="col-lg-7">
                    < Ibox showCollapseBtn={true}
                           showOptionsBtn={true}
                           showCloseBtn={true}
                           options={this.arr}
                    >
                        <h5>lidjglskfdjgldkfjglkdjf</h5>
                    </Ibox>
                </div>
                <div className="col-lg-5">
                    < Ibox showCollapseBtn={true}
                           showOptionsBtn={true}
                           showCloseBtn={true}
                           options={this.arr}
                    >
                        <h5>lidjglskfdjgldkfjglkdjf</h5>
                    </Ibox>
                </div>
            </div>
        )
    }
}

export default App