import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            <li>
                <img src={this.props.image.url} alt=''/>
            </li>
        )
    }
}
