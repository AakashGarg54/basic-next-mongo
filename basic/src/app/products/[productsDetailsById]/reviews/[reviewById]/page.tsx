import { notFound } from "next/navigation";

export default function reviews({ params }: any) {

    if (params.reviewById > 30) {
        notFound();
    }

    return (
        <>
            <p> Review ID: {params.reviewById} </p>
            <p>Product ID: {params.productsDetailsById}</p >
        </>
    )
}