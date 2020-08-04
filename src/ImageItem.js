import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            <>
                <p className='title'>{this.props.image.title}</p>
                <img src={this.props.image.url.includes('modernfarmer') ? 'http://www.placekitten.com/300/300' : this.props.image.url} alt=''/>
                <p>{this.props.image.description}</p>
            </>
        )
    }
}
