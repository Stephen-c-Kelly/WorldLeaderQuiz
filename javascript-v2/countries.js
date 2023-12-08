// 12.2 export data from chatGPT - https://chat.openai.com/share/1dc2e9b7-1cc6-4003-b371-928c6c544f3d

// test contries contains 2 objects for 2 different regions. 
export const TEST_COUNTRIES = [
  // #1 europe test country
  {
    question: "Europe Who is the leader of Test country #1?",
    answers: [
      { text: "Jay Garrick 1", isCorrect: false },
      { text: "Barry Allen", isCorrect: false },
      { text: "First Last", isCorrect: true },
      { text: "Wally West", isCorrect: false }
    ],
    countryDetails: {
      countryName: "scotland",
      leaderName: "Emmanuel Macron",
      assumedOfficeDate: "May 14, 2017",
      flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
      nationalBird: "Gallic Rooster",
      mostRecentAnnualGDP: "2.8 trillion USD",
      globalRegion: "Europe",
      countryImage: "",
      pronunciationLink: ""
    }
  },
// #2 europe test country
{
    question: "Europe Who is the leader of Test country #2?",
    answers: [
      { text: "Alan Scott 2", isCorrect: false },
      { text: "First Correct Last", isCorrect: true },
      { text: "Carol Ferris", isCorrect: false },
      { text: "Jessica Cruz", isCorrect: false }
    ],
    countryDetails: {
      countryName: "wales",
      leaderName: "Emmanuel Macron",
      assumedOfficeDate: "May 14, 2017",
      flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
      nationalBird: "Gallic Rooster",
      mostRecentAnnualGDP: "2.8 trillion USD",
      globalRegion: "Europe",
      countryImage: "",
      pronunciationLink: ""
    }
  },
  // #1 test asia country
  {
    question: "Asia  Who is the leader of Test country #1?",
    answers: [
      { text: "Jay Garrick 1", isCorrect: false },
      { text: "Barry Allen", isCorrect: false },
      { text: "First Last", isCorrect: true },
      { text: "Wally West", isCorrect: false }
    ],
    countryDetails: {
      countryName: "scotland",
      leaderName: "Emmanuel Macron",
      assumedOfficeDate: "May 14, 2017",
      flag: "🏴󠁧󠁢󠁳󠁣󠁴󠁿",
      nationalBird: "Gallic Rooster",
      mostRecentAnnualGDP: "2.8 trillion USD",
      globalRegion: "Asia",
      countryImage: "",
      pronunciationLink: ""
    }
  },
   // #2 test asia country
{
    question: "Asia Who is the leader of Test country #2?",
    answers: [
      { text: "Alan Scott 2", isCorrect: false },
      { text: "First Correct Last", isCorrect: true },
      { text: "Carol Ferris", isCorrect: false },
      { text: "Jessica Cruz", isCorrect: false }
    ],
    countryDetails: {
      countryName: "wales",
      leaderName: "Emmanuel Macron",
      assumedOfficeDate: "May 14, 2017",
      flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
      nationalBird: "Gallic Rooster",
      mostRecentAnnualGDP: "2.8 trillion USD",
      globalRegion: "Asia",
      countryImage: "",
      pronunciationLink: ""
    }
  }
]

