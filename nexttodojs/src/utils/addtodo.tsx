'use client'

import todoData from "@/data/todo.json";

import { redirect } from "next/navigation"

export function addtodo(formData: FormData) {

    if (formData.get("formId") === "EditTodo") {

        const updatedTodoData = todoData.todoData.map((todo: any) => {
            if (todo.id === formData.get("id")) {
                return {
                    ...todo,
                    title: formData.get("title"),
                    desc: formData.get("desc"),
                    time: formData.get("time"),
                    date: formData.get("date"),
                };
            }
            return todo; // Return the original todo if no match
        });
        todoData.todoData = updatedTodoData;



    } else if (formData.get("formId") === "Addtodo") {
        const newTodo: any = {
            id: formData.get("id"),
            title: formData.get("title"),
            desc: formData.get("desc"),
            time: formData.get("time"),
            date: formData.get("date"),
        }

        todoData.todoData.push(newTodo)
    }

    redirect("/todo/listtodo")

}