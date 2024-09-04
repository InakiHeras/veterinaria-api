const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Datos de ejemplo
let pacientes = [
    { id: 1, nombre: 'Rex', especie: 'Perro', raza: 'Labrador', edad: 5 },
    { id: 2, nombre: 'Michi', especie: 'Gato', raza: 'Siamés', edad: 3 }
];

let veterinarios = [
    { id: 1, nombre: 'Dra. Escobar', especialidad: 'Cirugía', telefono: 'nnn-nnn-nnnn' },
    { id: 2, nombre: 'Dr. Martinez', especialidad: 'Medicina interna', telefono: 'nnn-nnn-nnnn' }
];

let citas = [
    { id: 1, paciente_id: 1, veterinario_id: 1, fecha: '2024-09-15T09:00:00Z', motivo: 'Chequeo anual' },
    { id: 2, paciente_id: 2, veterinario_id: 2, fecha: '2024-09-16T11:00:00Z', motivo: 'Vacunas' }
];

// Pacientes
app.get('/api/pacientes', (req, res) => {
    res.json(pacientes);
});

app.get('/api/pacientes/:id', (req, res) => {
    const paciente = pacientes.find(p => p.id === parseInt(req.params.id));
    if (!paciente) return res.status(404).send('Paciente no encontrado');
    res.json(paciente);
});

app.post('/api/pacientes', (req, res) => {
    const nuevoPaciente = {
        id: pacientes.lenght + 1,
        ...req.body
    };
    pacientes.push(nuevoPaciente);
    res.status(201).json(nuevoPaciente);
});

app.put('/api/pacientes/:id', (req, res) => {
    const index = pacientes.findIndex(p => p.id === parseInt(req.params.id));
    if (index == -1) return res.status(400).send('Paciente no encontrado');
    pacientes.splice(index, 1);
    res.status(204).send();
});

// Veterinarios
app.get('/api/veterinarios', (req, res) => {
    res.json(veterinarios);
});

app.get('/api/veterinarios/:id', (req, res) => {
    const veterinario = veterinarios.find(v => v.id === parseInt(req.params.id));
    if (!veterinario) return res.status(404).send('Veterinario no encontrado');
    res.json(veterinario);
});

app.post('/api/veterinarios', (req, res) => {
    const nuevoVeterinario = {
        id: veterinarios.length + 1,
        ...req.body
    };
    veterinarios.push(nuevoVeterinario);
    res.status(201).json(nuevoVeterinario);
});

app.put('/api/pacientes/:id', (req, res) => {
    const index = veterinarios.findIndex(v => v.id === parseInt(req.params.id));
    if (index == -1) return res.status(400).send('Veterinario no encontrado');
    veterinarios.splice(index, 1);
    res.status(204).send();
});

// Citas
app.get('/api/citas', (req, res) => {
    res.json(citas);
});

app.get('/api/citas/:id', (req, res) => {
    const cita = citas.find(c => c.id === parseInt(req.params.id));
    if (!cita) return res.status(404).send('Cita no encontrada');
    res.json(cita);
});

app.post('/api/citas', (req, res) => {
    const nuevaCita = {
        id: citas.length + 1,
        ...req.body
    };
    citas.push(nuevaCita);
    res.status(201).json(nuevaCita);
});

app.put('/api/citas/:id', (req, res) => {
    const index = citas.findIndex(c => c.id === parseInt(req.params.id));
    if (index == -1) return resizeTo.status(400).send('Cita no encontrada');
    citas.splice(index, 1);
    res.status(204).send();
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});