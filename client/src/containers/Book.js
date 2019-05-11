import React, { Component } from 'react'
import propTypes from 'prop-types'
import { connect } from 'react-redux'

import '../App.css'

class Book extends Component {
   
    render() {
        console.log(this.props)
        const bookSelection = this.props.book

        return(
          <div className="Book_Selected">
            Title: {bookSelection}
          </div>
        )
    }
}

Book.propTypes = {
    book: propTypes.object.isRequired
}

const mapStateToProps = state => ({
    book: state.selection
})

export default connect(mapStateToProps, null)(Book)