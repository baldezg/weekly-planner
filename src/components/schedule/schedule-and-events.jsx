import React from 'react';
import { useFormik } from 'formik';

const ScheduleAndEvents = () => {

     const days = useFormik({
      initialValues: {
        monday: '',
        tuesday:'',
        wednesday:'',
        thursday:'',
        friday:'',
        saturday:'',
      },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
      const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
          event.preventDefault();
          const input = event.target;
          const div = document.createElement('div');
          div.className = 'event ' + input.className;
          div.textContent = input.placeholder + ' - ' + input.value;
          const button = document.createElement('button');
          button.textContent = 'Editar';
          button.className = 'edit-button';
          button.onclick = () => {
            div.parentNode.replaceChild(input, div);
            input.focus();
          };
          div.appendChild(button);
          input.parentNode.replaceChild(div, input);
        } 
      }

      return (
        <div className='schedule'>
        <h4>CRONOGRAMA E EVENTOS</h4>
        <form className='days-week' onSubmit={days.handleSubmit}>
          <input
            className='days-of-week'
            type="text"
            name="monday"
            placeholder='Segunda'
            onKeyDown={handleKeyDown}
            onChange={days.handleChange}
            value={days.values.monday}
          />
          <input
            className='days-of-week'
            type="text"
            name="tuesday"
            placeholder='Terça'
            onKeyDown={handleKeyDown}
            onChange={days.handleChange}
            value={days.values.tuesday}
          />
          <input
            className='days-of-week'
            type="text"
            name="wednesday"
            placeholder='Quarta'
            onKeyDown={handleKeyDown}
            onChange={days.handleChange}
            value={days.values.wednesday}
          />
          <input
            className='days-of-week'
            type="text"
            name="thursday"
            placeholder='Quinta'
            onKeyDown={handleKeyDown}
            onChange={days.handleChange}
            value={days.values.thursday}
          />
          <input
            className='days-of-week'
            type="text"
            name="friday"
            placeholder='Sexta'
            onKeyDown={handleKeyDown}
            onChange={days.handleChange}
            value={days.values.friday}
          />
          <input
            className='weekend'
            type="text"
            name="saturday"
            placeholder='Sábado'
            onKeyDown={handleKeyDown}
            onChange={days.handleChange}
            value={days.values.saturday}
          />
          <input
            className='weekend'
            type="text"
            name="sunday"
            placeholder='Domingo'
            onKeyDown={handleKeyDown}
            onChange={days.handleChange}
            value={days.values.sunday}
          />
        </form>
        </div>
      )}
    
export default ScheduleAndEvents;


