import React from 'react';

import styled from "styled-components"

export const LogoStyle = styled.div`
    display: flex;
    align-items: center;
`

const Logo = ({logo, classes}:any) => {
    return (
        <LogoStyle>
            <img src={logo} className={classes} alt="" srcSet="" />
        </LogoStyle>
    );
};

export default Logo;