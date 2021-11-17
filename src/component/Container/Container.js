import React from 'react';
import Navigation from '../Navigation/Navigation';


const style = {
    width: '1200px',
   marginLeft:  'auto',
    marginRight: 'auto'
}

const Container = ({ children }) => (
    <div style={style}>
        <Navigation />
        <hr/>
        {children}
    </div>
);

export default Container