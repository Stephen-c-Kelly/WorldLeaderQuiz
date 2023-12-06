import test from './test.js'

// console.log(test)
// parseAPI_data.js

import fs from 'fs';

// Read the JSON data from the file
const data = fs.readFileSync('test.js', 'utf8');

// Parse the JSON data
const countries = JSON.parse(data);

// Extract required information (name, region, population, flag, leader)
const modifiedData = countries.map(country => {
  return {
    name: country.name.common,
    region: country.region,
    population: country.population,
    flag: country.flags.svg, // Assuming the flag property is available in the original data
    leader: country.leaderName, // Assuming the leaderName property is available in the original data
  };
});

// Convert the modified data back to JSON
const modifiedJson = JSON.stringify(modifiedData, null, 2);

// Write the modified data to a new file
fs.writeFileSync('modified_countries.json', modifiedJson, 'utf8');
console.log('Modified data written to modified_countries.json');
