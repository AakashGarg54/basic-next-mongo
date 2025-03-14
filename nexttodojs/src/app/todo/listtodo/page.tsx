"use client"

import Link from "next/link";
import { useEffect, useState } from "react";

export default function listTodo() {

    const [todoData, settodoData] = useState([])

    useEffect(() => {

        const getData = async () => {

            const todoDataFromApi = await fetch("/api/listtodo")
                .then(response => response.json())
            settodoData(todoDataFromApi.todoData)
            console.log(todoDataFromApi.todoData);

        };
        getData();
    }, [])


    return (
        <>
            <div className="container" style={{ minHeight: "77.8vh" }}>
                <h1 className="text-center text-3xl">listTodo</h1>
                {todoData.length === 0 ? (
                    <div className="card">
                        <div className="card-body">
                            There is <strong> No </strong> Todos to display.
                        </div>
                    </div>
                ) : (
                    todoData.map((i: any) => {
                        return (
                            <div key={i.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold">{i.title}</h3>
                                    <p className="text-gray-700 mt-2">{i.desc}</p>
                                    <br />
                                    <hr />
                                    <Link href={`/todo/edittodo/${i.id}`} className="m-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 inline-block">
                                        Edit Todo
                                    </Link>
                                    <Link href={`/todo/deletetodo/${i.id}`} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 inline-block">
                                        Delete Todo
                                    </Link>
                                </div>
                                <br />
                            </div>
                        );
                    })
                )}
            </div>
        </>
    );
}
