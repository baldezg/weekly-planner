import React, { useState } from 'react';
import './Schedule.css';
import Card from '../../components/Card/Card';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const Schedule = () => {
  const [events, setEvents] = useState({
    Domingo: [],
    Segunda: [],
    Terça: [],
    Quarta: [],
    Quinta: [],
    Sexta: [],
    Sábado: [],
  });

  const handleAddEvent = (event, day) => {
    event.preventDefault();
    const input = event.target.elements.event;
    const newEvent = input.value.trim();

    if (newEvent !== '') {
      setEvents((prevEvents) => ({
        ...prevEvents,
        [day]: [...prevEvents[day], newEvent],
      }));
      input.value = '';
    }
  };

  const handleDeleteEvent = (day, index) => {
    setEvents((prevEvents) => {
      const updatedEvents = { ...prevEvents };
      updatedEvents[day].splice(index, 1);
      return updatedEvents;
    });
  };

  return (
    <div className="schedule">
      <h1>Planejamento Semanal</h1>
      <ul className="schedule__board">
        {Object.entries(events).map(([day, dayEvents]) => (
          <li key={day} className="day-column">
            <h2>{day}</h2>
            <hr></hr>
            {dayEvents.length > 0 ? (
              <ul>
                {dayEvents.map((event, index) => (
                  <li key={index}>
                    <Card event={event} close={() => handleDeleteEvent(day, index)} />
                  </li>
                ))}
              </ul>
            ) : (
              <p>Nenhum evento adicionado.</p>
            )}
            <form onSubmit={(e) => handleAddEvent(e, day)}>
              <Input
              className="input"
              name="event"
              type="text"
              placeholder="Novo evento"
              />
              <Button class="btn" icon="Adicionar"/>
            </form>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;

