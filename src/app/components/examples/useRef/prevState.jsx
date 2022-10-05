import React, { useState, useEffect, useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
    const prevState = useRef("");
    const [toggleClick, setToggleClick] = useState("false");

    useEffect(() => {
        prevState.current = toggleClick;
    });
    const handleToggle = () => {
        setToggleClick((prevState) =>
            prevState === "false" ? "true" : "false"
        );
    };
    return (
        <CardWrapper>
            <SmallTitle>Предыдущий</SmallTitle>
            <p>prevState: {prevState.current} </p>
            <p>toggleClick: {toggleClick} </p>
            <button className="btn btn-primary" onClick={handleToggle}>
                Toggle click
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
