import React from "react";
import CardWrapper from "../../common/Card";
import TextField from "../../common/form/textField";
import SmallTitle from "../../common/typografy/smallTitle";
const CloneElementExample = () => {
    // eslint-disable-next-line react/jsx-no-undef
    const field = <TextField label="email" name="email"></TextField>;
    const handelChange = (target) => {
        console.log("change: ", target);
    };
    return (
        <CardWrapper>
            <SmallTitle>Пример</SmallTitle>
            {field}
            {React.cloneElement(field, {
                onChange: handelChange,
                label: "clone email"
            })}
        </CardWrapper>
    );
};

export default CloneElementExample;
