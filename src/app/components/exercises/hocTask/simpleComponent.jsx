import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    const [nameButton, setNameButton] = useState("Вход");
    const [buttonChange, setButtonChange] = useState(() => onLogin);

    useEffect(() => {
        if (!isAuth) {
            setButtonChange(() => onLogin);
        } else {
            setNameButton("Выйти из системы");
            setButtonChange(() => onLogOut);
        }
        console.log(nameButton);
    });
    return (
        <button className="btn btn-primary" onClick={buttonChange}>
            {nameButton}
        </button>
    );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.bool
};

export default SimpleComponent;
