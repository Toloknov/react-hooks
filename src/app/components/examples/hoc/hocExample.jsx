import React from "react";
import Component from "./someComponent";
import withLogin from "./withLogin";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "../../common/divider";
import withPropsStyle from "./withPropsStyles";
import SimpleComponent from "../../exercises/hocTask/simpleComponent";
import withFunctions from "../../exercises/hocTask/withFunctions";
const HOCExample = () => {
    const ComponentWithAuth = withLogin(Component);
    const ComponentWithPropsStyle = withPropsStyle(Component);
    const NewComponent = withPropsStyle(ComponentWithAuth);
    const ComponentWithHoc = withFunctions(SimpleComponent);
    return (
        <>
            <CardWrapper>
                <SmallTitle>1. Обычный компонент</SmallTitle>
                <Divider />
                <Component />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>2. Функциональный HOC</SmallTitle>
                <Divider />
                <ComponentWithAuth />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>3. HOC With Styles and Props</SmallTitle>
                <Divider />
                <ComponentWithPropsStyle />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>4. Composed HOC</SmallTitle>
                <NewComponent />
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>5. My HOC</SmallTitle>
                <ComponentWithHoc />
            </CardWrapper>
        </>
    );
};

export default HOCExample;
