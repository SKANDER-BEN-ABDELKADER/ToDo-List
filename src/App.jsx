
import "./App.css"
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import ToDoIcon from './assets/direct-hit.png'
import DoingIcon from './assets/glowing-star.png'
import DoneIcon from './assets/check-mark-button.png'

function App() {
  return (
    <div className='app'>
      <TaskForm/>
      <main className='app_main'>
        <TaskColumn title='To Do' icon={ToDoIcon}/>
        <TaskColumn title='Doing' icon={DoingIcon}/>
        <TaskColumn title='Done' icon={DoneIcon}/>
      </main>
    </div>
  )
}

export default App