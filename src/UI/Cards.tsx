import React from 'react';
import styled from "styled-components"
import { Expart } from '../types/expart';

export const Card = styled.div`
    width: 288px;
    height: 274.74px;
    margin: 0 auto;
    background: #1D2939;
    border-radius: 4px;
    overflow: hidden;
`

const Cards = ({id,icon, title_En,title_Bn, imgUrl, in_imgUrl, instructor, fieldName}:Expart) => {
    return (
        <Card>
            
        </Card>
    );
};

export default Cards;