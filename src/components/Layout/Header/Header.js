import React from 'react'

import HeaderTop from "./HeaderTop";
import HeaderMiddle from "./HeaderMiddle";
import HeaderBottom from "./HeaderBottom";

export const Header = () => {
    return (
        <header id="header">
            <HeaderTop />
            <HeaderMiddle />
            <HeaderBottom />
        </header>
    )
}

export default Header