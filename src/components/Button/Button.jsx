import React, { Component } from "react";

const Button = ({ onClick }) => {
    return (
        <div>
            <button onClick={onClick}>Load more</button>
        </div>
    )
};

export default Button;