import React from 'react';
import { Button } from '../types/Constant';

const ButtonT = ({title, classes, icons, others}:Button) => {
    return (
        <button className={classes}>
            <p>{title}</p> { icons && <img className={others} src={icons} /> }
        </button>
    );
};

export default ButtonT;