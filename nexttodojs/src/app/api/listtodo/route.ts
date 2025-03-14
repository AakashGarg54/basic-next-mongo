import todoData from "@/data/todo.json"

export async function GET() {
    return Response.json(todoData)
}