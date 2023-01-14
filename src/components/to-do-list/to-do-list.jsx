import React from 'react';
import ToDoItem from '../to-do-item/to-do-item';

export default function ToDoList(){
    const [list, setList] = React.useState([]);
    const [input, setInput] = React.useState('');

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            event.preventDefault();
            const input = event.target;
            setList([...list, input.value]);
            setInput(input);
            input.value = '';
        }}
    const rows = [];


        for(let i = 0; i < 5; i++){  
            rows.push(
                list[i] ? <ToDoItem key={i} text={list[i]}/> : <input key={i} type='text' className='to-do-input' id={i} onKeyDown={handleKeyPress}/>
            )
        }

    return(
        <div className='to-do-list'>
            <h4 className='title'>AFAZERES</h4>
                {rows}
        </div>
    )
}