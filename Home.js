import React, { useState, useEffect } from "react";
import ClassParentComp from './ClassParentComp'


const Header = () => {
    const [online, setOnline] = useState('true')
    useEffect(() => {
        const eventListener1 = window.addEventListener('online', () => {
            setOnline('true')
        })
        const eventListener2 = window.addEventListener('offline', () => {
            setOnline('false')
        })

        return () => {
            removeEventListener(eventListener1, eventListener2)
        }
    }, []);


    return (
        <>
            <h4>Online: {online}</h4>
            <ClassParentComp name={"Rashika"} age={13}/>
            </>
    );
};

export default Header;
