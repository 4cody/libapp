import React, { Component } from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchBooks, bookSelector } from '../dux/actions/bookActions'
import { Link } from 'react-router-dom'

import '../App.css'

class Display extends Component {
    componentWillMount() {
        this.props.fetchBooks();
    }

    handleClick(e) {
        this.props.bookSelector(e.target.id);
    }

    render() {

        const bookList = this.props.books.map((book, i) => (
            // <Link key={i} to={'/book'}>
                <div  
                    className="Book_Listing" 
                    id={book._id}
                    // onClick={this.handleClick}
                    >
                    <h6>{book.title}</h6>
                    {book.author}
                </div>
            // </Link>
        ))

        return(
            <div className="Display">
                {bookList}
            </div>
        )
    }
}

Display.propTypes = {
    fetchBooks: propTypes.func.isRequired,
    bookSelector: propTypes.func.isRequired,
    books: propTypes.array.isRequired
}

const mapStateToProps = state => ({
    books: state.books.books
})

export default connect(mapStateToProps, { fetchBooks, bookSelector })(Display)