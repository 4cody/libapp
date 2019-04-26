import React from 'react'
import PropTypes from 'prop-types'
import Listing from './Listing'

const Listings = ({ items }) => (
    <ul>
        {items.map((item, index) => (
            <Listing key={index}>{item}</Listing>
        ))}
    </ul>
)

export default Listings