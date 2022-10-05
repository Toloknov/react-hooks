import React, { useState, useEffect } from "react";
import { validator } from "../../../utils/validator";
import PropTypes from "prop-types";
const FormComponent = ({ children, validatorConfig, onSubmit }) => {
    const [data, setData] = useState({});
    const [errors, setErrors] = useState({});
    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    useEffect(() => {
        if (Object.keys(data).length > 0) {
            validate();
        }
    }, [data]);
    const isValid = Object.keys(errors).length === 0;
    const validate = () => {
        const errors = validator(data, validatorConfig);
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        onSubmit(data);
        console.log(data);
    };

    const cloneElements = React.Children.map(children, (child) => {
        const childType = typeof child.type;
        let config = {};

        if (childType === "function") {
            if (!child.props.name) {
                throw new Error(
                    "Name property is required for field component",
                    child
                );
            }
            config = {
                ...child.props,
                onchange: handleChange,
                value: data[child.props.name] || "",
                error: errors[child.props.name]
            };
        }
        if (childType === "string") {
            if (child.type === "button") {
                if (
                    child.props.type === "submit" ||
                    child.props.type === undefined
                ) {
                    config = { ...child.props, disabled: !isValid };
                }
            }
        }
        return React.cloneElement(child, config);
    });
    return <form onSubmit={handleSubmit}>{cloneElements}</form>;
};

FormComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    validatorConfig: PropTypes.object,
    onSubmit: PropTypes.func
};
export default FormComponent;
