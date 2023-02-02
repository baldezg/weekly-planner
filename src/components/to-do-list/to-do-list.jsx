import React, {useState} from 'react';
import ToDoItem from '../to-do-item/to-do-item';

export default function ToDoList(){
    const [list, setList] = React.useState([]);
    const [input, setInput] = React.useState('');
    
    const deleteTask = (id) => {
        const newList = list.filter((item, index) => index !== id);
        setList(newList);
      }

    const handleChange = (event) => {
        
        
    }
    const handleKeyPress = (event) => {
        
        if(event.key === 'Enter'){
            event.preventDefault();
            const input = event.target;
            setList([...list, input.value]);
            setInput(input);
            input.value = '';
        }
    }
   
    const rows = [];


        for(let i = 0; i < 5; i++){  
            rows.push(
                list[i] ? <ToDoItem key={i} handleChange={handleChange} deleteTask={deleteTask} text={list[i]} id={i}/> : <input key={i} type='text' className='to-do-input' id={i} onKeyDown={handleKeyPress}/>
            )
        }
    
    return(
        <div className='to-do-list'>
            <h4 className='title'>AFAZERES</h4>
                {rows}
        </div>
    )
}





// import React, { useState } from 'react';
// import ToDoItem from '../to-do-item/to-do-item';

// const ToDoList = () => {
//     const [list, setList] = useState([]);
//     const [input, setInput] = useState('');

//     const deleteTask = (id) => {
//         setList(list.filter((item, index) => index !== id));
//     }

//     const handleChange = (event) => {
//         setInput(event.target.value);
//     }

//     const handleKeyPress = (event) => {
//         if (event.key === 'Enter') {
//             event.preventDefault();
//             setList([...list, input]);
//             setInput('');
//         }
//     }
//     console.log(list)

//     return (
//         <div className='to-do-list'>
//             <h4 className='title'>AFAZERES</h4>
//             {
//                 list.map((item, index) => 
//                     <ToDoItem key={index} deleteTask={() => deleteTask(index)} text={item} id={index} />
//                 )
//             }
//             <input type='text' className='to-do-input' value={input} onChange={handleChange} onKeyPress={handleKeyPress} />
//         </div>
//     );
// }

// export default ToDoList;

