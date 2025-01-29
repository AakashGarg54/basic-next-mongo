import Link from "next/link";

export default function deleteTodo(){
    return (
        <>
            <h1 className="text-center text-3xl">deleteTodo</h1>
            <Link href="/todo"> Back to Todo</Link>

        </>
    )
}