import React, { useState, useRef, useEffect, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({ name: "" });
    const withOutCallback = useRef(0);
    const withCallback = useRef(0);
    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    // WidthOutCallback
    const validateWidthOutCallback = (data) => {
        console.log(data);
    };
    useEffect(() => {
        withOutCallback.current++;
    }, [validateWidthOutCallback]);

    // WidthOutCallback
    const validateWidthCallback = useCallback((data) => {
        console.log(data);
    }, []);

    useEffect(() => {
        withCallback.current++;
    }, [validateWidthCallback]);

    // update
    useEffect(() => {
        validateWidthOutCallback(data);
        validateWidthCallback(data);
    }, [data]);

    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render withOutCallback: {withOutCallback.current} </p>
            <p>Render withCallback: {withCallback.current} </p>
            <label htmlFor="name" className="form-label">
                Nmae
            </label>
            <input
                value={data.name || ""}
                onChange={handleChange}
                type="text"
                id="name"
                name="name"
                className="form-control"
            />
        </CardWrapper>
    );
};

export default UseCallBackExample;
