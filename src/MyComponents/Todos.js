import React from 'react'
import TodoItem from '../MyComponents/TodoItem';

export default function Todos(props) {
    return (
        <div className="container">
            <h3 className="text-center">Todos List</h3>
            <TodoItem todo={props.todos[0]} />
        </div>
    )
}
