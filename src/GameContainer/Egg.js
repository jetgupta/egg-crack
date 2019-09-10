import React from 'react';
import egg from '../images/egg.jpg'
import crackedEgg from '../images/eggCracked.jpg'
import goldOpen from '../images/openEggGold.jpg'
import emptyOpen from '../images/openEggEmpty.jpg'
import easterEgg from '../images/easterEgg.jpg'
import emptyEasterOpen from '../images/openEasterEggEmpty.jpg'
import crackedEasterEgg from '../images/easterEggCracked.jpg'
import easterGoldOpen from '../images/openEasterEggGold.jpg'



let style = {
    margin: '2px'
}
function Egg(props){
    if (props.easter===false){
        if (props.state==='cracked')
        {
            return(
                <img src={crackedEgg} style={style} alt={'crackedEgg'} onClick={props.onClick}/>
            )
        }
        else if (props.state==='open' && props.golden) {
            return(
                <img src={goldOpen} style={style} alt={'goldEgg'} onClick={props.onClick}/>
            )
        }
        else if(props.state==='open' && !props.golden){
            return(
                <img src={emptyOpen} style={style} alt={'goldEgg'} onClick={props.onClick}/>
            )
        }
        else{
            return(
                <img src={egg} style={style} alt={'egg'} onClick={props.onClick}/>
            )
        }
    }
    else if (props.easter===true){
        if (props.state==='cracked')
        {
            return(
                <img src={crackedEasterEgg} style={style} alt={'crackedEgg'} onClick={props.onClick}/>
            )
        }
        else if (props.state==='open' && props.golden) {
            return(
                <img src={easterGoldOpen} style={style} alt={'goldEgg'} onClick={props.onClick}/>
            )
        }
        else if(props.state==='open' && !props.golden){
            return(
                <img src={emptyEasterOpen} style={style} alt={'goldEgg'} onClick={props.onClick}/>
            )
        }
        else{
            return(
                <img src={easterEgg} style={style} alt={'egg'} onClick={props.onClick}/>
            )
        }
    }
}

export default Egg;