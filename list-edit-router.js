const express = require('express');
const listEditRouter = express.Router();

// Middleware para manejar errores en solicitudes POST
listEditRouter.post('/create', (req, res, next) => {
    try {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ error: 'Cuerpo de la solicitud vacío' });
        }

        // Agregar validaciones adicionales según tus necesidades
        const newTask = req.body;
        if (!newTask.description) {
            return res.status(400).json({ error: 'La descripción de la tarea es obligatoria' });
        }

        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Middleware para manejar errores en solicitudes PUT
listEditRouter.put('/update/:taskId', (req, res, next) => {
    try {
        if (!req.body || Object.keys(req.body).length === 0) {
            return res.status(400).json({ error: 'Cuerpo de la solicitud vacío' });
        }

        // Agregar validaciones adicionales según tus necesidades
        const taskId = req.params.taskId;
        if (isNaN(taskId)) {
            return res.status(400).json({ error: 'El parámetro taskId debe ser un número' });
        }

        const updatedTask = req.body;
        if (!updatedTask.description) {
            return res.status(400).json({ error: 'La descripción de la tarea es obligatoria' });
        }

        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Agregar el resto de tus rutas y lógica aquí

module.exports = listEditRouter;