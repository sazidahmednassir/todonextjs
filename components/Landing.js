import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, removeTodo } from '../redux/action'

export const Landing = () => {
    const [data, setData] = useState('')
    const dispatch = useDispatch()

    const selector = useSelector(state => state.todoReducer.list)
    console.log(selector)

    return (
        <div className='flex flex-col gap-4 p-5'>
            <div className='flex align-center justify-center text-3xl lg:text-8xl text-white mb-3 '><h1>Todo App</h1></div>
            <div className='space-x-4'>
                <input type="text"
                    onChange={(e) => { setData(e.target.value) }}
                    placeholder='Enter Here...'
                    className='pl-4 p-3 border-2  w-96 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
                    value={data}
                />
                <button onClick={() => dispatch(addTodo(data), setData(''))} className='bg-transparent bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-3 lg:m-0'>ADD</button>

            </div>

            {selector.map((item) => {
                return (
                    <div key={item.id} className='flex justify-between items-center w-full '>
                        <p className='font-semibold text-5xl text-white'>{item.data} </p> <button onClick={() => dispatch(removeTodo(item.id))} className='bg-transparent bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}
