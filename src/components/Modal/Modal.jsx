import React, { Component } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
            console.log(e.code)
        }
    }

    HandleBackdropClick = evt => {
        if (evt.currentTarget === evt.target) {
            this.props.onClose();
        }
    }

    render() {
        return createPortal(
            <div>
                <div>
                    <div onClick={this.HandleBackdropClick}>
                        <h2>Modal</h2>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
            , modalRoot,
        );
    }
};

