import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
const ProgrammableActionsExample = () => {
    const inputRef = useRef();
    const handleFocus = () => {
        inputRef.current.focus();
    };
    const handleWidth = () => {
        inputRef.current.style.width = "200px";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="name" className="form-label">
                Nmae
            </label>
            <input
                ref={inputRef}
                type="text"
                id="name"
                className="form-control"
            />
            <button className="btn btn-dark" onClick={handleFocus}>
                focus
            </button>
            <button className="btn btn-dark" onClick={handleWidth}>
                width
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
