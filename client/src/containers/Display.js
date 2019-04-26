import React, { Component } from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchBooks } from '../dux/actions/bookActions'

class Display extends Component {
    componentWillMount() {
        this.props.fetchBooks();
    }

    render() {

        const bookList = this.props.books.map(book => (
            <div key={book.book_id}>
                <h3>{book.title}</h3>
                <h3>{book.genre}</h3>
            </div>
        ))

        return(
            <div>
                {bookList}
            </div>
        )
    }
}

Display.propTypes = {
    fetchBooks: propTypes.func.isRequired,
    books: propTypes.array.isRequired
}

const mapStateToProps = state => ({
    books: state.books.books
})

export default connect(mapStateToProps, { fetchBooks })(Display)
