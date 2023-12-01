// // Assuming countries.json is in the same directory as script.js

// // Function to fetch and parse JSON
// async function fetchCountries() {
//   try {
//     const response = await fetch('countries.json');
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('Error fetching countries:', error);
//   }
// }

// // Example usage
// fetchCountries().then(countries => {
//   // Do something with the countries data
//   console.log(countries);
// });


// Import the JSON data
import countriesData from './countries.js';

// Example usage
console.log(countriesData);
