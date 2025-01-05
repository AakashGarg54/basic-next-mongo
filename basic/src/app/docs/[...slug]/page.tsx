export default function docs({ params, }: { params: { slug: string[] } }) {


    return (
        <>

            {/* {console.log(params)} */}
            <p> Review ID: {params.slug[1]} </p>
            {/* <p>Product ID: {params.productsDetailsById}</p > */}
        </>
    )
}