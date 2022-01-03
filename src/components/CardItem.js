import React from 'react'
import PropTypes from 'prop-types'
import './cards.css'

export default function CardItem(props) {
    return (
        <div className='card text-center bg-dark'>

            <div class="overflow">
                <img src={props.src} alt="" className='card-img-top' />
            </div>

            <div class="card-body text-light">
                <h4 class="card-title">{props.title}</h4>
                <p class="card-text text-secondary">{props.text}</p>
                <button type="button" class="btn btn-outline-secondary" data-toggle="modal" data-target="#myModal">
                    See more
                </button>
            </div>
            
        </div>
    )
}

CardItem.propTypes = {
    src: PropTypes.string,
    title: PropTypes.string.isRequired,
    path: PropTypes.string
}