import React, { Component } from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { addBook } from '../dux/actions/bookActions'

class AddBook extends Component {

    state = {
        title: '',
        author: '',
        genre: ''
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
        let book = {
            title: this.state.title,
            author: this.state.author,
            genre: this.state.genre
        }
        this.props.addBook(book)
    }

    render() {
        return(
            <form onSubmit={this.onSubmit}>
                <label>
                    Title: 
                    <input type="text" 
                        name='title'
                        value={this.state.title} 
                        onChange={this.onChange}/>
                </label><br/>
                <label>
                    Author: 
                    <input type="text" 
                        name='author'
                        value={this.state.author} 
                        onChange={this.onChange}/>
                </label><br/>
                <label>
                    Genre: 
                    <input type="text" 
                        name='genre'
                        value={this.state.genre} 
                        onChange={this.onChange}/>
                </label>
                <input type="submit"/>
            </form>
        )
    }
}

AddBook.propTypes = {
    addBook: propTypes.func.isRequired
}


export default connect(null, { addBook })(AddBook)