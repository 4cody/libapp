import React from 'react';
import Axios from 'axios';

import FormInput from '../../components/formInput/formIput';
import GenreBTN from '../../components/genreButton/genreButton';

class Search extends React.Component {
    state = {
        selectedOption: "one",
        genres: []
    };

    componentDidMount() {
        let gArr = [];
        Axios.get('/catalog')
            .then(data => {
                let d = data.data;
                for(let i of d) {
                    gArr.indexOf(i.genre) === -1 ? 
                    gArr.push(i.genre) : console.log(i);
                }
            })
            this.setState({
                genres: gArr
            })
    }

    hydrateGenreMenu = () => {
        let genreArr = this.state.genres;
        return(
            genreArr.map((txt, i) => { 
                return(
                    <GenreBTN 
                        key={i}
                        hgk={this.handleGenreClick}
                        innerVal={txt}
                        val={txt}/>
                )   
            })
        )
    }

    handleRadioChange = e => {
        this.setState({
            selectedOption: e.target.value
        })
    }

    handleSubmit = e => {
        // switch(this.state.selectedOption) {
        //     case "one":
        //       console.log('11111')
        //       break;
        //     case "two":
        //       console.log("22222")
        //       break;
        //     case "three":
        //       console.log("33333")
        //       break;
        //     default:
        //       console.log('somethings broken')
        // }
        let qp = 'cotton'
        e.preventDefault();
        Axios.get(`/catalog/${qp}`)
            .then(data => console.log(data.data))
            .catch(err => {
                console.log(err)
            })
    }

    handleGenreClick = (e) => {
        console.log(e.target.value)
    }

    render(){
        
        return(
            <div className="Search_Container">
                <form onSubmit={this.handleSubmit}>
                <div className="row mt-4">
                    <div className="col-lg-8 pt-5">
                        {this.state.selectedOption === "three" ?
                          <div className="btn-group">
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Select a Genre
                            </button>
                            <div className="dropdown-menu dropdown-menu-right">
                                {[this.hydrateGenreMenu()]}
                            </div>
                          </div> 
                          : <input type="search"/> }
                    </div>
                    
                    <div className="col-lg-2 text-l">

                      <FormInput
                        vType="one"
                        isChecked={this.state.selectedOption === "one"}
                        change={this.handleRadioChange}
                        class="form-check-input"
                        innerValue="Search by Title" />
                      <FormInput
                        vType="two"
                        isChecked={this.state.selectedOption === "two"}
                        change={this.handleRadioChange}
                        class="form-check-input"
                        innerValue="Search by Author" />
                      <FormInput
                        vType="three"
                        isChecked={this.state.selectedOption === "three"}
                        change={this.handleRadioChange}
                        class="form-check-input"
                        innerValue="Search by Genre" />          

                    </div>

                </div>

                <div className="row">
                    <div className="col-lg-12">
                        { this.state.selectedOption === "three" ?
                        null : <button type="submit">Search</button> }
                    </div>
                </div>
                </form>
            </div>
        )
    }
}

export default Search;