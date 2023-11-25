const axios = require('axios');
const fs = require('fs').promises;

const apiUrl = 'https://example.com/api/resource'; // Replace with your API endpoint
const jsonFilePath = './api/apiData.json';

const newObjectData = {
    name: 'hibban',
    email: 'hibban@gmail.com'
};

// Read the existing data from the JSON file
fs.readFile(jsonFilePath, 'utf-8')
    .then(existingData => {
        let parsedData;

        // Check if the file is empty
        if (existingData.trim() === '') {
            parsedData = [];
        } else {
            parsedData = JSON.parse(existingData);

            // Check if the existing data is an object with "employee" key
            if (typeof parsedData === 'object' && parsedData.employee) {
                // Convert the object to an array
                parsedData = [parsedData.employee];
            } else if (!Array.isArray(parsedData)) {
                throw new Error('Existing data is not an array or an object with "employee" key.');
            }
        }

        // Add the new object data to the existing array or structure
        parsedData.push(newObjectData);

        // Write the updated data back to the JSON file
        return fs.writeFile(jsonFilePath, JSON.stringify({ employee: parsedData }, null, 2));
    })
    .then(() => {
        console.log('Object created successfully.');
    })
    .catch(error => {
        console.error('Error creating object:', error.message);
    });
