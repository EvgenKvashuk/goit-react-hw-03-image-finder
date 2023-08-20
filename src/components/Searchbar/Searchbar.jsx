import React, { Component } from "react";
import Notiflix from "notiflix";
import css from "./Styles.module.css"

class SearchBar extends Component {
    state = {
        imageName: "",
        page: 1
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
        this.setState({ imageName: "", page: 1 });
    }

    render() {
        return (
            <div>
                <header className={css.Searchbar}>
                    <form
                        className={css.SearchForm}
                        onSubmit={this.handleSubmit}>
                        <button
                            className={css.SearchFormButton}
                            type="submit">
                            <span className="button-label">Search</span>
                        </button>

                        <input
                            className={css.SearchFormInput}
                            type="text"
                            autoComplete="off"
                            autoFocus
                            placeholder="Search images and photos"
                            onChange={this.handleNameChange}
                        />
                    </form>
                </header>
            </div>
        )
    };
};

export default SearchBar;