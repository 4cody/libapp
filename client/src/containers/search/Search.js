import React from 'react';
import Axios from 'axios';

import FormInput from '../../components/formInput/formIput';

class Search extends React.Component {
    state = {
        selectedOption: "two"
    };

    handleRadioChange = e => {
        this.setState({
            selectedOption: e.target.value
        })
    }

    // hadleSubmit = e => {
    //     e.preventDefault();
    //     Axios.get('/catalog')
    //         .then(data => {
    //             console.log(data)
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // }

    render(){
        
        return(
            <div className="Search_Container">
                <form onSubmit={this.handleSubmit}>
                <div className="row mt-3">
                    <div className="col-lg-8 pt-5">
                        {this.state.selectedOption === "three" ?
                            null : <input type="search"/> }
                    </div>
                    
                    <div className="col-lg-2">

                      <FormInput
                        vType="one"
                        isChecked={this.state.selectedOption === "one"}
                        change={this.handleRadioChange}
                        class="form-check-input"
                        innerValue="Option1" />
                      <FormInput
                        vType="two"
                        isChecked={this.state.selectedOption === "two"}
                        change={this.handleRadioChange}
                        class="form-check-input"
                        innerValue="Option2" />
                      <FormInput
                        vType="three"
                        isChecked={this.state.selectedOption === "three"}
                        change={this.handleRadioChange}
                        class="form-check-input"
                        innerValue="Option3" />          

                    </div>

                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <button type="submit">Search</button>
                    </div>
                </div>
                </form>
            </div>
        )
    }
}

export default Search;