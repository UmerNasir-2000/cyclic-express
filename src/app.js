const dotenv = require('dotenv');
dotenv.config();

const express = require('express');

const app = express();

app.get('/', (req, res) => res.status(200).json({ message: 'Cyclic did it!!' }))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}/`))