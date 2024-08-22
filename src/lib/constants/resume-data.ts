type Experience = {
  title: string;
  description: string;
  date: string;
  tech: string[];
  href?: string;
};

type Skill = {
  name: string;
  level: number;
};

type SkillCategory = {
  name: string;
  skills: Skill[];
};

type Award = {
  title: string;
  location: string;
  year: number;
  prize: number | string;
};

type AwardCategory = {
  subject: string;
  awards: Award[];
};

export const experiences: Experience[] = [
  {
    title: "Co-Founder at Flux Slides",
    description:
      "Git-based presentation tool focused on businesses. Typesetting, easy collaboration, easy management.",

    date: "2024 - Current",
    tech: ["figma", "svelte", "firebase", "gitlab"],
    // href: "https://flowslides.com",
  },
  {
    title: "Web Developer at Big Data Big Impact",
    description:
      "Developed a web app that predicts Parkinson using data analysis and ML.",
    date: "September - December 2022",
    tech: ["D3.js", "js/ts", "html/css", "node.js", "express"],
    href: "https://gt-big-data.github.io/#/",
  },
  {
    title: "CMO at Dupla",
    description:
      "Brazilian recruiter company. Helps companies hire qualified women in tech.",

    date: "April - July 2021",
    tech: ["figma", "wordpress", "html/css", "javascript"],
    href: "https://www.crunchbase.com/organization/dupla",
  },
  {
    title: "Co-Founder of Nery",
    description:
      "Medical startup. Devised an app that uses AI to interact with the elderly.",
    date: "January - March 2020",
    tech: ["figma", "javascript", "html/css", "node.js", "express"],
    href: "https://medicinasa.com.br/hackmed-startups/"
  },
  {
    title: "Vice President of NOIC",
    description:
      "Largest Brazilian education NGO made by students with courses for science Olympiads.",
    date: "May 2019 - March 2020",
    tech: ["figma", "wordpress", "html/css", "javascript"],
    href: "https://noic.com.br",
  },
  {
    title: "Tutoring",
    description:
      "Tutored students in Brazil and the US in advanced Olympiad math content and college classes.",
    date: "2018 - Current",
    tech: ["zoom", "obs studio", "excel", "latex"],
  },
];

export const groupedSkills: SkillCategory[] = [
  {
    name: "Programming",
    skills: [
      {
        name: "javascript",
        level: 3,
      },
      {
        name: "typescript",
        level: 3,
      },
      {
        name: "python",
        level: 3,
      },
      {
        name: "c#",
        level: 3,
      },
      {
        name: "java",
        level: 3,
      },
      {
        name: "html/css",
        level: 3,
      },
      {
        name: "c/c++",
        level: 2,
      },
      {
        name: "sql",
        level: 2,
      },
      {
        name: "php",
        level: 2,
      },
      {
        name: "ruby",
        level: 2,
      },
      {
        name: "go",
        level: 1,
      },
      {
        name: "apl",
        level: 1,
      },
      {
        name: "haskell",
        level: 2,
      },
      {
        name: "scss",
        level: 2,
      },
      {
        name: "assembly",
        level: 2,
      },
    ],
  },
  {
    name: "Libraries & Frameworks",
    skills: [
      {
        name: "sanity.io",
        level: 3,
      },
      {
        name: "react",
        level: 3,
      },
      {
        name: "next.js",
        level: 3,
      },
      {
        name: "node.js",
        level: 3,
      },
      {
        name: "express",
        level: 1,
      },
      {
        name: "WordPress.js",
        level: 2,
      },
      {
        name: "three.js",
        level: 2,
      },
      {
        name: "gatsby",
        level: 2,
      },
      {
        name: "anime.js",
        level: 2,
      },
      {
        name: "gohugo",
        level: 1,
      },
      {
        name: "d3.js",
        level: 1,
      },
      {
        name: "svelte/sveltekit",
        level: 3,
      },
      {
        name: "vue",
        level: 1,
      },
      {
        name: "sqlite",
        level: 1,
      },
      {
        name: "mongoDB",
        level: 1,
      },
      {
        name: "firebase",
        level: 1,
      },
      {
        name: "postgresql",
        level: 2,
      },
    ],
  },
  {
    name: "Software",
    skills: [
      {
        name: "git",
        level: 3,
      },
      {
        name: "notion",
        level: 3,
      },
      {
        name: "obs studio",
        level: 3,
      },
      {
        name: "obsidian",
        level: 3,
      },
      {
        name: "vscode",
        level: 3,
      },
      {
        name: "figma",
        level: 3,
      },
      {
        name: "blender",
        level: 1,
      },
      {
        name: "unity",
        level: 3,
      },
      {
        name: "audacity",
        level: 2,
      },
      {
        name: "procreate",
        level: 3,
      },
      {
        name: "resolve studio",
        level: 2,
      },
      {
        name: "android studio",
        level: 2,
      },
      {
        name: "excel",
        level: 2,
      },
      {
        name: "photoshop",
        level: 1,
      },
    ],
  },
  {
    name: "Languages",
    skills: [
      {
        name: "english",
        level: 3,
      },
      {
        name: "portuguese",
        level: 3,
      },
      {
        name: "japanese",
        level: 1,
      },
      {
        name: "spanish",
        level: 2,
      }
    ],
  },
];

