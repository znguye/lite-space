// Thoughts: Create the following functions
// - `getTasks()`
// - `createTask(task)`
// - `updateTask(id, updates)`
// - `deleteTask(id)`

// const BASE_URL = "http://localhost:3001/api/tasks"
const BASE_URL = "https://lite-api-oj7d.onrender.com/api/tasks";


export async function getTasks() {
    const response = await fetch(BASE_URL);
    return await response.json();
}

export async function createTask(task) {
    const response = await (fetch (BASE_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(task),
    }));
    return await response.json();
}

export async function updateTask(id, updates) {
    const response = await (fetch(`${BASE_URL}/${id}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(updates),
    }));
    return await response.json();
}

export async function deleteTask(id) {
    await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE"
    });
}