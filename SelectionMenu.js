import React from 'react';
import './App.css';

function SelectionMenu(props) {
    return(
        <div className='selection-menu'>
            <form onSubmit={props.onSubmit}>
                Choose your egg number: <br />
                <input type="text" value={props.eggNumber} onChange={props.onChange} />
                <input type='submit' value='Start' />
            </form> 
        </div>
    );
}

export default SelectionMenu;