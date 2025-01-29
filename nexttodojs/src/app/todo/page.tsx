import Link from "next/link";

export default function listTodo() {
    return (
        <>
            <h1 className="text-center text-3xl">Todo</h1>
            <ul className="list-disc">
                <li><Link href="/todo/listtodo">List Todo</Link></li>
                <li><Link href="/todo/addtodo">Add Todo</Link></li>
                <li><Link href="/todo/edittodo">Edit Todo</Link></li>
                <li><Link href="/todo/deletetodo">Delete Todo</Link></li>
            </ul>
        </>
    )
}