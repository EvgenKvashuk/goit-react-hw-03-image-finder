import React, { Component } from "react";
import Modal from "components/Modal/Modal";
import css from "./Styles.module.css"

class ImageGalleryItem extends Component {
    state = {
        showModal: false,
    };

    toggleModal = () => {
        this.setState(({ showModal }) => ({
            showModal: !showModal,
        }));
    };


    render() {
        const { showModal } = this.state;
        const { id, webformatURL, largeImageURL } = this.props.image;

        return (

            <li
                className={css.ImageGalleryItem}
                onClick={this.toggleModal}
                key={id}
                style={{
                    borderRadius: '2px',
                }}>
                <img
                    className={css.ImageGalleryItemImage}
                    src={webformatURL} alt="" />
                {showModal && <Modal
                    onClose={this.toggleModal}
                    largeImageURL={largeImageURL} />}
            </li>
        );
    };
};

export default ImageGalleryItem;


// тут треба натискання на область зображення відкривати модалку