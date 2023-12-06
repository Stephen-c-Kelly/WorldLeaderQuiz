// 12.2 export data from chatGPT - https://chat.openai.com/share/1dc2e9b7-1cc6-4003-b371-928c6c544f3d


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

// export const EUROPE_COUNTRIES = [ I need to set this u but first i need to reformat the data

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
  question: "Who is the leader of Japan?",
  answers: [
    { text: "Yoshihide Suga", isCorrect: true },
    { text: "Shinzo Abe", isCorrect: false },
    { text: "Taro Aso", isCorrect: false },
    { text: "Fumio Kishida", isCorrect: false }
  ],
  countryDetails: {
    countryName: "Japan",
    leaderName: "Yoshihide Suga",
    assumedOfficeDate: "September 16, 2020",
    flag: "🇯🇵",
    nationalBird: "Green Pheasant",
    mostRecentAnnualGDP: "5.0 trillion USD",
    globalRegion: "Asia",
    countryImage: "",
    pronunciationLink: ""
  }
},

// 4. South Korea
{
  question: "Who is the leader of South Korea?",
  answers: [
    { text: "Moon Jae-in", isCorrect: true },
    { text: "Kim Jong-un", isCorrect: false },
    { text: "Lee Nak-yeon", isCorrect: false },
    { text: "Hwang Kyo-ahn", isCorrect: false }
  ],
  countryDetails: {
    countryName: "South Korea",
    leaderName: "Moon Jae-in",
    assumedOfficeDate: "May 10, 2017",
    flag: "🇰🇷",
    nationalBird: "Korean Magpie",
    mostRecentAnnualGDP: "1.6 trillion USD",
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


]
