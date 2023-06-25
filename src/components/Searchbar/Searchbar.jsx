import React, { Component } from "react";
import Notiflix from "notiflix";

class SearchBar extends Component {
    state = {
        imageName: "",
    };

    handleNameChange = evt => {
        this.setState({ imageName: evt.currentTarget.value.toLowerCase() });
    };

    handleSubmit = evt => {
        evt.preventDefault();

        if (this.state.imageName.trim() === "") {
            Notiflix.Notify.info('Введіть назву зображення');
            return;
        };

        this.props.onSubmit(this.state.imageName);
        this.setState({ imageName: "", });
    }

    render() {
        return (
            <header>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit" >
                        <span >Search</span>
                    </button>

                    <input
                        type="text"
                        placeholder="Search images and photos"
                        value={this.state.imageName}
                        onChange={this.handleNameChange}
                    />
                </form>
            </header>
        )
    };
};

export default SearchBar;