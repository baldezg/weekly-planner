
import './App.css';
import "../node_modules/rsuite/dist/rsuite.css";
import Header from './components/header/header';
import './components/header/header.css'
import ScheduleAndEvents from './components/schedule/schedule-and-events';
import './components/schedule/schedule-and-events.css'
import ToDoList from './components/to-do-list/to-do-list';
import './components/to-do-list/to-do-list.css';
import Notes from './components/notes/notes';
import './components/notes/notes.css';
import ThingsToGrateful from './components/things-to-grateful/things-to-grateful';
import './components/things-to-grateful/things-to-grateful.css';
import './components/to-do-item/to-do-item.css';
import Button from './components/button/button'



function App() {
  return (
    <>
    <div className='grid'>
    <Header />
    <ScheduleAndEvents />
    <ToDoList />
    <ThingsToGrateful />
    <Notes />
    </div>
    <div className='submit-button'>
    <Button icon="Salvar" class="btn-submit"/>
    </div>
    </>
  );
}

export default App;
