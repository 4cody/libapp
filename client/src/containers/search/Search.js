import React from 'react';

import FormInput from '../../components/formInput/formIput';

class Search extends React.Component {
    state = {
        selectedOption: "two"
    };

    handleRadioChange = e => {
        this.setState({
            selectedOption: e.target.value
        })
        console.log(e.target.value)
    }


    render(){

        return(
            <div className="Search_Container">
                <div className="row mt-3">

                    <div className="col-lg-8 mt-5">
                        <input type="search"/>
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
            </div>
        )
    }
}

export default Search;