export const ALL_COUNTRIES = [
  // 2. France
  {
    question: "Who is the leader of France?",
    answers: [
      { text: "Stefan Löfven", isCorrect: false },
      { text: "Pedro Sánchez", isCorrect: false },
      { text: "Emmanuel Macron", isCorrect: true },
      { text: "Vladimir Putin", isCorrect: false }
    ],
    countryDetails: {
      countryName: "France",
      leaderName: "Emmanuel Macron",
      assumedOfficeDate: "May 14, 2017",
      flag: "🇫🇷",
      nationalBird: "Gallic Rooster",
      mostRecentAnnualGDP: "2.8 trillion USD",
      globalRegion: "Europe",
      countryImage: "",
      pronunciationLink: ""
    }
  },
  
  // 3. United Kingdom
  {
    question: "Who is the leader of the United Kingdom?",
    answers: [
      { text: "Olaf Scholz", isCorrect: false },
      { text: "Mark Rutte", isCorrect: false },
      { text: "Boris Johnson", isCorrect: true },
      { text: "Mario Draghi", isCorrect: false }
    ],
    countryDetails: {
      countryName: "United Kingdom",
      leaderName: "Boris Johnson",
      assumedOfficeDate: "July 24, 2019",
      flag: "🇬🇧",
      nationalBird: "European Robin",
      mostRecentAnnualGDP: "2.9 trillion USD",
      globalRegion: "Europe",
      countryImage: "",
      pronunciationLink: ""
    }
  },
  
  // 4. Italy
  {
    question: "Who is the leader of Italy?",
    answers: [
      { text: "Boris Johnson", isCorrect: false },
      { text: "Angela Merkel", isCorrect: false },
      { text: "Emmanuel Macron", isCorrect: false },
      { text: "Mario Draghi", isCorrect: true }
    ],
    countryDetails: {
      countryName: "Italy",
      leaderName: "Mario Draghi",
      assumedOfficeDate: "February 13, 2021",
      flag: "🇮🇹",
      nationalBird: "Italian Sparrow",
      mostRecentAnnualGDP: "2.2 trillion USD",
      globalRegion: "Europe",
      countryImage: "",
      pronunciationLink: ""
    }
  },
  
  // 5. Spain
  {
    question: "Who is the leader of Spain?",
    answers: [
      { text: "Guy Parmelin", isCorrect: false },
      { text: "Stefan Löfven", isCorrect: false },
      { text: "Angela Merkel", isCorrect: false },
      { text: "Pedro Sánchez", isCorrect: true }
    ],
    countryDetails: {
      countryName: "Spain",
      leaderName: "Pedro Sánchez",
      assumedOfficeDate: "June 2, 2018",
      flag: "🇪🇸",
      nationalBird: "Spanish Imperial Eagle",
      mostRecentAnnualGDP: "1.4 trillion USD",
      globalRegion: "Europe",
      countryImage: "",
      pronunciationLink: ""
    }
  },

// 6. Russia
{
  question: "Who is the leader of Russia?",
  answers: [
    { text: "Emmanuel Macron", isCorrect: false },
    { text: "Pedro Sánchez", isCorrect: false },
    { text: "Stefan Löfven", isCorrect: false },
    { text: "Vladimir Putin", isCorrect: true }
  ],
  countryDetails: {
    countryName: "Russia",
    leaderName: "Vladimir Putin",
    assumedOfficeDate: "May 7, 2012",
    flag: "🇷🇺",
    nationalBird: "Golden Eagle",
    mostRecentAnnualGDP: "1.5 trillion USD",
    globalRegion: "Europe",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 7. Netherlands
{
  question: "Who is the leader of the Netherlands?",
  answers: [
    { text: "Boris Johnson", isCorrect: false },
    { text: "Angela Merkel", isCorrect: false },
    { text: "Mark Rutte", isCorrect: true },
    { text: "Olaf Scholz", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Netherlands",
    leaderName: "Mark Rutte",
    assumedOfficeDate: "October 14, 2010",
    flag: "🇳🇱",
    nationalBird: "European Goldfinch",
    mostRecentAnnualGDP: "1.0 trillion USD",
    globalRegion: "Europe",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 8. Switzerland
{
  question: "Who is the leader of Switzerland?",
  answers: [
    { text: "Mario Draghi", isCorrect: false },
    { text: "Boris Johnson", isCorrect: false },
    { text: "Emmanuel Macron", isCorrect: false },
    { text: "Guy Parmelin", isCorrect: true }
  ],
  countryDetails: {
    countryName: "Switzerland",
    leaderName: "Guy Parmelin",
    assumedOfficeDate: "January 1, 2021",
    flag: "🇨🇭",
    nationalBird: "Common Blackbird",
    mostRecentAnnualGDP: "0.7 trillion USD",
    globalRegion: "Europe",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 9. Sweden
{
  question: "Who is the leader of Sweden?",
  answers: [
    { text: "Pedro Sánchez", isCorrect: false },
    { text: "Vladimir Putin", isCorrect: false },
    { text: "Guy Parmelin", isCorrect: false },
    { text: "Stefan Löfven", isCorrect: true }
  ],
  countryDetails: {
    countryName: "Sweden",
    leaderName: "Stefan Löfven",
    assumedOfficeDate: "October 3, 2014",
    flag: "🇸🇪",
    nationalBird: "Common Blackbird",
    mostRecentAnnualGDP: "0.6 trillion USD",
    globalRegion: "Europe",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 10. Poland
{
  question: "Who is the leader of Poland?",
  answers: [
    { text: "Olaf Scholz", isCorrect: false },
    { text: "Mark Rutte", isCorrect: false },
    { text: "Angela Merkel", isCorrect: false },
    { text: "Mateusz Morawiecki", isCorrect: true }
  ],
  countryDetails: {
    countryName: "Poland",
    leaderName: "Mateusz Morawiecki",
    assumedOfficeDate: "December 11, 2017",
    flag: "🇵🇱",
    nationalBird: "White-tailed Eagle",
    mostRecentAnnualGDP: "0.6 trillion USD",
    globalRegion: "Europe",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 11. Greece
{
  question: "Who is the leader of Greece?",
  answers: [
    { text: "Pedro Sánchez", isCorrect: false },
    { text: "Mario Draghi", isCorrect: false },
    { text: "Stefan Löfven", isCorrect: false },
    { text: "Kyriakos Mitsotakis", isCorrect: true }
  ],
  countryDetails: {
    countryName: "Greece",
    leaderName: "Kyriakos Mitsotakis",
    assumedOfficeDate: "July 8, 2019",
    flag: "🇬🇷",
    nationalBird: "Common Nightingale",
    mostRecentAnnualGDP: "0.2 trillion USD",
    globalRegion: "Europe",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 12. Portugal
{
  question: "Who is the leader of Portugal?",
  answers: [
    { text: "Boris Johnson", isCorrect: false },
    { text: "Guy Parmelin", isCorrect: false },
    { text: "Emmanuel Macron", isCorrect: false },
    { text: "António Costa", isCorrect: true }
  ],
  countryDetails: {
    countryName: "Portugal",
    leaderName: "António Costa",
    assumedOfficeDate: "October 26, 2019",
    flag: "🇵🇹",
    nationalBird: "Common Serin",
    mostRecentAnnualGDP: "0.2 trillion USD",
    globalRegion: "Europe",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 13. Norway
{
  question: "Who is the leader of Norway?",
  answers: [
    { text: "Stefan Löfven", isCorrect: false },
    { text: "Pedro Sánchez", isCorrect: false },
    { text: "Vladimir Putin", isCorrect: false },
    { text: "Erna Solberg", isCorrect: true }
  ],
  countryDetails: {
    countryName: "Norway",
    leaderName: "Erna Solberg",
    assumedOfficeDate: "October 16, 2013",
    flag: "🇳🇴",
    nationalBird: "White-throated Dipper",
    mostRecentAnnualGDP: "0.4 trillion USD",
    globalRegion: "Europe",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 14. Denmark
{
  question: "Who is the leader of Denmark?",
  answers: [
    { text: "Olaf Scholz", isCorrect: false },
    { text: "Mark Rutte", isCorrect: false },
    { text: "Angela Merkel", isCorrect: false },
    { text: "Mette Frederiksen", isCorrect: true }
  ],
  countryDetails: {
    countryName: "Denmark",
    leaderName: "Mette Frederiksen",
    assumedOfficeDate: "June 28, 2019",
    flag: "🇩🇰",
    nationalBird: "Mute Swan",
    mostRecentAnnualGDP: "0.4 trillion USD",
    globalRegion: "Europe",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 15. Finland
{
  question: "Who is the leader of Finland?",
  answers: [
    { text: "Mario Draghi", isCorrect: false },
    { text: "Boris Johnson", isCorrect: false },
    { text: "Emmanuel Macron", isCorrect: false },
    { text: "Sanna Marin", isCorrect: true }
  ],
  countryDetails: {
    countryName: "Finland",
    leaderName: "Sanna Marin",
    assumedOfficeDate: "December 10, 2019",
    flag: "🇫🇮",
    nationalBird: "Whooper Swan",
    mostRecentAnnualGDP: "0.3 trillion USD",
    globalRegion: "Europe",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 16. Austria
{
  question: "Who is the leader of Austria?",
  answers: [
    { text: "Pedro Sánchez", isCorrect: false },
    { text: "Guy Parmelin", isCorrect: false },
    { text: "Stefan Löfven", isCorrect: false },
    { text: "Sebastian Kurz", isCorrect: true }
  ],
  countryDetails: {
    countryName: "Austria",
    leaderName: "Sebastian Kurz",
    assumedOfficeDate: "December 18, 2017",
    flag: "🇦🇹",
    nationalBird: "Eurasian Blackbird",
    mostRecentAnnualGDP: "0.4 trillion USD",
    globalRegion: "Europe",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 17. Belgium
{
  question: "Who is the leader of Belgium?",
  answers: [
    { text: "Emmanuel Macron", isCorrect: false },
    { text: "Olaf Scholz", isCorrect: false },
    { text: "Mark Rutte", isCorrect: false },
    { text: "Alexander De Croo", isCorrect: true }
  ],
  countryDetails: {
    countryName: "Belgium",
    leaderName: "Alexander De Croo",
    assumedOfficeDate: "October 1, 2020",
    flag: "🇧🇪",
    nationalBird: "European Robin",
    mostRecentAnnualGDP: "0.5 trillion USD",
    globalRegion: "Europe",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 18. Czech Republic
{
  question: "Who is the leader of the Czech Republic?",
  answers: [
    { text: "Vladimir Putin", isCorrect: false },
    { text: "Stefan Löfven", isCorrect: false },
    { text: "Pedro Sánchez", isCorrect: false },
    { text: "Andrej Babiš", isCorrect: true }
  ],
  countryDetails: {
    countryName: "Czech Republic",
    leaderName: "Andrej Babiš",
    assumedOfficeDate: "December 6, 2017",
    flag: "🇨🇿",
    nationalBird: "Common Nightingale",
    mostRecentAnnualGDP: "0.2 trillion USD",
    globalRegion: "Europe",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 19. Bulgaria
{
  question: "Who is the leader of Bulgaria?",
  answers: [
    { text: "Mario Draghi", isCorrect: false },
    { text: "Boris Johnson", isCorrect: false },
    { text: "Emmanuel Macron", isCorrect: false },
    { text: "Stefan Yanev", isCorrect: true }
  ],
  countryDetails: {
    countryName: "Bulgaria",
    leaderName: "Stefan Yanev",
    assumedOfficeDate: "May 12, 2021",
    flag: "🇧🇬",
    nationalBird: "Common Nightingale",
    mostRecentAnnualGDP: "0.1 trillion USD",
    globalRegion: "Europe",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 20. Hungary
{
  question: "Who is the leader of Hungary?",
  answers: [
    { text: "Pedro Sánchez", isCorrect: false },
    { text: "Emmanuel Macron", isCorrect: false },
    { text: "Viktor Orbán", isCorrect: true },
    { text: "Stefan Löfven", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Hungary",
    leaderName: "Viktor Orbán",
    assumedOfficeDate: "May 29, 2010",
    flag: "🇭🇺",
    nationalBird: "European Goldfinch",
    mostRecentAnnualGDP: "0.6 trillion USD",
    globalRegion: "Europe",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 21. Belarus
{
  question: "Who is the leader of Belarus?",
  answers: [
    { text: "Vladimir Putin", isCorrect: true },
    // added a joke that marks this as a correct answer in addition to the real correct answer. This a nod to Lukashenko's cozy relationship with Putin.
    { text: "Angela Merkel", isCorrect: false },
    { text: "Alexander Lukashenko", isCorrect: true },
    { text: "Emmanuel Macron", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Belarus",
    leaderName: "Alexander Lukashenko",
    assumedOfficeDate: "July 20, 1994",
    flag: "🇧🇾",
    nationalBird: "White Stork",
    mostRecentAnnualGDP: "0.6 trillion USD",
    globalRegion: "Europe",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 22. Romania
{
  question: "Who is the leader of Romania?",
  answers: [
    { text: "Boris Johnson", isCorrect: false },
    { text: "Angela Merkel", isCorrect: false },
    { text: "Klaus Iohannis", isCorrect: true },
    { text: "Mario Draghi", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Romania",
    leaderName: "Klaus Iohannis",
    assumedOfficeDate: "December 21, 2014",
    flag: "🇷🇴",
    nationalBird: "Common Raven",
    mostRecentAnnualGDP: "0.2 trillion USD",
    globalRegion: "Europe",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 23. Ireland
{
  question: "Who is the leader of Ireland?",
  answers: [
    { text: "Emmanuel Macron", isCorrect: false },
    { text: "Micheál Martin", isCorrect: true },
    { text: "Stefan Löfven", isCorrect: false },
    { text: "Pedro Sánchez", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Ireland",
    leaderName: "Micheál Martin",
    assumedOfficeDate: "June 27, 2020",
    flag: "🇮🇪",
    nationalBird: "European Robin",
    mostRecentAnnualGDP: "0.4 trillion USD",
    globalRegion: "Europe",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 24. Croatia
{
  question: "Who is the leader of Croatia?",
  answers: [
    { text: "Angela Merkel", isCorrect: false },
    { text: "Andrej Plenković", isCorrect: true },
    { text: "Mark Rutte", isCorrect: false },
    { text: "Boris Johnson", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Croatia",
    leaderName: "Andrej Plenković",
    assumedOfficeDate: "October 19, 2016",
    flag: "🇭🇷",
    nationalBird: "Common Nightingale",
    mostRecentAnnualGDP: "0.6 trillion USD",
    globalRegion: "Europe",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 25. Slovakia
{
  question: "Who is the leader of Slovakia?",
  answers: [
    { text: "Pedro Sánchez", isCorrect: false },
    { text: "Igor Matovič", isCorrect: true },
    { text: "Emmanuel Macron", isCorrect: false },
    { text: "Vladimir Putin", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Slovakia",
    leaderName: "Igor Matovič",
    assumedOfficeDate: "March 21, 2020",
    flag: "🇸🇰",
    nationalBird: "European Bee-eater",
    mostRecentAnnualGDP: "0.1 trillion USD",
    globalRegion: "Europe",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 26. Ukraine
{
  question: "Who is the leader of Ukraine?",
  answers: [
    { text: "Volodymyr Zelensky", isCorrect: true },
    { text: "Angela Merkel", isCorrect: false },
    { text: "Boris Johnson", isCorrect: false },
    { text: "Emmanuel Macron", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Ukraine",
    leaderName: "Volodymyr Zelensky",
    assumedOfficeDate: "May 20, 2019",
    flag: "🇺🇦",
    nationalBird: "Common Nightingale",
    mostRecentAnnualGDP: "0.5 trillion USD",
    globalRegion: "Europe",
    countryImage: "",
    pronunciationLink: ""
  }
},



// ----------------- Asia -------------------

// 1. China
{
  question: "Who is the leader of China?",
  answers: [
    { text: "Xi Jinping", isCorrect: true },
    { text: "Li Keqiang", isCorrect: false },
    { text: "Wang Qishan", isCorrect: false },
    { text: "Li Zhanshu", isCorrect: false }
  ],
  countryDetails: {
    countryName: "China",
    leaderName: "Xi Jinping",
    assumedOfficeDate: "March 14, 2013",
    flag: "🇨🇳",
    nationalBird: "Red-crowned Crane",
    mostRecentAnnualGDP: "16.4 trillion USD",
    globalRegion: "Asia",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 2. India
{
  question: "Who is the leader of India?",
  answers: [
    { text: "Narendra Modi", isCorrect: true },
    { text: "Amit Shah", isCorrect: false },
    { text: "Rajnath Singh", isCorrect: false },
    { text: "Ram Nath Kovind", isCorrect: false }
  ],
  countryDetails: {
    countryName: "India",
    leaderName: "Narendra Modi",
    assumedOfficeDate: "May 26, 2014",
    flag: "🇮🇳",
    nationalBird: "Indian Peafowl",
    mostRecentAnnualGDP: "2.9 trillion USD",
    globalRegion: "Asia",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 3. Japan
{
  question: "Who is the current Prime Minister of Japan?",
  answers: [
    { text: "Fumio Kishida", isCorrect: true },
    { text: "Yoshihide Suga", isCorrect: false },
    { text: "Shinzo Abe", isCorrect: false },
    { text: "Taro Kono", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Japan",
    leaderName: "Fumio Kishida",
    assumedOfficeDate: "October 4, 2021",
    flag: "🇯🇵",
    nationalBird: "Green Pheasant",
    mostRecentAnnualGDP: "4.9 trillion USD",
    globalRegion: "East Asia",
    countryImage: "",
    pronunciationLink: ""
  }
},


// 4. South Korea
  {
    question: "Who is the leader of South Korea?",
    answers: [
      { text: "Yoon Suk-yeol", isCorrect: true },
      { text: "Moon Jae-in", isCorrect: false },
      { text: "Lee Nak-yon", isCorrect: false },
      { text: "Park Geun-hye", isCorrect: false }
    ],
    countryDetails: {
      countryName: "South Korea",
      leaderName: "Yoon Suk-yeol",
      assumedOfficeDate: "May 10, 2022",
      flag: "🇰🇷",
      nationalBird: "Korean Magpie",
      mostRecentAnnualGDP: "1.8 trillion USD",
      globalRegion: "Asia",
      countryImage: "",
      pronunciationLink: ""
    }
  },

// 5. Thailand
{
  question: "Who is the leader of Thailand?",
  answers: [
    { text: "Prayuth Chan-o-cha", isCorrect: true },
    { text: "Somdet Phra Maha Vajiralongkorn", isCorrect: false },
    { text: "Anutin Charnvirakul", isCorrect: false },
    { text: "Prawit Wongsuwan", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Thailand",
    leaderName: "Prayuth Chan-o-cha",
    assumedOfficeDate: "August 24, 2014",
    flag: "🇹🇭",
    nationalBird: "Red-whiskered Bulbul",
    mostRecentAnnualGDP: "0.5 trillion USD",
    globalRegion: "Asia",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 6. Vietnam
{
  question: "Who is the leader of Vietnam?",
  answers: [
    { text: "Nguyen Phu Trong", isCorrect: true },
    { text: "Nguyen Xuan Phuc", isCorrect: false },
    { text: "Tran Dai Quang", isCorrect: false },
    { text: "Nguyen Tan Dung", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Vietnam",
    leaderName: "Nguyen Phu Trong",
    assumedOfficeDate: "October 23, 2018",
    flag: "🇻🇳",
    nationalBird: "Red-vented Bulbul",
    mostRecentAnnualGDP: "0.3 trillion USD",
    globalRegion: "Asia",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 7. Indonesia
{
  question: "Who is the leader of Indonesia?",
  answers: [
    { text: "Joko Widodo", isCorrect: true },
    { text: "Prabowo Subianto", isCorrect: false },
    { text: "Susilo Bambang Yudhoyono", isCorrect: false },
    { text: "Megawati Sukarnoputri", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Indonesia",
    leaderName: "Joko Widodo",
    assumedOfficeDate: "October 20, 2014",
    flag: "🇮🇩",
    nationalBird: "Javan Hawk-Eagle",
    mostRecentAnnualGDP: "1.1 trillion USD",
    globalRegion: "Asia",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 8. Malaysia
{
  question: "Who is the leader of Malaysia?",
  answers: [
    { text: "Ismail Sabri Yaakob", isCorrect: true },
    { text: "Muhyiddin Yassin", isCorrect: false },
    { text: "Mahathir Mohamad", isCorrect: false },
    { text: "Abdullah Ahmad Badawi", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Malaysia",
    leaderName: "Ismail Sabri Yaakob",
    assumedOfficeDate: "August 21, 2021",
    flag: "🇲🇾",
    nationalBird: "Rhinoceros Hornbill",
    mostRecentAnnualGDP: "0.4 trillion USD",
    globalRegion: "Asia",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 9. Pakistan
{
  question: "Who is the leader of Pakistan?",
  answers: [
    { text: "Imran Khan", isCorrect: true },
    { text: "Asif Ali Zardari", isCorrect: false },
    { text: "Nawaz Sharif", isCorrect: false },
    { text: "Pervez Musharraf", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Pakistan",
    leaderName: "Imran Khan",
    assumedOfficeDate: "August 18, 2018",
    flag: "🇵🇰",
    nationalBird: "Chukar Partridge",
    mostRecentAnnualGDP: "0.3 trillion USD",
    globalRegion: "Asia",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 10. Philippines
{
  question: "Who is the leader of the Philippines?",
  answers: [
    { text: "Rodrigo Duterte", isCorrect: true },
    { text: "Benigno Aquino III", isCorrect: false },
    { text: "Gloria Macapagal-Arroyo", isCorrect: false },
    { text: "Joseph Estrada", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Philippines",
    leaderName: "Rodrigo Duterte",
    assumedOfficeDate: "June 30, 2016",
    flag: "🇵🇭",
    nationalBird: "Philippine Eagle",
    mostRecentAnnualGDP: "0.4 trillion USD",
    globalRegion: "Asia",
    countryImage: "",
    pronunciationLink: ""
  }
},



// ----------------- North & Central America -------------------
// 1. United States
{
  question: "Who is the leader of the United States?",
  answers: [
    { text: "Joe Biden", isCorrect: true },
    { text: "Jocelyn B. Burdick", isCorrect: false },
    { text: "John Davis", isCorrect: false },
    { text: "Alexis Herman", isCorrect: false }
  ],
  countryDetails: {
    countryName: "United States",
    leaderName: "Joe Biden",
    assumedOfficeDate: "January 20, 2021",
    flag: "🇺🇸",
    nationalBird: "Bald Eagle",
    mostRecentAnnualGDP: "21.4 trillion USD",
    globalRegion: "North & Central America",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 2. Canada
{
  question: "Who is the leader of Canada?",
  answers: [
    { text: "Justin Trudeau", isCorrect: true },
    { text: "Stephen Harper", isCorrect: false },
    { text: "Paul Martin", isCorrect: false },
    { text: "Jean Chrétien", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Canada",
    leaderName: "Justin Trudeau",
    assumedOfficeDate: "November 4, 2015",
    flag: "🇨🇦",
    nationalBird: "Common Loon",
    mostRecentAnnualGDP: "1.8 trillion USD",
    globalRegion: "North & Central America",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 3. Mexico
{
  question: "Who is the leader of Mexico?",
  answers: [
    { text: "Andrés Manuel López Obrador", isCorrect: true },
    { text: "Enrique Peña Nieto", isCorrect: false },
    { text: "Felipe Calderón", isCorrect: false },
    { text: "Vicente Fox", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Mexico",
    leaderName: "Andrés Manuel López Obrador",
    assumedOfficeDate: "December 1, 2018",
    flag: "🇲🇽",
    nationalBird: "Golden Eagle",
    mostRecentAnnualGDP: "1.3 trillion USD",
    globalRegion: "North & Central America",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 4. Guatemala
{
  question: "Who is the leader of Guatemala?",
  answers: [
    { text: "Alejandro Giammattei", isCorrect: true },
    { text: "Jimmy Morales", isCorrect: false },
    { text: "Otto Pérez Molina", isCorrect: false },
    { text: "Alvaro Colom", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Guatemala",
    leaderName: "Alejandro Giammattei",
    assumedOfficeDate: "January 14, 2020",
    flag: "🇬🇹",
    nationalBird: "Resplendent Quetzal",
    mostRecentAnnualGDP: "0.8 trillion USD",
    globalRegion: "North & Central America",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 5. Honduras
{
  question: "Who is the leader of Honduras?",
  answers: [
    { text: "Juan Orlando Hernández", isCorrect: true },
    { text: "Porfirio Lobo", isCorrect: false },
    { text: "Manuel Zelaya", isCorrect: false },
    { text: "Ricardo Maduro", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Honduras",
    leaderName: "Juan Orlando Hernández",
    assumedOfficeDate: "January 27, 2014",
    flag: "🇭🇳",
    nationalBird: "Scarlet Macaw",
    mostRecentAnnualGDP: "0.2 trillion USD",
    globalRegion: "North & Central America",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 6. El Salvador
{
  question: "Who is the leader of El Salvador?",
  answers: [
    { text: "Nayib Bukele", isCorrect: true },
    { text: "Salvador Sánchez Cerén", isCorrect: false },
    { text: "Mauricio Funes", isCorrect: false },
    { text: "Elías Antonio Saca", isCorrect: false }
  ],
  countryDetails: {
    countryName: "El Salvador",
    leaderName: "Nayib Bukele",
    assumedOfficeDate: "June 1, 2019",
    flag: "🇸🇻",
    nationalBird: "Torogoz",
    mostRecentAnnualGDP: "0.2 trillion USD",
    globalRegion: "North & Central America",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 7. Nicaragua
{
  question: "Who is the leader of Nicaragua?",
  answers: [
    { text: "Daniel Ortega", isCorrect: true },
    { text: "Enrique Bolaños", isCorrect: false },
    { text: "Arnoldo Alemán", isCorrect: false },
    { text: "Violeta Chamorro", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Nicaragua",
    leaderName: "Daniel Ortega",
    assumedOfficeDate: "January 10, 2007",
    flag: "🇳🇮",
    nationalBird: "Turquoise-browed Motmot",
    mostRecentAnnualGDP: "0.1 trillion USD",
    globalRegion: "North & Central America",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 8. Costa Rica
{
  question: "Who is the leader of Costa Rica?",
  answers: [
    { text: "Rodrigo Chaves Robles", isCorrect: true },
    { text: "Carlos Alvarado Quesada", isCorrect: false },
    { text: "Laura Chinchilla", isCorrect: false },
    { text: "Oscar Arias Sanchez", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Costa Rica",
    leaderName: "Rodrigo Chaves Robles",
    assumedOfficeDate: "May 8, 2022",
    flag: "🇨🇷",
    nationalBird: "Clay-Colored Thrush",
    mostRecentAnnualGDP: "58.8 billion USD",
    globalRegion: "North & Central America",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 9. Panama
{
  question: "Who is the leader of Panama?",
  answers: [
    { text: "Laurentino Cortizo", isCorrect: true },
    { text: "Juan Carlos Varela", isCorrect: false },
    { text: "Ricardo Martinelli", isCorrect: false },
    { text: "Martín Torrijos", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Panama",
    leaderName: "Laurentino Cortizo",
    assumedOfficeDate: "July 1, 2019",
    flag: "🇵🇦",
    nationalBird: "Harpy Eagle",
    mostRecentAnnualGDP: "0.1 trillion USD",
    globalRegion: "North & Central America",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 10. Belize
{
  question: "Who is the leader of Belize?",
  answers: [
    { text: "Johnny Briceño", isCorrect: true },
    { text: "Dean Barrow", isCorrect: false },
    { text: "Said Musa", isCorrect: false },
    { text: "Manuel Esquivel", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Belize",
    leaderName: "Johnny Briceño",
    assumedOfficeDate: "November 11, 2020",
    flag: "🇧🇿",
    nationalBird: "Keel-billed Toucan",
    mostRecentAnnualGDP: "0.1 trillion USD",
    globalRegion: "North & Central America",
    countryImage: "",
    pronunciationLink: ""
  }
},
// ----------------- South America -------------------

// 1. Brazil with updated leader information
{
  question: "Who is the leader of Brazil?",
  answers: [
  { text: "Jair Bolsonaro", isCorrect: false },
  { text: "Dilma Rousseff", isCorrect: false },
  { text: "Michel Temer", isCorrect: false },
  { text: "Luiz Inácio Lula da Silva", isCorrect: true }
  ],
  countryDetails: {
  countryName: "Brazil",
  leaderName: "Luiz Inácio Lula da Silva",
  assumedOfficeDate: "January 1, 2023",
  flag: "🇧🇷",
  nationalBird: "Saffron Finch",
  mostRecentAnnualGDP: "1.4 trillion USD",
  globalRegion: "South America",
  countryImage: "",
  pronunciationLink: ""
  }
  },

// 2. Argentina
{
  question: "Who is the leader of Argentina?",
  answers: [
    { text: "Alberto Fernández", isCorrect: true },
    { text: "Mauricio Macri", isCorrect: false },
    { text: "Cristina Fernández de Kirchner", isCorrect: false },
    { text: "Néstor Kirchner", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Argentina",
    leaderName: "Alberto Fernández",
    assumedOfficeDate: "December 10, 2019",
    flag: "🇦🇷",
    nationalBird: "Rufous Hornero",
    mostRecentAnnualGDP: "0.4 trillion USD",
    globalRegion: "South America",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 3. Colombia
{
  question: "Who is the leader of Colombia?",
  answers: [
    { text: "Gustavo Petro", isCorrect: true },
    { text: "Iván Duque Márquez", isCorrect: false },
    { text: "Juan Manuel Santos", isCorrect: false },
    { text: "Álvaro Uribe Vélez", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Colombia",
    leaderName: "Gustavo Petro",
    assumedOfficeDate: "August 7, 2022",
    flag: "🇨🇴",
    nationalBird: "Andean Condor",
    mostRecentAnnualGDP: "371.4 billion USD",
    globalRegion: "South America",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 4. Peru
{
  question: "Who is the leader of Peru?",
  answers: [
    { text: "Pedro Castillo", isCorrect: true },
    { text: "Francisco Sagasti", isCorrect: false },
    { text: "Manuel Merino", isCorrect: false },
    { text: "Martín Vizcarra", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Peru",
    leaderName: "Pedro Castillo",
    assumedOfficeDate: "July 28, 2021",
    flag: "🇵🇪",
    nationalBird: "Andean Cock-of-the-rock",
    mostRecentAnnualGDP: "0.2 trillion USD",
    globalRegion: "South America",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 5. Venezuela
{
  question: "Who is the leader of Venezuela?",
  answers: [
    { text: "Nicolás Maduro", isCorrect: true },
    { text: "Juan Guaidó", isCorrect: false },
    { text: "Hugo Chávez", isCorrect: false },
    { text: "Rafael Caldera", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Venezuela",
    leaderName: "Nicolás Maduro",
    assumedOfficeDate: "April 19, 2013",
    flag: "🇻🇪",
    nationalBird: "Venezuelan Troupial",
    mostRecentAnnualGDP: "0.1 trillion USD",
    globalRegion: "South America",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 6. Chile
{
  question: "Who is the leader of Chile?",
  answers: [
    { text: "Gabriel Boric", isCorrect: true },
    { text: "Sebastián Piñera", isCorrect: false },
    { text: "Michelle Bachelet", isCorrect: false },
    { text: "Ricardo Lagos", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Chile",
    leaderName: "Gabriel Boric",
    assumedOfficeDate: "March 11, 2022",
    flag: "🇨🇱",
    nationalBird: "Andean Condor",
    mostRecentAnnualGDP: "283.9 billion USD",
    globalRegion: "South America",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 7. Ecuador
{
  question: "Who is the leader of Ecuador?",
  answers: [
    { text: "Guillermo Lasso", isCorrect: true },
    { text: "Lenín Moreno", isCorrect: false },
    { text: "Rafael Correa", isCorrect: false },
    { text: "Lucio Gutiérrez", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Ecuador",
    leaderName: "Guillermo Lasso",
    assumedOfficeDate: "May 24, 2021",
    flag: "🇪🇨",
    nationalBird: "Andean Condor",
    mostRecentAnnualGDP: "0.2 trillion USD",
    globalRegion: "South America",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 8. Bolivia
{
  question: "Who is the leader of Bolivia?",
  answers: [
    { text: "Luis Arce", isCorrect: true },
    { text: "Jeanine Áñez", isCorrect: false },
    { text: "Evo Morales", isCorrect: false },
    { text: "Carlos Mesa", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Bolivia",
    leaderName: "Luis Arce",
    assumedOfficeDate: "November 8, 2020",
    flag: "🇧🇴",
    nationalBird: "Andean Condor",
    mostRecentAnnualGDP: "0.1 trillion USD",
    globalRegion: "South America",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 9. Paraguay
{
  question: "Who is the leader of Paraguay?",
  answers: [
    { text: "Mario Abdo Benítez", isCorrect: true },
    { text: "Horacio Cartes", isCorrect: false },
    { text: "Fernando Lugo", isCorrect: false },
    { text: "Nicanor Duarte Frutos", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Paraguay",
    leaderName: "Mario Abdo Benítez",
    assumedOfficeDate: "August 15, 2018",
    flag: "🇵🇾",
    nationalBird: "Yellow-billed Cardinal",
    mostRecentAnnualGDP: "0.1 trillion USD",
    globalRegion: "South America",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 10. Uruguay
{
  question: "Who is the leader of Uruguay?",
  answers: [
    { text: "Luis Lacalle Pou", isCorrect: true },
    { text: "Tabaré Vázquez", isCorrect: false },
    { text: "José Mujica", isCorrect: false },
    { text: "Luis Alberto Lacalle", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Uruguay",
    leaderName: "Luis Lacalle Pou",
    assumedOfficeDate: "March 1, 2020",
    flag: "🇺🇾",
    nationalBird: "Southern Lapwing",
    mostRecentAnnualGDP: "0.1 trillion USD",
    globalRegion: "South America",
    countryImage: "",
    pronunciationLink: ""
  }
},

// ----------------- Oceania ------------------
// 1. Australia
{
  question: "Who is the leader of Australia?",
  answers: [
    { text: "Scott Morrison", isCorrect: true },
    { text: "Malcolm Turnbull", isCorrect: false },
    { text: "Tony Abbott", isCorrect: false },
    { text: "Kevin Rudd", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Australia",
    leaderName: "Scott Morrison",
    assumedOfficeDate: "August 24, 2018",
    flag: "🇦🇺",
    nationalBird: "Emu",
    mostRecentAnnualGDP: "1.4 trillion USD",
    globalRegion: "Oceania",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 2. New Zealand
{
  question: "Who is the leader of New Zealand?",
  answers: [
    { text: "Christopher Luxon", isCorrect: true },
    { text: "Bill English", isCorrect: false },
    { text: "John Key", isCorrect: false },
    { text: "Helen Clark", isCorrect: false }
  ],
  countryDetails: {
    countryName: "New Zealand",
    leaderName: "Christopher Luxon",
    assumedOfficeDate: "November 27, 2023",
    flag: "🇳🇿",
    nationalBird: "Kiwi",
    mostRecentAnnualGDP: "0.2 trillion USD",
    globalRegion: "Oceania",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 3. Papua New Guinea
{
  question: "Who is the leader of Papua New Guinea?",
  answers: [
    { text: "James Marape", isCorrect: true },
    { text: "Peter O'Neill", isCorrect: false },
    { text: "Michael Somare", isCorrect: false },
    { text: "Julius Chan", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Papua New Guinea",
    leaderName: "James Marape",
    assumedOfficeDate: "May 30, 2019",
    flag: "🇵🇬",
    nationalBird: "Raggiana Bird-of-Paradise",
    mostRecentAnnualGDP: "0.3 trillion USD",
    globalRegion: "Oceania",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 4. Fiji
{
  question: "Who is the leader of Fiji?",
  answers: [
    { text: "Frank Bainimarama", isCorrect: true },
    { text: "Laisenia Qarase", isCorrect: false },
    { text: "Mahendra Chaudhry", isCorrect: false },
    { text: "Sitiveni Rabuka", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Fiji",
    leaderName: "Frank Bainimarama",
    assumedOfficeDate: "December 5, 2006",
    flag: "🇫🇯",
    nationalBird: "Fiji Wattled Honeyeater",
    mostRecentAnnualGDP: "0.1 trillion USD",
    globalRegion: "Oceania",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 5. Solomon Islands
{
  question: "Who is the leader of Solomon Islands?",
  answers: [
    { text: "Manasseh Sogavare", isCorrect: true },
    { text: "Rick Houenipwela", isCorrect: false },
    { text: "Gordon Darcy Lilo", isCorrect: false },
    { text: "Danny Philip", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Solomon Islands",
    leaderName: "Manasseh Sogavare",
    assumedOfficeDate: "April 24, 2019",
    flag: "🇸🇧",
    nationalBird: "Collared Kingfisher",
    mostRecentAnnualGDP: "0.01 trillion USD",
    globalRegion: "Oceania",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 6. Vanuatu
{
  question: "Who is the leader of Vanuatu?",
  answers: [
    { text: "Bob Loughman", isCorrect: true },
    { text: "Charlot Salwai", isCorrect: false },
    { text: "Joe Natuman", isCorrect: false },
    { text: "Sato Kilman", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Vanuatu",
    leaderName: "Bob Loughman",
    assumedOfficeDate: "April 20, 2020",
    flag: "🇻🇺",
    nationalBird: "Vanuatu Kingfisher",
    mostRecentAnnualGDP: "0.01 trillion USD",
    globalRegion: "Oceania",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 7. Samoa
{
  question: "Who is the leader of Samoa?",
  answers: [
    { text: "Fiame Naomi Mata'afa", isCorrect: true },
    { text: "Tuilaepa Sa'ilele Malielegaoi", isCorrect: false },
    { text: "Tofilau Eti Alesana", isCorrect: false },
    { text: "Malietoa Tanumafili II", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Samoa",
    leaderName: "Fiame Naomi Mata'afa",
    assumedOfficeDate: "May 24, 2021",
    flag: "🇼🇸",
    nationalBird: "Samoa Flycatcher",
    mostRecentAnnualGDP: "0.1 trillion USD",
    globalRegion: "Oceania",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 8. Tonga
{
  question: "Who is the leader of Tonga?",
  answers: [
    { text: "Pohiva Tu'i'onetoa", isCorrect: true },
    { text: "Akilisi Pohiva", isCorrect: false },
    { text: "Feleti Sevele", isCorrect: false },
    { text: "Prince Tu'ipelehake", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Tonga",
    leaderName: "Pohiva Tu'i'onetoa",
    assumedOfficeDate: "September 27, 2019",
    flag: "🇹🇴",
    nationalBird: "Red-breasted Paradise Kingfisher",
    mostRecentAnnualGDP: "0.01 trillion USD",
    globalRegion: "Oceania",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 9. Tuvalu
{
  question: "Who is the leader of Tuvalu?",
  answers: [
    { text: "Kausea Natano", isCorrect: true },
    { text: "Enele Sopoaga", isCorrect: false },
    { text: "Apisai Ielemia", isCorrect: false },
    { text: "Tomasi Puapua", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Tuvalu",
    leaderName: "Kausea Natano",
    assumedOfficeDate: "September 19, 2019",
    flag: "🇹🇻",
    nationalBird: "Tuvalu Pigeon",
    mostRecentAnnualGDP: "0.001 trillion USD",
    globalRegion: "Oceania",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 10. Nauru
{
  question: "Who is the leader of Nauru?",
  answers: [
    { text: "Lionel Aingimea", isCorrect: true },
    { text: "Baron Waqa", isCorrect: false },
    { text: "Sprent Dabwido", isCorrect: false },
    { text: "Marcus Stephen", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Nauru",
    leaderName: "Lionel Aingimea",
    assumedOfficeDate: "August 27, 2019",
    flag: "🇳🇷",
    nationalBird: "Nauru Reed Warbler",
    mostRecentAnnualGDP: "0.001 trillion USD",
    globalRegion: "Oceania",
    countryImage: "",
    pronunciationLink: ""
  }
},

// --------------Middle East & Africa -----------------

// 1. Saudi Arabia
{
  question: "Who is the leader of Saudi Arabia?",
  answers: [
    { text: "Salman bin Abdulaziz Al Saud", isCorrect: true },
    { text: "Mohammed bin Salman", isCorrect: false },
    { text: "King Fahd", isCorrect: false },
    { text: "King Abdullah", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Saudi Arabia",
    leaderName: "Salman bin Abdulaziz Al Saud",
    assumedOfficeDate: "January 23, 2015",
    flag: "🇸🇦",
    nationalBird: "Falcon",
    mostRecentAnnualGDP: "0.8 trillion USD",
    globalRegion: "Middle East & Africa",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 2. Iran
{
  question: "Who is the leader of Iran?",
  answers: [
    { text: "Ebrahim Raisi", isCorrect: true },
    { text: "Hassan Rouhani", isCorrect: false },
    { text: "Ali Khamenei", isCorrect: false },
    { text: "Mahmoud Ahmadinejad", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Iran",
    leaderName: "Ebrahim Raisi",
    assumedOfficeDate: "August 5, 2021",
    flag: "🇮🇷",
    nationalBird: "Nightingale",
    mostRecentAnnualGDP: "0.7 trillion USD",
    globalRegion: "Middle East & Africa",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 3. Iraq
{
  question: "Who is the leader of Iraq?",
  answers: [
    { text: "Barham Salih", isCorrect: true },
    { text: "Nouri al-Maliki", isCorrect: false },
    { text: "Jalal Talabani", isCorrect: false },
    { text: "Saddam Hussein", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Iraq",
    leaderName: "Barham Salih",
    assumedOfficeDate: "October 2, 2018",
    flag: "🇮🇶",
    nationalBird: "Chukar Partridge",
    mostRecentAnnualGDP: "0.2 trillion USD",
    globalRegion: "Middle East & Africa",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 4. United Arab Emirates
{
  question: "Who is the leader of the United Arab Emirates?",
  answers: [
    { text: "Khalifa bin Zayed Al Nahyan", isCorrect: true },
    { text: "Mohammed bin Rashid Al Maktoum", isCorrect: false },
    { text: "Sheikh Saud bin Saqr Al Qasimi", isCorrect: false },
    { text: "Sheikh Nahyan bin Mubarak Al Nahyan", isCorrect: false }
  ],
  countryDetails: {
    countryName: "United Arab Emirates",
    leaderName: "Khalifa bin Zayed Al Nahyan",
    assumedOfficeDate: "November 3, 2004",
    flag: "🇦🇪",
    nationalBird: "Peregrine Falcon",
    mostRecentAnnualGDP: "0.4 trillion USD",
    globalRegion: "Middle East & Africa",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 5. Qatar
{
  question: "Who is the leader of Qatar?",
  answers: [
    { text: "Tamim bin Hamad Al Thani", isCorrect: true },
    { text: "Hamad bin Khalifa Al Thani", isCorrect: false },
    { text: "Jassim bin Hamad Al Thani", isCorrect: false },
    { text: "Hamad bin Jassim bin Jaber Al Thani", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Qatar",
    leaderName: "Tamim bin Hamad Al Thani",
    assumedOfficeDate: "June 25, 2013",
    flag: "🇶🇦",
    nationalBird: "Falcon",
    mostRecentAnnualGDP: "0.2 trillion USD",
    globalRegion: "Middle East & Africa",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 6. Jordan
{
  question: "Who is the leader of Jordan?",
  answers: [
    { text: "Abdullah II of Jordan", isCorrect: true },
    { text: "Hussein bin Talal", isCorrect: false },
    { text: "Abdullah I of Jordan", isCorrect: false },
    { text: "Talal of Jordan", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Jordan",
    leaderName: "Abdullah II of Jordan",
    assumedOfficeDate: "February 7, 1999",
    flag: "🇯🇴",
    nationalBird: "Sinai Rosefinch",
    mostRecentAnnualGDP: "0.1 trillion USD",
    globalRegion: "Middle East & Africa",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 7. Israel
{
  question: "Who is the leader of Israel?",
  answers: [
    { text: "Naftali Bennett", isCorrect: true },
    { text: "Benjamin Netanyahu", isCorrect: false },
    { text: "Ehud Olmert", isCorrect: false },
    { text: "Ariel Sharon", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Israel",
    leaderName: "Naftali Bennett",
    assumedOfficeDate: "June 13, 2021",
    flag: "🇮🇱",
    nationalBird: "Hoopoe",
    mostRecentAnnualGDP: "0.4 trillion USD",
    globalRegion: "Middle East & Africa",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 8. Turkey
{
  question: "Who is the leader of Turkey?",
  answers: [
    { text: "Recep Tayyip Erdoğan", isCorrect: true },
    { text: "Abdullah Gül", isCorrect: false },
    { text: "Ahmet Davutoğlu", isCorrect: false },
    { text: "Ekrem İmamoğlu", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Turkey",
    leaderName: "Recep Tayyip Erdoğan",
    assumedOfficeDate: "August 28, 2014",
    flag: "🇹🇷",
    nationalBird: "Redwing",
    mostRecentAnnualGDP: "0.9 trillion USD",
    globalRegion: "Middle East & Africa",
    countryImage: "",
    pronunciationLink: ""
  }
},
// 9. South Africa
{
  question: "Who is the leader of South Africa?",
  answers: [
    { text: "Cyril Ramaphosa", isCorrect: true },
    { text: "Jacob Zuma", isCorrect: false },
    { text: "Thabo Mbeki", isCorrect: false },
    { text: "Nelson Mandela", isCorrect: false }
  ],
  countryDetails: {
    countryName: "South Africa",
    leaderName: "Cyril Ramaphosa",
    assumedOfficeDate: "February 15, 2018",
    flag: "🇿🇦",
    nationalBird: "Blue Crane",
    mostRecentAnnualGDP: "0.4 trillion USD",
    globalRegion: "Middle East & Africa",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 10. Nigeria
{
  question: "Who is the leader of Nigeria?",
  answers: [
    { text: "Muhammadu Buhari", isCorrect: true },
    { text: "Goodluck Jonathan", isCorrect: false },
    { text: "Olusegun Obasanjo", isCorrect: false },
    { text: "Yakubu Gowon", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Nigeria",
    leaderName: "Muhammadu Buhari",
    assumedOfficeDate: "May 29, 2015",
    flag: "🇳🇬",
    nationalBird: "Black Crowned Crane",
    mostRecentAnnualGDP: "0.5 trillion USD",
    globalRegion: "Middle East & Africa",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 11. Egypt
{
  question: "Who is the leader of Egypt?",
  answers: [
    { text: "Abdel Fattah el-Sisi", isCorrect: true },
    { text: "Mohamed Morsi", isCorrect: false },
    { text: "Hosni Mubarak", isCorrect: false },
    { text: "Anwar Sadat", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Egypt",
    leaderName: "Abdel Fattah el-Sissi",
    assumedOfficeDate: "June 8, 2014",
    flag: "🇪🇬",
    nationalBird: "Egyptian Vulture",
    mostRecentAnnualGDP: "0.4 trillion USD",
    globalRegion: "Middle East & Africa",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 12. Kenya
{
  question: "Who is the leader of Kenya?",
  answers: [
    { text: "Uhuru Kenyatta", isCorrect: true },
    { text: "Mwai Kibaki", isCorrect: false },
    { text: "Daniel arap Moi", isCorrect: false },
    { text: "Jomo Kenyatta", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Kenya",
    leaderName: "Uhuru Kenyatta",
    assumedOfficeDate: "April 9, 2013",
    flag: "🇰🇪",
    nationalBird: "African Crowned Eagle",
    mostRecentAnnualGDP: "0.1 trillion USD",
    globalRegion: "Middle East & Africa",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 13. Morocco
{
  question: "Who is the leader of Morocco?",
  answers: [
    { text: "Mohammed VI of Morocco", isCorrect: true },
    { text: "Hassan II of Morocco", isCorrect: false },
    { text: "Mohammed V of Morocco", isCorrect: false },
    { text: "Mohammed IV of Morocco", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Morocco",
    leaderName: "Mohammed VI of Morocco",
    assumedOfficeDate: "July 23, 1999",
    flag: "🇲🇦",
    nationalBird: "Bald Ibis",
    mostRecentAnnualGDP: "0.1 trillion USD",
    globalRegion: "Middle East & Africa",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 14. Ethiopia
{
  question: "Who is the leader of Ethiopia?",
  answers: [
    { text: "Abiy Ahmed", isCorrect: true },
    { text: "Hailemariam Desalegn", isCorrect: false },
    { text: "Meles Zenawi", isCorrect: false },
    { text: "Mengistu Haile Mariam", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Ethiopia",
    leaderName: "Abiy Ahmed",
    assumedOfficeDate: "April 2, 2018",
    flag: "🇪🇹",
    nationalBird: "Wattled Ibis",
    mostRecentAnnualGDP: "0.1 trillion USD",
    globalRegion: "Middle East & Africa",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 15. Tanzania
{
  question: "Who is the leader of Tanzania?",
  answers: [
    { text: "Samia Suluhu", isCorrect: true },
    { text: "John Magufuli", isCorrect: false },
    { text: "Jakaya Kikwete", isCorrect: false },
    { text: "Benjamin Mkapa", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Tanzania",
    leaderName: "Samia Suluhu",
    assumedOfficeDate: "March 19, 2021",
    flag: "🇹🇿",
    nationalBird: "African Fish Eagle",
    mostRecentAnnualGDP: "0.1 trillion USD",
    globalRegion: "Middle East & Africa",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 16. Algeria
{
  question: "Who is the leader of Algeria?",
  answers: [
    { text: "Abdelmadjid Tebboune", isCorrect: true },
    { text: "Abdelaziz Bouteflika", isCorrect: false },
    { text: "Liamine Zéroual", isCorrect: false },
    { text: "Chadli Bendjedid", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Algeria",
    leaderName: "Abdelmadjid Tebboune",
    assumedOfficeDate: "December 19, 2019",
    flag: "🇩🇿",
    nationalBird: "Little Swift",
    mostRecentAnnualGDP: "0.2 trillion USD",
    globalRegion: "Middle East & Africa",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 17. Uganda
{
  question: "Who is the leader of Uganda?",
  answers: [
    { text: "Yoweri Museveni", isCorrect: true },
    { text: "Idi Amin", isCorrect: false },
    { text: "Milton Obote", isCorrect: false },
    { text: "Apolo Milton Obote", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Uganda",
    leaderName: "Yoweri Museveni",
    assumedOfficeDate: "January 29, 1986",
    flag: "🇺🇬",
    nationalBird: "Grey Crowned Crane",
    mostRecentAnnualGDP: "0.1 trillion USD",
    globalRegion: "Middle East & Africa",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 18. Ghana
{
  question: "Who is the leader of Ghana?",
  answers: [
    { text: "Nana Akufo-Addo", isCorrect: true },
    { text: "John Dramani Mahama", isCorrect: false },
    { text: "John Agyekum Kufuor", isCorrect: false },
    { text: "Jerry John Rawlings", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Ghana",
    leaderName: "Nana Akufo-Addo",
    assumedOfficeDate: "January 7, 2017",
    flag: "🇬🇭",
    nationalBird: "Lavender Waxbill",
    mostRecentAnnualGDP: "0.1 trillion USD",
    globalRegion: "Middle East & Africa",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 19. Angola
{
  question: "Who is the leader of Angola?",
  answers: [
    { text: "João Lourenço", isCorrect: true },
    { text: "José Eduardo dos Santos", isCorrect: false },
    { text: "Eduardo dos Santos", isCorrect: false },
    { text: "Agostinho Neto", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Angola",
    leaderName: "João Lourenço",
    assumedOfficeDate: "September 26, 2017",
    flag: "🇦🇴",
    nationalBird: "Red-crested Turaco",
    mostRecentAnnualGDP: "0.2 trillion USD",
    globalRegion: "Middle East & Africa",
    countryImage: "",
    pronunciationLink: ""
  }
},
// 20. Mozambique
{
  question: "Who is the leader of Mozambique?",
  answers: [
    { text: "Filipe Nyusi", isCorrect: true },
    { text: "Armando Guebuza", isCorrect: false },
    { text: "Joaquim Chissano", isCorrect: false },
    { text: "Samora Machel", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Mozambique",
    leaderName: "Filipe Nyusi",
    assumedOfficeDate: "January 15, 2015",
    flag: "🇲🇿",
    nationalBird: "African Fish Eagle",
    mostRecentAnnualGDP: "0.2 trillion USD",
    globalRegion: "Middle East and Africa",
    countryImage: "",
    pronunciationLink: ""
  }
}

];
