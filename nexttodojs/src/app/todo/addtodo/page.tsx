import Form from "next/form";

import { addtodo } from "@/utils/addtodo";
import todoData from "@/data/todo.json";

export default function addTodo() {

    return (
        <>
            <h1 className="text-center text-3xl">Add Todo</h1>
            <Form action={addtodo} id="addForm">
                <div className="max-w-7xl mx-auto mt-10">
                    <label htmlFor="id" className="form-label">Id</label>
                    <input type="text" className="w-full p-3 border rounded-lg shadow-sm text-gray-500" name="id" value={todoData.todoData.length + 1}  readOnly/>
                </div>
                <div className="max-w-7xl mx-auto mt-10">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" name="title" placeholder="Enter your todos title" />
                </div>
                <div className="max-w-7xl mx-auto mt-10">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <textarea className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" placeholder="Enter your todos description" name="desc" />
                </div>
                <div className="max-w-7xl mx-auto mt-10">
                    <label htmlFor="Time" className="form-label">Time</label>
                    <input type="time" className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" name="time" placeholder="Enter your todos time" />
                </div>

                <div className="max-w-7xl mx-auto mt-10">
                    <label htmlFor="Date" className="form-label">Date To start</label>
                    <input type="date" className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200" name="date" placeholder="Enter your todos date " />
                </div>
                <input type="hidden" name="formId" value="Addtodo" />
                <div className="max-w-7xl mx-auto mt-10">
                    <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 inlne-block">
                        Add New TODO
                    </button>
                </div>
            </Form>

        </>
    )
}