import React from "react";
import {H1, HeaderStyle, Menu, Li} from './style'

const Header = () => {
    return (
        <HeaderStyle>
            <H1>Labeflix</H1>
            <Menu>
                <Li>Filmes</Li>
                <Li>Séries</Li>
                <Li>Infantil</Li>
            </Menu>
        </HeaderStyle>

    )
    
}

export default Header