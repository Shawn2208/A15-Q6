const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Enable CORS for all routes
app.use(cors());

// Route to fetch countries and capitals
app.get('/countries', (req, res) => {
    fs.readFile('countries.json', 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading the file:", err);
            res.status(500).send('Internal Server Error');
            return;
        }
        
        const countries = JSON.parse(data);
        const result = countries.map(country => ({
            country: country.country,
            capital: country.capital
        }));
        
        res.json(result);
    });
});

// Route to fetch countries and currencies
app.get('/countries-currencies', (req, res) => {
    fs.readFile('countries.json', 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading the file:", err);
            res.status(500).send('Internal Server Error');
            return;
        }
        
        const countries = JSON.parse(data);
        const result = countries.map(country => ({
            country: country.country,
            currency: country.currency
        }));
        
        res.json(result);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
