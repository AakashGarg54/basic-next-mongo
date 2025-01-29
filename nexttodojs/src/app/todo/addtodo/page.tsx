import Link from "next/link";

export default function addTodo() {
    return (
        <>
            <h1 className="text-center text-3xl">addTodo</h1>
            <Link href="/todo"> Back to Todo</Link>

        </>
    )
}