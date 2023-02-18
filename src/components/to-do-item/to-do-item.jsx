
import React from 'react';
import { UilEdit } from '@iconscout/react-unicons';
import { UilTrashAlt } from '@iconscout/react-unicons';
import Button from '../button/button';
import { useState } from 'react';

const ToDoItem = (props) => {
    const [checked, setChecked] = useState(false);
   
    const handleCheckbox = (el) => {
        setChecked(!checked);
        const p = el.target.parentNode.querySelector('p');
        p.style.textDecoration = checked ? 'none' : 'line-through';
    }
    
    return(
        <div className='to-do-item'>

            <input onClick={handleCheckbox} type='checkbox' className='checkbox'></input>   
            {checked ? <p className='done'>{props.text}</p> : <p>{props.text}</p>}  
            {checked ? false : <Button class='edit-button-todo' onClick={props.editTask} icon={<UilEdit/>} />}
            <Button class='delete-button'onClick={()=> props.deleteTask(props.id)} icon={<UilTrashAlt/>} />
        </div>
        
    )
}

export default ToDoItem;



