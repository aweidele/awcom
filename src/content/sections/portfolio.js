const works = [
  {
    id: "walters",
    title: "The Walters Art Museum",
    description: "Custom Wordpress Theme for a Baltimore Art Museum",
    url: "https://thewalters.org/",
    skills: ["html", "css", "javascript", "wordpress"],
    images: ["walters.jpg"],
    video: "walters.mp4",
    mobile: [],
  },
  {
    id: "umaf",
    title: "Accelerate—The Campaign for UMass Amherst",
    description: `Drupal theme and Storybook for campaign site`,
    url: "https://accelerateumass.org/",
    skills: ["html", "css", "javascript", "drupal", "tailwind", "storybook"],
    images: ["umass.jpg"],
    video: "umass.mp4",
    mobile: [],
  },
  {
    id: "meadville",
    title: "Meadville Lombard Theological School",
    description: `Front End Development for higher education`,
    url: "https://www.meadville.edu/",
    skills: ["html", "css", "javascript"],
    images: ["umass.jpg"],
    video: "meadville.mp4",
    mobile: [],
  },
];

export const portfolio = ["walters", "umaf", "meadville"].map((item) => works.filter((work) => work.id === item)[0]);
