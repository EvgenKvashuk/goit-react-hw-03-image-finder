import React, { Component } from "react";

import SearchBar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Loader from "./Loader/Loader";
import css from "./Styles.module.css"

class App extends Component {
  state = {
    loading: false,
    imagesName: "",
    page: 1,
    btnIsVisible: false,
  };

  handleFromFormName = imagesName => {
    console.log(imagesName);
    this.setState({ imagesName, btnIsVisible: true });
  };

  handlePage = page => {
    this.setState({ page });
  }

  handlerNextBtn = () => {
    console.log('click');
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { loading, btnIsVisible } = this.state;

    return (
      <div
        className={css.App}
        >
        <SearchBar
          onSubmit={this.handleFromFormName}
          onPage={this.handlePage} />
        <ImageGallery

          onOpenImg={this.toggleModal}
          imagesName={this.state.imagesName}
          onPage={this.state.page}
        />
        {btnIsVisible &&
          <Button onClick={this.handlerNextBtn} />}
        {loading &&
          <Loader />}
        {/* {showModal && <Modal onClose={this.toggleModal} />} */}
      </div>
    );
  }
};

export default App;