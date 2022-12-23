import React from 'react';
import { DateRangePicker, CustomProvider } from 'rsuite';
import pt_BR from 'rsuite/locales/pt_BR'

export default function Header(){
    const estilo = {
        outline:'none'
    }
    return (
        <div className='header'>
        <h1 className='title-header'>Planejamento Semanal</h1>
        <CustomProvider locale={pt_BR}>
        <p className='week'>Semana: <DateRangePicker style={estilo} isoWeek placeholder='Selecione a semana' format='dd-MM-yyyy' oneTap showOneCalendar hoverRange="week" ranges={[]} /> </p>
        </CustomProvider>
        </div>
    )
}
