const works = [
  {
    id: "walters",
    title: "The Walters Art Museum",
    description: "Developed a responsive, visually engaging WordPress theme that showcases the Walters Art Museum's rich collections, exhibitions, and cultural significance while driving visitor engagement and museum support.",
    url: "https://thewalters.org/",
    skills: ["html", "css", "javascript", "wordpress"],
    images: ["walters.jpg"],
    video: "walters.mp4",
    mobile: [],
  },
  {
    id: "umaf",
    title: "Accelerate—The Campaign for UMass Amherst",
    description: `Developed a custom Drupal theme for the UMass Amherst campaign site; Created a comprehensive component library using Storybook and TailwindCSS, which integrated seamlessly into the theme, establishing a modular design system.`,
    url: "https://accelerateumass.org/",
    skills: ["html", "css", "javascript", "drupal", "tailwind", "storybook"],
    images: ["umass.jpg"],
    video: "umass.mp4",
    mobile: [],
  },
  {
    id: "prescott",
    title: "Prescott College",
    description: `Developed a custom WordPress theme for Prescott College that enhances digital content management and user experience. Created custom Gutenberg blocks and block patterns to provide an intuitive authoring experience, while implementing key features such as a detailed faculty directory, comprehensive list of degree programs`,
    url: "https://prescott.edu/",
    skills: ["wordpress", "html", "css", "javascript"],
    images: ["prescott.jpg"],
    video: "prescott.mp4",
    mobile: [],
  },
  {
    id: "meadville",
    title: "Meadville Lombard Theological School",
    description: `Front-end development for Meadville Lombard Theological School using BigtreeCMS as the content management backend. Implemented sophisticated interactive elements and navigated challenging design requirements`,
    url: "https://www.meadville.edu/",
    skills: ["html", "css", "javascript"],
    images: ["meadville.jpg"],
    video: "meadville.mp4",
    mobile: [],
  },
];

export const portfolio = ["walters", "umaf", "prescott", "meadville"].map((item) => works.filter((work) => work.id === item)[0]);
