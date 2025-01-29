import Link from "next/link";

export default function listTodo() {
    return (
        <>
            <h1 className="text-center text-3xl">listTodo</h1>
            <Link href="/todo"> Back to Todo</Link>

        </>
    )
}