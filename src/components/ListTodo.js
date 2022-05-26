import React from 'react';

const ListTodo = () => {

    const listTodos = [
            {id: 'todo1',title: 'Do something'},
            {id: 'todo2',title: 'Do dit'},
            {id: 'todo3',title: 'Do it'},
            {id: 'todo4',title: 'Do kit'}
    ];

    return (

        <div className="list-todo-container">
            <div className="add-todo">
                <input type="text" className=""/>
                <button type="button" className="add">Add</button>

            </div>
            <div className="list-todo-content">
                {listTodos.map((item, index) =>{
                    return(
                        <div className="todo-child" key={item.id}>
                            <span>{index + 1} - {item.title}</span> 
                            <button className='edit'>Edit</button>
                            <button className='delete'>Delete</button>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}
export default ListTodo;