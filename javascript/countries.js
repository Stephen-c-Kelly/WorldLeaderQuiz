// 12.2 export data from chatGPT - https://chat.openai.com/share/1dc2e9b7-1cc6-4003-b371-928c6c544f3d


export const TEST_COUNTRIES = [
  {
    question: "Who is the leader of Test country #1?",
    answers: [
      { text: "Jay Garrick", isCorrect: false },
      { text: "Barry Allen", isCorrect: false },
      { text: "I am correct", isCorrect: true },
      { text: "Wally West", isCorrect: false }
    ],
    countryDetails: {
      countryName: "France",
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

{
    question: "Who is the leader of Test country #2?",
    answers: [
      { text: "Jay Garrick", isCorrect: false },
      { text: "Barry Allen", isCorrect: false },
      { text: "I am correct", isCorrect: true },
      { text: "Wally West", isCorrect: false }
    ],
    countryDetails: {
      countryName: "France",
      leaderName: "Emmanuel Macron",
      assumedOfficeDate: "May 14, 2017",
      flag: "🏴󠁧󠁢󠁷󠁬󠁳󠁿",
      nationalBird: "Gallic Rooster",
      mostRecentAnnualGDP: "2.8 trillion USD",
      globalRegion: "Europe",
      countryImage: "",
      pronunciationLink: ""
    }
  }
]


// 2. France
const franceQuiz = {
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
};

// 3. United Kingdom
const ukQuiz = {
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
};

// 4. Italy
const italyQuiz = {
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
};

// 5. Spain
const spainQuiz = {
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
};

// 6. Russia
const russiaQuiz = {
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
};

// 7. Netherlands
const netherlandsQuiz = {
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
};

// 8. Switzerland
const switzerlandQuiz = {
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
};

// 9. Sweden
const swedenQuiz = {
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
};

// 10. Poland
const polandQuiz = {
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
};

// 11. Greece
const greeceQuiz = {
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
};

// 12. Portugal
const portugalQuiz = {
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
};

// 13. Norway
const norwayQuiz = {
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
};

// 14. Denmark
const denmarkQuiz = {
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
};

// 15. Finland
const finlandQuiz = {
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
};

// 16. Austria
const austriaQuiz = {
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
};
// 17. Belgium
const belgiumQuiz = {
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
};

// 18. Czech Republic
const czechRepublicQuiz = {
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
};

// 19. Bulgaria
const bulgariaQuiz = {
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
};

// 20. Hungary
const hungaryQuiz = {
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
};

// 21. Belarus
const belarusQuiz = {
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
};

// 22. Romania
const romaniaQuiz = {
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
};

// 23. Ireland
const irelandQuiz = {
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
};

// 24. Croatia
const croatiaQuiz = {
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
};

// 25. Slovakia
const slovakiaQuiz = {
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
};

// 26. Ukraine
const ukraineQuiz = {
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
};

