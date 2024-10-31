const works = [
  {
    id: "walters",
    title: "The Walters Art Museum",
    description: "Custom Wordpress Theme for a Baltimore Art Museum",
    url: "https://thewalters.org/",
    skills: ["html", "css", "javascript", "wordpress"],
    images: [],
    mobile: [],
  },
  {
    id: "umaf",
    title: "Accelerate—The Campaign for UMass Amherst",
    description: `Drupal theme and Storybook for campaign site`,
    url: "https://accelerateumass.org/",
    skills: ["html", "css", "javascript", "drupal", "tailwind", "storybook"],
    images: [],
    mobile: [],
  },
];

export const portfolio = ["walters", "umaf"].map((item) => works.filter((work) => work.id === item)[0]);
