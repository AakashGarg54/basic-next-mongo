/*"use client"

export default function error() {
    return (
        <h1>Error Page</h1>
    )

}
*/

"use client";

export default function error({ error }: { error: Error }) {
    return <div>{error.message}</div>;
}