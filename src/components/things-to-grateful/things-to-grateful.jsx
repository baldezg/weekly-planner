import React, {useState} from 'react';
import Input from '../Input/Input';
export default function ThingsToGrateful(){
    const [thingsToGrateful, setThingsToGrateful] = useState({
        thing1: '',
        thing2: '',
        thing3: '',
        thing4: '',
        thing5: ''
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setThingsToGrateful({
            ...thingsToGrateful,
            [name]: value
        });
    }
    
    return ( 
        <div className='grateful-list'>
            <h4>5 COISAS QUE SOU GRATO</h4>
            <ol>
                {Object.keys(thingsToGrateful).map((key, index) => {
                    return (
                        <li key={index}>
                            <Input
                                className='grateful-list__input'
                                name={key}
                                value={thingsToGrateful[key]}
                                handleChange={handleChange}
                            />
                        </li>
                    )
                })}
            </ol>
        </div>
        
    )
}