import React, { useState, useEffect, useMemo } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}
function runFactorial(n) {
    console.log("run factorial");
    return factorial();
}
const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [otherState, setOtherState] = useState(false);
    const buttonColor = otherState ? "primary" : "secondary";
    // 1)функция 2)зависимости
    const fact = useMemo(() => runFactorial(value), [value]);
    useEffect(() => {
        console.log("render button color");
    }, [buttonColor]);

    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>value: {value}</p>
                <p>Result factorial: {fact}</p>
                <button
                    className="btn btn-primary"
                    onClick={() => setValue((prevState) => prevState + 10)}
                >
                    +
                </button>
                <button
                    className="btn btn-primary"
                    onClick={() => setValue((prevState) => prevState - 10)}
                >
                    -
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    className={"btn btn-" + buttonColor}
                    onClick={() => setOtherState(!otherState)}
                >
                    Change color
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
