import React from 'react'

export const ShowTask = ({taskList, setTaskList, task, setTask}) => {
    // const tasks = [
    //     {id: 1001, name: 'Task A', time: '2:09:01 PM 11/16/2024'},
    //     {id: 1002, name: 'Task B', time: '2:40:01 PM 11/16/2024'},
    //     {id: 1003, name: 'Task C', time: '3:19:01 PM 11/16/2024'}
    // ];

    const handleEdit = (id) => {
        const selectedTask = taskList.find(task => task.id === id);
        setTask(selectedTask);
    }

    const handleDelete = (id) => {
        const updatedTaskList = taskList.filter(task => task.id !== id);
        setTaskList(updatedTaskList);
    }


  return (
    <section className='showTask'>
        <div className="head">
            <div>
                <span className='title'>Todo</span>
                <span className='count'>{taskList.length}</span>
            </div>
            <button className='clearAll' onClick={() => setTaskList([])}>Clear All</button>
        </div>
        <ul>
            { taskList.map((task) => (
                <li key={task.id}>
                    <p>
                        <span className='name'>{task.name}</span>
                        <span className='time'>{task.time}</span>
                    </p>
                    <i onClick={() => handleEdit(task.id)} className='bi bi-pencil-square'></i>
                    <i onClick={() => handleDelete(task.id)} className='bi bi-trash'></i>
                </li>
            ))}
        </ul>
    </section>
  )
}
