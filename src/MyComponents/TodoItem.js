import React from 'react'

export default function TodoItem({todo}) {
    return (
        <>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button className="btn btn-danger btn-sm">Delete</button>
        </>
    )
}
