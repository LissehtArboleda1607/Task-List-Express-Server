const express = require('express');
const listViewRouter = express.Router();

// Middleware para gestionar parámetros correctos
listViewRouter.param('taskId', (req, res, next, taskId) => {
    try {
        // Agregar lógica para validar taskId según tus necesidades
        if (isNaN(taskId)) {
            return res.status(400).json({ error: 'Parámetro taskId no válido' });
        }

        // Agregar lógica adicional según sea necesario

        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Ruta para listar tareas completas
listViewRouter.get('/completed', (req, res) => {
    try {
        // Lógica para obtener y devolver tareas completas
        res.json(/* Lista de tareas completas */);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

// Ruta para listar tareas incompletas
listViewRouter.get('/incomplete', (req, res) => {
    try {
        // Lógica para obtener y devolver tareas incompletas
        res.json(/* Lista de tareas incompletas */);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

module.exports = listViewRouter;