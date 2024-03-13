import React, { useState, useEffect } from "react";

const Header = () => {
    const [stateVar1, setStateVar1] = useState(0);

    useEffect(() => {
        console.log("useEffect");
    }, [stateVar1]);

    console.log("hy");

    return (
        <>
            <h1>Header</h1>
            <p>stateVar1: {stateVar1}</p>
            <button
                onClick={() => {
                    setStateVar1((prevState) => {
                        if (prevState === 0) return 1;
                        else return 0;
                    });
                }}
            >
                state var 1
            </button>
        </>
    );
};

export default Header;
