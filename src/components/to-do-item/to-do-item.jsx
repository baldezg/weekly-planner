
import React from 'react';
import { UilEdit } from '@iconscout/react-unicons';
import { UilTrashAlt } from '@iconscout/react-unicons';
import Button from '../button/button';

const ToDoItem = (props) => {
    const [checked, setChecked] = React.useState(false);
    const handleCheckbox = (el) => {
        //toggle checkbox
        setChecked(!checked);
        const p = el.target.parentNode.querySelector('p');
        console.log(p)
        p.style.textDecoration = checked ? 'none' : 'line-through';
    }

    const handleEdit = (e) => {    
        console.log('edit')
        const div = e.target.parentNode.parentNode;
        console.log(div)       
    }
   
    return(
        <div className='to-do-item'>
            <input onClick={handleCheckbox} type='checkbox' className='checkbox'></input>     
            {checked ? <p className='done'>{props.text}</p> : <p>{props.text}</p>}
            {checked ? false : <Button class='edit-button-todo' onClick={handleEdit} icon={<UilEdit/>}/>}
            <Button class='delete-button' icon={<UilTrashAlt/>} />
        </div>
    )
}

export default ToDoItem;