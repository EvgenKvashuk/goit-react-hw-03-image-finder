import React, { Component } from "react";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";

class ImageGallery extends Component {
    state = {
        images: null,
        loading: false,
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.imagesName !== this.props.imagesName) {
            this.setState({ loading: true, images: null })

            const API_KEY = '35871708-bbfa936b0bfd126629100243d';

            fetch(`https://pixabay.com/api/?q=${this.props.imagesName}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
                .then(respone => respone.json())
                .then(images => this.setState({ images }))
                .finally(() => this.setState({ loading: false }))
        }
    }

    render() {
        const { images, loading } = this.state;

        return (
            <div>
                {loading && <p>Loading</p>}
                {!images && <p>Fiell search for results</p>}
                {images &&
                    <ul>
                        {this.state.images.hits.map(image => (
                            // <li key={image.id}>
                            //     <img src={image.webformatURL} alt="" />
                            // </li>
                            <ImageGalleryItem image={image} />
                        ))}
                    </ul>
                }
            </div>
        );
    };
};

export default ImageGallery;