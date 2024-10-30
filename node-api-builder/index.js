const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// In-memory database
let items = [];

// Get all items
app.get('/api/items', (req, res) => {
    res.json(items);
});

// Get a specific item by ID
app.get('/api/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found');
    res.json(item);
});

// Create a new item
app.post('/api/items', (req, res) => {
    const item = {
        id: items.length + 1,
        name: req.body.name,
        description: req.body.description
    };
    items.push(item);
    res.status(201).json(item);
});

// Update an existing item
app.put('/api/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found');

    item.name = req.body.name;
    item.description = req.body.description;
    res.json(item);
});

// Delete an item
app.delete('/api/items/:id', (req, res) => {
    const itemIndex = items.findIndex(i => i.id === parseInt(req.params.id));
    if (itemIndex === -1) return res.status(404).send('Item not found');

    const deletedItem = items.splice(itemIndex, 1);
    res.json(deletedItem);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
