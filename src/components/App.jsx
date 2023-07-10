import React, { Component } from "react";

import SearchBar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";


import axios from "axios";

class App extends Component {
  state = {
    showModal: false,
    loading: false,
    imagesName: "",
    page: 1,
  };

  handleFromFormName = imagesName => {
    console.log(imagesName);
    this.setState({ imagesName });
  };

  handlePage = page => {
    this.setState({ page });
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  handlerNextBtn = () => {
    console.log('click');
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { showModal, images, loading } = this.state;

    return (
      <>
        <SearchBar 
        onSubmit={this.handleFromFormName} 
        onPage={this.handlePage}/>
        <ImageGallery
          onOpenImg={this.toggleModal}
          imagesName={this.state.imagesName}
          onPage={this.state.page}
        />
        <Button onClick={this.handlerNextBtn} />
        {loading &&
          <Loader />}
        {showModal && <Modal onClose={this.toggleModal} />}
      </>
    );
  }
};

export default App;