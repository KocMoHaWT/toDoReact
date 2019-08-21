import React from 'react';

function IboxToolOptions(props){
   return (
       <div className="dropdown-menu show ibox-list">
           {props.optionsBody}
       </div>
   )
}

export default IboxToolOptions;