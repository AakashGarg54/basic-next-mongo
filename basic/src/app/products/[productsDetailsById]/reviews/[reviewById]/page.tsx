import { notFound } from "next/navigation";

export default function reviews({ params }: any) {

    if (params.reviewById > 30 && params.reviewById < 100) {
        notFound();
    }

    if (params.reviewById > 100) {
        throw new Error("Stop playing with the application")
    }

    return (
        <>
            <p> Review ID: {params.reviewById} </p>
            <p>Product ID: {params.productsDetailsById}</p >
        </>
    )
}