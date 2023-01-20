
import React from 'react';
import { UilEdit } from '@iconscout/react-unicons';
import { UilTrashAlt } from '@iconscout/react-unicons';
import Button from '../button/button';

const ToDoItem = (props) => {
    const [checked, setChecked] = React.useState(false);
    const [edit, setEdit] = React.useState(false);
    

    const handleCheckbox = (el) => {
        //toggle checkbox
        setChecked(!checked);
        const p = el.target.parentNode.querySelector('p');
        console.log(p)
        p.style.textDecoration = checked ? 'none' : 'line-through';
    }
    const handleEdit = () => {
        setEdit(!edit)
}

    return(
        <div className='to-do-item'>
            <input onClick={handleCheckbox} type='checkbox' className='checkbox'></input>     
            {edit ? <input onChange={props.handleChange}></input> :
            checked ? <p className='done'>{props.text}</p> : <p>{props.text}</p>}
            
            {checked ? false : !edit ? <Button class='edit-button-todo' onClick={handleEdit} icon={<UilEdit/>} /> : <Button class='edit-button' onClick={()=> props.saveTask} icon={<UilTrashAlt/>} />}

            <Button class='delete-button'onClick={()=> props.deleteTask(props.id)} icon={<UilTrashAlt/>} />
        </div>
        
    )
}


export default ToDoItem;