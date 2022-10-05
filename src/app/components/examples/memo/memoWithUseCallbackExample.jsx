import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render button");
    });

    return (
        <button className="btn btn-primary" onClick={onLogOut}>
            Log out
        </button>
    );
};

LogOutButton.propTypes = {
    onLogOut: PropTypes.func
};
function areQual(prevState, nextState) {
    if (prevState.onLogOut !== nextState.onLogOut) return false;
    return true;
}

const MemoizedLogButton = React.memo(LogOutButton, areQual);
const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);
    const handelLogOut = useCallback(() => {
        localStorage.removeItem("auth");
    }, [props]);
    return (
        <>
            <button
                className="btn btn-primary mx-2"
                onClick={() => setState(!state)}
            >
                Initiate rerender
            </button>
            <MemoizedLogButton onLogOut={handelLogOut} />
        </>
    );
};

export default MemoWithUseCallbackExample;
