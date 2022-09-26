import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const RenderCountExample = () => {
    const countRef = useRef(0);
    const [toggleClick, setToggleClick] = useState(true);
    useEffect(() => {
        countRef.current++;
    });
    const handleUpdate = () => {
        setToggleClick(countRef.current);
    };
    const handleToggle = () => {
        setToggleClick(!toggleClick);
    };
    console.log(toggleClick);
    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            <p>count {countRef.current} </p>
            <p>Обновить {toggleClick}</p>
            <button className="btn btn-primary" onClick={handleToggle}>
                Toggle click
            </button>
            <button className="btn btn-primary" onClick={handleUpdate}>
                Update
            </button>
        </CardWrapper>
    );
};

export default RenderCountExample;