export const awards: AwardCategory[] = [


  {
    subject: "Mathematics",
    awards: [
      {
        year: 2019,
        title: "Canguru Math Olympiad",
        location: "national",
        prize: "gold",
      },
      {
        year: 2019,
        title: "Brazilian Math Olympiad of Public Schools",
        location: "national",
        prize: "bronze",
      },
      {
        year: 2019,
        title: "Brazilian Math Olympiad",
        location: "national",
        prize: "hm",
      },
      {
        year: 2018,
        title: "Canguru Math Olympiad",
        location: "national",
        prize: "gold",
      },
      {
        year: 2018,
        title: "Sao Paulo Math Olympiad",
        location: "state",
        prize: "silver",
      },
      {
        year: 2018,
        title: "Ceara Math Olympiad",
        location: "state",
        prize: "bronze",
      },
      {
        year: 2018,
        title: "Brazilian Math Olympiad",
        location: "national",
        prize: "bronze",
      },
      {
        year: 2017,
        title: "Brazilian Math Olympiad of Public Schools",
        location: "national",
        prize: "gold",
      },
      {
        year: 2017,
        title: "Poliedro Math Olympiad",
        location: "regional",
        prize: "gold",
      },
      {
        year: 2017,
        title: "Canguru Math Olympiad",
        location: "national",
        prize: "gold",
      },
      {
        year: 2017,
        title: "National No Frontiers Math Olympiad",
        location: "national",
        prize: "gold",
      },
      {
        year: 2017,
        title: "Regional No Frontiers Math Olympiad",
        location: "regional",
        prize: "gold",
      },
      {
        year: 2017,
        title: "Sao Paulo Math Olympiad",
        location: "state",
        prize: "gold",
      },
      {
        year: 2017,
        title: "Unicamp Math Olympiad",
        location: "regional",
        prize: "gold",
      },
      {
        year: 2017,
        title: "Lusophony world Math Olympiad",
        location: "world",
        prize: "silver",
      },
      {
        year: 2017,
        title: "Rioplatense world Math Olympiad",
        location: "world",
        prize: "bronze",
      },
      {
        year: 2016,
        title: "Brazilian Math Olympiad of Public Schools",
        location: "national",
        prize: "gold",
      },
      {
        year: 2016,
        title: "Poliedro Math Olympiad",
        location: "regional",
        prize: "gold",
      },
      {
        year: 2016,
        title: "National No Frontiers Math Olympiad",
        location: "national",
        prize: "gold",
      },
      {
        year: 2016,
        title: "Regional No Frontiers Math Olympiad",
        location: "regional",
        prize: "gold",
      },
      {
        year: 2016,
        title: "Unicamp Math Olympiad",
        location: "regional",
        prize: "gold",
      },
      {
        year: 2016,
        title: "Canguru Math Olympiad",
        location: "national",
        prize: "gold",
      },
      {
        year: 2016,
        title: "Brazilian Math Olympiad",
        location: "national",
        prize: "bronze",
      },
      {
        year: 2015,
        title: "Sao Paulo Math Olympiad",
        location: "state",
        prize: "gold",
      },
      {
        year: 2015,
        title: "Rioplatense world Math Olympiad",
        location: "world",
        prize: "gold",
      },
      {
        year: 2015,
        title: "Canguru Math Olympiad",
        location: "national",
        prize: "gold",
      },
      {
        year: 2015,
        title: "Poliedro Math Olympiad",
        location: "regional",
        prize: "gold",
      },
      {
        year: 2015,
        title: "No Frontiers Math Olympiad",
        location: "national",
        prize: "silver",
      },
      {
        year: 2014,
        title: "No Frontiers Math Olympiad",
        location: "national",
        prize: "gold",
      },
      {
        year: 2014,
        title: "Canguru Math Olympiad",
        location: "national",
        prize: "gold",
      },
      {
        year: 2014,
        title: "Poliedro Math Olympiad",
        location: "regional",
        prize: "gold",
      },
    ],
  },
  {
    subject: "Computer Science",
    awards: [
      {
        year: 2023,
        title: "GMTK Game Jam",
        location: "world",
        prize: "68th",
      },
      {
        year: 2023,
        title: "HackGT X",
        location: "state",
        prize: "hm",
      },
      {
        year: 2022,
        title: "HackGT 9",
        location: "state",
        prize: "hm",
      },
      {
        year: 2021,
        title: "GMTK Game Jam",
        location: "world",
        prize: '325th',
      },
      {
        year: 2021,
        title: "Brackeys Game Jam",
        location: "world",
        prize: "36th",
      },
      {
        year: 2020,
        title: "Hackathon MIT Hackmed",
        location: "national",
        prize: "2nd",
      },
      {
        year: 2016,
        title: "Brazilian Olympiad of CS",
        location: "national",
        prize: "bronze",
      },
      {
        year: 2015,
        title: "Brazilian Olympiad of CS",
        location: "national",
        prize: "hm",
      },
      {
        year: 2014,
        title: "Brazilian Olympiad of CS",
        location: "national",
        prize: "silver",
      },
    ],
  },
  {
    subject: "Physics",
    awards: [
      {
        year: 2018,
        title: "Brazilian Olympiad of Physics",
        location: "national",
        prize: "hm",
      },
      {
        year: 2017,
        title: "Brazilian Olympiad of Physics",
        location: "national",
        prize: "silver",
      },
      {
        year: 2017,
        title: "Sao Paulo Olympiad of Physics",
        location: "state",
        prize: "silver",
      },
      {
        year: 2016,
        title: "Brazilian Olympiad of Physics",
        location: "national",
        prize: "gold",
      },
      {
        year: 2015,
        title: "Sao Paulo Olympiad of Physics",
        location: "state",
        prize: "gold",
      },
      {
        year: 2014,
        title: "Sao Paulo Olympiad of Physics",
        location: "state",
        prize: "gold",
      },
    ],
  },
  {
    subject: "Astronomy",
    awards: [
      {
        year: 2018,
        title: "Brazilian Olympiad of Astronomy",
        location: "national",
        prize: "silver",
      },
      {
        year: 2016,
        title: "Brazilian Olympiad of Astronomy",
        location: "national",
        prize: "gold",
      },
      {
        year: 2015,
        title: "Brazilian Olympiad of Astronomy",
        location: "national",
        prize: "bronze",
      },
    ],
  },
  {
    subject: "Chemistry",
    awards: [
      {
        year: 2016,
        title: "Brazilian Olympiad of Chemistry Jr.",
        location: "national",
        prize: "bronze",
      },
    ],
  },
  {
    subject: "Robotics",
    awards: [
      {
        year: 2017,
        title: "Brazilian Olympiad of Robotics",
        location: "national",
        prize: "silver",
      },
      {
        year: 2016,
        title: "Brazilian Olympiad of Robotics",
        location: "national",
        prize: "silver",
      },
    ],
  },
];
