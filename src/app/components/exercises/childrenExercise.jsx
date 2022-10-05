import React from "react";
import PropTypes from "prop-types";
import CollapseWrapper from "../common/collapse";
const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            <Envelope>
                <Component />
                <Component />
                <Component />
            </Envelope>
        </CollapseWrapper>
    );
};
ChildrenExercise.propTypes = {
    children: PropTypes.object
};
const Envelope = ({ children }) => {
    return React.Children.map(children, (child, index) => {
        const config = { ...child, index: index + 1 };
        return React.cloneElement(child, config);
    });
};
const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
