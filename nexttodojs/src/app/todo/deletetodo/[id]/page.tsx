"use client"

import todoData from "@/data/todo.json"

import Form from "next/form";
import { redirect } from "next/navigation";

export default async function deleteTodo({ params }: any) {

    const delete1Todo = async () => {
        const params1: string = await params.id
        const index = todoData.todoData.findIndex(
            (todo) => todo.id === params1
        );
        todoData.todoData.splice(index, 1)
        redirect("/todo/listtodo")
    }

    return (
        <>
            <h1 className="text-center text-3xl">deleteTodo</h1>

            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-center text-3xl">Are you sure you want to delete the below todo?</h1>

                {todoData.todoData.map((i) => {
                    if (i.id === params.id) {
                        return (<h1 key={i.id} className="text-center text-3xl">Title : {i.title}</h1>
                        )
                    }
                })
                }

                <Form action={delete1Todo}>
                    <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 inlne-block">
                        Delete TODO
                    </button>
                </Form>
            </div>

        </>
    )
}