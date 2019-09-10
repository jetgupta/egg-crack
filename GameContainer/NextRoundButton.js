import React from 'react';
import image from '../images/nextButton.jpg'

function NextRoundButton(props){
    if (props.step==='correct'||props.step==='incorrect')
    {
        return(
            <img src={image} alt={'next'} onClick={props.onClick}/>
        );
    }
    else{
        return null;
    }
}

export default NextRoundButton;