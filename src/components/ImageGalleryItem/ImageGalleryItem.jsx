import React, { Component } from "react";

class ImageGalleryItem extends Component {

    render() {
        const {id, webformatURL} = this.props.image;

        return (
            <li key={id}
            style={{
               borderRadius: '2px',
               
            }}>
                <img src={webformatURL} alt="" />
            </li>
        );
    };
};

export default ImageGalleryItem;