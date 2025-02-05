"use client"
import Form from "next/form";

import { addtodo } from "@/utils/addtodo";
import todoData from "@/data/todo.json"


import { useState } from "react";

export default function editTodo({ params }: any) {
    const todo = todoData.todoData[todoData.todoData.findIndex(
        (todo) => todo.id === params.id
    )]

    const [inputValue, setInputValue] = useState(todo)

    // Step 2: Handle the onChange event to update the state
    const handleChange = (e: any) => {
        setInputValue(e.target.value);  // Update the state with the new value
    };


    return (
        <>
            <h1 className="text-center text-3xl">Edit Todo</h1>
            <Form action={addtodo}>
                <div className="max-w-7xl mx-auto mt-10">
                    <label htmlFor="id" className="form-label">Id</label>
                    <input type="text" className="w-full p-3 border rounded-lg shadow-sm text-gray-800" name="id" value={params.id} readOnly />
                </div>
                <div className="max-w-7xl mx-auto mt-10">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" value={inputValue.title} onChange={handleChange} name="title" placeholder="Enter your todos title" />
                </div>
                <div className="max-w-7xl mx-auto mt-10">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <textarea className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" placeholder="Enter your todos description" name="desc" value={inputValue.desc} onChange={handleChange} />
                </div>
                <div className="max-w-7xl mx-auto mt-10">
                    <label htmlFor="Time" className="form-label">Time</label>
                    <input type="time" className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" name="time" value={inputValue.time} onChange={handleChange} placeholder="Enter your todos time" />
                </div>

                <div className="max-w-7xl mx-auto mt-10">
                    <label htmlFor="Date" className="form-label">Date To start</label>
                    <input type="date" className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" name="date" value={inputValue.date} onChange={handleChange} placeholder="Enter your todos date " />
                </div>
                <input type="hidden" name="formId" value="EditTodo" />
                <div className="max-w-7xl mx-auto mt-10">
                    <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 inlne-block">
                        Edit TODO
                    </button>
                </div>
            </Form>

        </>
    )
}