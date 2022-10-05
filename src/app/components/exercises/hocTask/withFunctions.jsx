import React from "react";
import CardWrapper from "../../common/Card";
import PropTypes from "prop-types";
const withFunction = (Component) => (props) => {
    const isAuth = localStorage.getItem("auth")?.length > 0;
    const onLogin = () => {
        return localStorage.setItem("auth", "auth");
    };
    const onLogOut = () => {
        return localStorage.removeItem("auth");
    };
    return (
        <CardWrapper>
            <Component
                {...props}
                isAuth={isAuth}
                onLogOut={onLogOut}
                onLogin={onLogin}
            />
        </CardWrapper>
    );
};

withFunction.propTypes = {
    props: PropTypes.object
};

export default withFunction;
