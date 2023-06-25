import React, { Component } from "react";

import SearchBar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGalleryItem/ImageGallery";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";


import axios from "axios";

class App extends Component {
  state = {
    showModal: false,
    loading: false,
    imagesName: "",
  };

  handleFromFormName = imagesName => {
    console.log(imagesName);
    this.setState({ imagesName });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal, images, loading } = this.state;

    return (
      <>
        <SearchBar onSubmit={this.handleFromFormName} />
        <ImageGallery
          onOpenImg={this.toggleModal}
          imagesName={this.state.imagesName}
        />
        <Button />
        {loading &&
          <Loader />}
        {showModal && <Modal onClose={this.toggleModal} />}
      </>
    );
  }
};

export default App;
