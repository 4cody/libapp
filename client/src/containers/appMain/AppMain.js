import React from 'react';
import '../../App.css';

import Search from '../search/Search';
import ResultContainer from '../resultContainer/ResultContainer';

class AppMain extends React.Component {
    state = {};

    render(){
        return(
            <div className="App">
                <Search />
                <ResultContainer />
            </div>
        )
    } 
}

export default AppMain;