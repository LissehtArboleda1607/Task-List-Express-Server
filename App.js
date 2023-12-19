const express = require('express');
const app = express();
const port = 3000;

// Middleware para gestionar métodos HTTP válidos
app.use((req, res, next) => {
    const validMethods = ['GET', 'POST', 'PUT', 'DELETE'];

    if (!validMethods.includes(req.method)) {
        return res.status(400).json({ error: 'Método HTTP no válido' });
    }

    next();
});

// Middleware para el cuerpo de las solicitudes (body parser)
app.use(express.json());

// Rutas del servidor principal
app.get('/tasks', (req, res) => {
    // Lista de tareas en formato JSON
    const tasks = [
        {
            "id": "123456",
            "isCompleted": false,
            "description": "Walk the dog",
        },
        // Agrega más tareas según sea necesario
    ];

    res.json(tasks);
});

// Integra los routers en el servidor principal
app.use('/list-view', listViewRouter);
app.use('/list-edit', listEditRouter);

app.listen(port, () => {
    console.log(`Servidor Express escuchando en el puerto ${port}`);
});