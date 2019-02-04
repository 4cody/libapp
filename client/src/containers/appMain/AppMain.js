import React from 'react';
import '../../App.css';

import Search from '../search/Search';

class AppMain extends React.Component {
    state = {};

    render(){
        return(
            <div className="App">
                <Search />
            </div>
        )
    } 
}

export default AppMain;