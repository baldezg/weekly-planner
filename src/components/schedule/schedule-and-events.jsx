import React from 'react';
import { useFormik } from 'formik';

const ScheduleAndEvents = () => {
  const handleKeyDown = (event) => {
      if(event.key === 'Enter') alert('working')
    };
  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  
    
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
      return (
        <div className='schedule'>
        <h4>CRONOGRAMA E EVENTOS</h4>
        <form className='days-week' onSubmit={days.handleSubmit}>
          <input
            className='days-of-week'
            type="text"
            name="monday"
            placeholder='monday'
            onChange={days.handleChange}
            value={days.values.monday}
          />
          <input
            className='days-of-week'
            type="text"
            name="tuesday"
            placeholder='Tuesday'
            onChange={days.handleChange}
            value={days.values.tuesday}
          />
          <input
            className='days-of-week'
            type="text"
            name="wednesday"
            placeholder='Wednesday'
            onChange={days.handleChange}
            value={days.values.wednesday}
          />
          <input
            className='days-of-week'
            type="text"
            name="thursday"
            placeholder='Thursday'
            onChange={days.handleChange}
            value={days.values.thursday}
          />
          <input
            className='days-of-week'
            type="text"
            name="friday"
            placeholder='Friday'
            onChange={days.handleChange}
            value={days.values.friday}
          />
          <input
            className='weekend'
            type="text"
            name="saturday"
            placeholder='Saturday'
            onChange={days.handleChange}
            value={days.values.saturday}
          />
          <input
            className='weekend'
            type="text"
            name="sunday"
            placeholder='Sunday'
            onChange={days.handleChange}
            value={days.values.sunday}
          />
        </form>
        </div>
      )}
    

export default ScheduleAndEvents;


