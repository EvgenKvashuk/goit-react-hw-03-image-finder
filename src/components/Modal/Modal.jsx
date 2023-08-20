import React, { Component } from "react";
import { createPortal } from "react-dom";
import css from "./Styles.module.css"

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
    handleKeyDown = e => {
        console.log(e.code)
        if (e.code === "Escape") {
            this.props.onClose()
        }
    }

    handleBackdropClick = evt => {
        console.log(evt.currentTarget)
        console.log(evt.target)
        if (evt.currentTarget !== evt.target) {
            this.props.onClose()
        }
    
    }

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }



    render() {

        return createPortal(
            <div>
                <div
                    onClick={this.handleBackdropClick}
                    className={css.Overlay}>
                    <div
                        className={css.Modal}>
                        <img src={this.props.largeImageURL} alt="" />
                    </div>
                </div>
            </div>
            , modalRoot,
        );
    }
};

