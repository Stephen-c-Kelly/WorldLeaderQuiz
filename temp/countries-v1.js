
// Assuming countries.json is in the same directory as script.js

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


// // Import the JSON data
// import countriesData from './countries.js';

// // Example usage
// console.log(countriesData);



// 12/1 export default from chatGPT - https://chat.openai.com/share/103cced4-e4ea-4c88-9432-f692faf4d183

// //  
// eurpoeCountries [
//   [
//     {
//       "countryName": "Germany",
//       "leaderName": "Olaf Scholz",
//       "assumedOfficeDate": "December 8, 2021",
//       "flag": "🇩🇪",
//       "nationalBird": "White Stork",
//       "mostRecentAnnualGDP": "4.5 trillion USD",
//       "globalRegion": "Europe",
//       "countryImage": "",
//       "pronunciationLink": "",
//       "wrongName1": "Angela Merkel",
//       "wrongName2": "Emmanuel Macron",
//       "wrongName3": "Boris Johnson"
//     },
//     {
//       "countryName": "France",
//       "leaderName": "Emmanuel Macron",
//       "assumedOfficeDate": "May 14, 2017",
//       "flag": "🇫🇷",
//       "nationalBird": "Gallic Rooster",
//       "mostRecentAnnualGDP": "2.8 trillion USD",
//       "globalRegion": "Europe",
//       "countryImage": "",
//       "pronunciationLink": "",
//       "wrongName1": "Stefan Löfven",
//       "wrongName2": "Pedro Sánchez",
//       "wrongName3": "Vladimir Putin"
//     },
//     {
//       "countryName": "United Kingdom",
//       "leaderName": "Boris Johnson",
//       "assumedOfficeDate": "July 24, 2019",
//       "flag": "🇬🇧",
//       "nationalBird": "European Robin",
//       "mostRecentAnnualGDP": "2.9 trillion USD",
//       "globalRegion": "Europe",
//       "countryImage": "",
//       "pronunciationLink": "",
//       "wrongName1": "Olaf Scholz",
//       "wrongName2": "Mark Rutte",
//       "wrongName3": "Mario Draghi"
//     },
//     {
//       "countryName": "Italy",
//       "leaderName": "Mario Draghi",
//       "assumedOfficeDate": "February 13, 2021",
//       "flag": "🇮🇹",
//       "nationalBird": "Italian Sparrow",
//       "mostRecentAnnualGDP": "2.2 trillion USD",
//       "globalRegion": "Europe",
//       "countryImage": "",
//       "pronunciationLink": "",
//       "wrongName1": "Boris Johnson",
//       "wrongName2": "Angela Merkel",
//       "wrongName3": "Emmanuel Macron"
//     },
//     {
//       "countryName": "Spain",
//       "leaderName": "Pedro Sánchez",
//       "assumedOfficeDate": "June 2, 2018",
//       "flag": "🇪🇸",
//       "nationalBird": "Spanish Imperial Eagle",
//       "mostRecentAnnualGDP": "1.4 trillion USD",
//       "globalRegion": "Europe",
//       "countryImage": "",
//       "pronunciationLink": "",
//       "wrongName1": "Guy Parmelin",
//       "wrongName2": "Stefan Löfven",
//       "wrongName3": "Angela Merkel"
//     },
//     {
//       "countryName": "Russia",
//       "leaderName": "Vladimir Putin",
//       "assumedOfficeDate": "May 7, 2012",
//       "flag": "🇷🇺",
//       "nationalBird": "Golden Eagle",
//       "mostRecentAnnualGDP": "1.5 trillion USD",
//       "globalRegion": "Europe",
//       "countryImage": "",
//       "pronunciationLink": "",
//       "wrongName1": "Emmanuel Macron",
//       "wrongName2": "Pedro Sánchez",
//       "wrongName3": "Stefan Löfven"
//     },
//     {
//       "countryName": "Netherlands",
//       "leaderName": "Mark Rutte",
//       "assumedOfficeDate": "October 14, 2010",
//       "flag": "🇳🇱",
//       "nationalBird": "European Goldfinch",
//       "mostRecentAnnualGDP": "1.0 trillion USD",
//       "globalRegion": "Europe",
//       "countryImage": "",
//       "pronunciationLink": "",
//       "wrongName1": "Boris Johnson",
//       "wrongName2": "Angela Merkel",
//       "wrongName3": "Olaf Scholz"
//     },
//     {
//       "countryName": "Switzerland",
//       "leaderName": "Guy Parmelin",
//       "assumedOfficeDate": "January 1, 2021",
//       "flag": "🇨🇭",
//       "nationalBird": "Common Blackbird",
//       "mostRecentAnnualGDP": "0.7 trillion USD",
//       "globalRegion": "Europe",
//       "countryImage": "",
//       "pronunciationLink": "",
//       "wrongName1": "Mario Draghi",
//       "wrongName2": "Boris Johnson",
//       "wrongName3": "Emmanuel Macron"
//     },
//     {
//       "countryName": "Sweden",
//       "leaderName": "Stefan Löfven",
//       "assumedOfficeDate": "October 3, 2014",
//       "flag": "🇸🇪",
//       "nationalBird": "Common Blackbird",
//       "mostRecentAnnualGDP": "0.6 trillion USD",
//       "globalRegion": "Europe",
//       "countryImage": "",
//       "pronunciationLink": "",
//       "wrongName1": "Pedro Sánchez",
//       "wrongName2": "Vladimir Putin",
//       "wrongName3": "Guy Parmelin"
//     },
//     {
//       "countryName": "Poland",
//       "leaderName": "Mateusz Morawiecki",
//       "assumedOfficeDate": "December 11, 2017",
//       "flag": "🇵🇱",
//       "nationalBird": "White-tailed Eagle",
//       "mostRecentAnnualGDP": "0.6 trillion USD",
//       "globalRegion": "Europe",
//       "countryImage": "",
//       "pronunciationLink": "",
//       "wrongName1": "Olaf Scholz",
//       "wrongName2": "Mark Rutte",
//       "wrongName3": "Angela Merkel"
//     },
//     {
//       "countryName": "Greece",
//       "leaderName": "Kyriakos Mitsotakis",
//       "assumedOfficeDate": "July 8, 2019",
//       "flag": "🇬🇷",
//       "nationalBird": "Common Nightingale",
//       "mostRecentAnnualGDP": "0.2 trillion USD",
//       "globalRegion": "Europe",
//       "countryImage": "",
//       "pronunciationLink": "",
//       "wrongName1": "Pedro Sánchez",
//       "wrongName2": "Mario Draghi",
//       "wrongName3": "Stefan Löfven"
//     },
//     {
//       "countryName": "Portugal",
//       "leaderName": "António Costa",
//       "assumedOfficeDate": "October 26, 2019",
//       "flag": "🇵🇹",
//       "nationalBird": "Common Serin",
//       "mostRecentAnnualGDP": "0.2 trillion USD",
//       "globalRegion": "Europe",
//       "countryImage": "",
//       "pronunciationLink": "",
//       "wrongName1": "Boris Johnson",
//       "wrongName2": "Guy Parmelin",
//       "wrongName3": "Emmanuel Macron"
//     },
//     {
//       "countryName": "Norway",
//       "leaderName": "Erna Solberg",
//       "assumedOfficeDate": "October 16, 2013",
//       "flag": "🇳🇴",
//       "nationalBird": "White-throated Dipper",
//       "mostRecentAnnualGDP": "0.4 trillion USD",
//       "globalRegion": "Europe",
//       "countryImage": "",
//       "pronunciationLink": "",
//       "wrongName1": "Stefan Löfven",
//       "wrongName2": "Pedro Sánchez",
//       "wrongName3": "Vladimir Putin"
//     },
//     {
//       "countryName": "Denmark",
//       "leaderName": "Mette Frederiksen",
//       "assumedOfficeDate": "June 28, 2019",
//       "flag": "🇩🇰",
//       "nationalBird": "Mute Swan",
//       "mostRecentAnnualGDP": "0.4 trillion USD",
//       "globalRegion": "Europe",
//       "countryImage": "",
//       "pronunciationLink": "",
//       "wrongName1": "Olaf Scholz",
//       "wrongName2": "Mark Rutte",
//       "wrongName3": "Angela Merkel"
//     },
//     {
//       "countryName": "Finland",
//       "leaderName": "Sanna Marin",
//       "assumedOfficeDate": "December 10, 2019",
//       "flag": "🇫🇮",
//       "nationalBird": "Whooper Swan",
//       "mostRecentAnnualGDP": "0.3 trillion USD",
//       "globalRegion": "Europe",
//       "countryImage": "",
//       "pronunciationLink": "",
//       "wrongName1": "Mario Draghi",
//       "wrongName2": "Boris Johnson",
//       "wrongName3": "Emmanuel Macron"
//     },
//     {
//       "countryName": "Austria",
//       "leaderName": "Sebastian Kurz",
//       "assumedOfficeDate": "December 18, 2017",
//       "flag": "🇦🇹",
//       "nationalBird": "Eurasian Blackbird",
//       "mostRecentAnnualGDP": "0.4 trillion USD",
//       "globalRegion": "Europe",
//       "countryImage": "",
//       "pronunciationLink": "",
//       "wrongName1": "Pedro Sánchez",
//       "wrongName2": "Guy Parmelin",
//       "wrongName3": "Stefan Löfven"
//     },
//     {
//       "countryName": "Belgium",
//       "leaderName": "Alexander De Croo",
//       "assumedOfficeDate": "October 1, 2020",
//       "flag": "🇧🇪",
//       "nationalBird": "European Robin",
//       "mostRecentAnnualGDP": "0.5 trillion USD",
//       "globalRegion": "Europe",
//       "countryImage": "",
//       "pronunciationLink": "",
//       "wrongName1": "Emmanuel Macron",
//       "wrongName2": "Olaf Scholz",
//       "wrongName3": "Mark Rutte"
//     },
//     {
//       "countryName": "Czech Republic",
//       "leaderName": "Andrej Babiš",
//       "assumedOfficeDate": "December 6, 2017",
//       "flag": "🇨🇿",
//       "nationalBird": "Common Nightingale",
//       "mostRecentAnnualGDP": "0.2 trillion USD",
//       "globalRegion": "Europe",
//       "countryImage": "",
//       "pronunciationLink": "",
//       "wrongName1": "Vladimir Putin",
//       "wrongName2": "Stefan Löfven",
//       "wrongName3": "Pedro Sánchez"
//     },
//     {
//       "countryName": "Bulgaria",
//       "leaderName": "Stefan Yanev",
//       "assumedOfficeDate": "May 12, 2021",
//       "flag": "🇧🇬",
//       "nationalBird": "Common Nightingale",
//       "mostRecentAnnualGDP": "0.1 trillion USD",
//       "globalRegion": "Europe",
//       "countryImage": "",
//       "pronunciationLink": "",
//       "wrongName1": "Mario Draghi",
//       "wrongName2": "Boris Johnson",
//       "wrongName3": "Emmanuel Macron"
//     }
//   ]
  
      
  
]
