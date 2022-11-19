export function getStudent(request, response) {
    const student = {
        student: "Jose Miguel Rupallan Diaz",
        title: "Tarea 7 Express.js Especializacion Tecnologica 1"
    }
    return response.status(200).send(student)
}