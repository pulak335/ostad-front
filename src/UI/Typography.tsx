import React from 'react';
import { Title } from '../types/Constant';

const Typography = ({title,classes}:Title) => {
    return (
        <h1 className={classes}>{title}</h1>
    );
};

export default Typography;