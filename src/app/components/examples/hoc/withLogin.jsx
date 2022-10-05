import React from "react";
import SmallTitle from "../../common/typografy/smallTitle";
import CardWrapper from "../../common/Card";
const withLogin = (Component) => (props) => {
    const isLogin = localStorage.getItem("auth");
    return (
        <>
            {isLogin ? (
                <CardWrapper>
                    <Component {...props} />
                </CardWrapper>
            ) : (
                <SmallTitle>Auth</SmallTitle>
            )}
        </>
    );
};

export default withLogin;
