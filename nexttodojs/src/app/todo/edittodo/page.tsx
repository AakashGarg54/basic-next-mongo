import Link from "next/link";

export default function editTodo() {
    return (
        <>
            <h1 className="text-center text-3xl">editTodo</h1>
            <Link href="/todo"> Back to Todo</Link>

        </>
    )
}