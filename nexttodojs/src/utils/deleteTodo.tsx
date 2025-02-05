"use client"

import todoData from "@/data/todo.json"
import { redirect } from "next/navigation";

export async function delete1Todo(params: any) {
    const params1: string = await params.id
    const index = todoData.todoData.findIndex(
        (todo) => todo.id === params1
    );  
    todoData.todoData.splice(index, 1)
    redirect("/todo/listtodo")
}