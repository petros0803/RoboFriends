import React from 'react';

const Scroll = (props) => {
    return (
        <div style = {{overflowY: 'scroll', border: '0px solid black', height: '700px', width: '100%'}}>
            {props.children}
        </div>
    )
}

export default Scroll;