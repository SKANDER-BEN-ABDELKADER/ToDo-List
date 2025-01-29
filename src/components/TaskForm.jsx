import  {useState} from 'react'

import './TaskForm.css'
import Tag from './Tag'

const TaskForm = () => {
const [taskData, setTaskData] = useState({
task:"",
stauts:"todo",
tags: []
})

const checkTag = (tag) => { 
    return taskData.tags.some(item => item === tag)
}

const selectTag = (tag) => {
    if(taskData.tags.some(item => item === tag)){
        const filterTags = taskData.tags.filter(item => item !== tag)
        setTaskData(prev=>{
            return {
                ...prev,
                tags: filterTags
            }
        })
}else{
    setTaskData(prev=>{
        return {
            ...prev,
            tags: [...prev.tags, tag]
        }
    })
}
}
console.log(taskData.tags)

const handelChange = (e) => {
    const {name, value} = e.target
    
    setTaskData(prev=>{
        return {
            ...prev,
            [name]:value
        }
    })
}
const handelSubmit = (e) => {
    e.preventDefault()
    console.log(taskData)
}
    // const [Task, setTask] = useState("")
    // const [status, setstatus] = useState("todo")

    // const handelTaskChange = (e) => {
    //     setTask(e.target.value)
    // }
    // const handelStatusChange = (e) => {
    //     setstatus(e.target.value)
    // }

    // console.log(Task, status)
  return (
    <header className='app_header'>
        <form onSubmit={handelSubmit}>
            <input 
            name='task'
            type="text" 
            className='task_input' 
            placeholder='Enter your task'
            onChange={handelChange}
            />
            <div className='task_form_bottom_line'>
                <div>
                    <Tag tagName='HTML' 
                    selectTag={selectTag} 
                    selected={checkTag("HTML")}/>

                    <Tag tagName='CSS' 
                    selectTag={selectTag}
                    selected={checkTag("CSS")}/>  

                    <Tag tagName='JavaScript' 
                    selectTag={selectTag}
                    selected={checkTag("JavaScript")}/>

                    <Tag tagName='React' 
                    selectTag={selectTag}
                    selected={checkTag("React")}/>
                </div>
                <div>
                <select 
                className='task_status'
                name='stauts'
                onChange={handelChange}
                > 
                    <option value="todo">To Do</option>
                    <option value="doing">Doing</option>
                    <option value="done">Done</option>
                </select>
                <button type='submit' className='task_submit'>+ Add Task</button>
            </div>
            </div>
        </form>
    </header>
)
}

export default TaskForm