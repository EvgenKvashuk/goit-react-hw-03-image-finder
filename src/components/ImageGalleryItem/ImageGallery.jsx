import React, { Component } from "react";

class ImageGallery extends Component {
    state = {
        images: null,
        loading: false,
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.imagesName !== this.props.imagesName) {
            this.setState({ loading: true })

            const API_KEY = '35871708-bbfa936b0bfd126629100243d';

            fetch(`https://pixabay.com/api/?q=${this.props.imagesName}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
                .then(respone => respone.json())
                .then(images => this.setState({ images }))
                .finally(() => this.setState({ loading: false }))
        }
    }

    render() {
        const { images } = this.state;

        return (
            <div>
                {images &&
                    <ul>
                        {this.state.images.hits.map(image => (
                            <li key={image.id}>
                                <img src={image.webformatURL} alt="" />
                            </li>
                        ))}

                    </ul>
                }
            </div>
        )
    }
}

export default ImageGallery;