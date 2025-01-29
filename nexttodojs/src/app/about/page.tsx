import Link from "next/link";

export default function about() {
    return (
        <>
            <h1 className="text-center text-3xl">About</h1>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consequatur assumenda placeat.</h1>
            <Link href="/todo"> Back to Todo</Link>
        </>
    )
}