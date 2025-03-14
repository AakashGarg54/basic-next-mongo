import todoData from "@/data/todo.json"


export async function POST(request: Request) {
    const dataFromPostRequest = await request.json();
    const data = {
        "id": dataFromPostRequest.id,
        "title": dataFromPostRequest.title,
        "desc": dataFromPostRequest.desc,
        "time": dataFromPostRequest.time,
        "date": dataFromPostRequest.date,
        "active": true
    };
    todoData.todoData.push(data);
    return new Response(JSON.stringify(todoData), {
        headers: {
            "Content-Type": "application/json",
        },
        status: 201,
    });
}