import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Ibox from './Ibox';
const arr = ['1','2','3'];


ReactDOM.render(
    < Ibox showCollapseBtn={true}
           showOptionsBtn={true}
           showCloseBtn={true}
           options={arr}
    >
        <h5>lidjglskfdjgldkfjglkdjf</h5>
    </Ibox> ,
document.getElementById('root'));

