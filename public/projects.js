const projects = [
  {
    id: "beeblio",
    title: "Beeblio",
    description: [
      "A vocabulary builder application built using React Helps users improve their vocabulary. Users can get a list of unique words along with dictionary meanings from a sentence or URL which can be saved for review later.",
      "Beeblio is the best place to get your vocabulary improved. Beeblio makes use of the most intelligent dictionaries in the world with innovative research that allows you to easily learn new words. Your learning becomes more advanced and you can always look back to see how far you are coming with our easy-to-use progress monitoring tools.",
    ],
    link: "https://web.beebl.io/",
    tools: ["React", "Typescript", "Reactstrap"],
  },
  {
    id: "amberg",
    title: "Amberg RMS Inspection",
    description: [
      "With more than 35 years of experience, Amberg Technologies is the global market leader in the area of railway and tunnel surveying and offers its products and services through a network of more than 30 sales partners in over 40 countries. Amberg IMS provides reliable and highly precise geometry information during the construction, maintenance and inspection of railway track systems – while achieving unparalleled productivity. It is tailored for rail professionals and is robust, easy-to-use platform in order to evaluate and analyze rail track measurement data through the use of charts, data tables, images, maps and reports.",
      "We used React as the front end library and other awesome libraries like CanvasJS, BlueprintJS & React Leaflet to display valuable information in graphical, tabular and as map. Being able to represent data as accurately as possible is the main goal of this project. This is still a work in progress.",
    ],
    link: "https://stage-amberg.selise.biz/",
    tools: [
      "React",
      "Typescript",
      "Jest",
      "React Testing Library",
      "React Query",
      "Canvas Js",
      "Blueprint JS",
      "React Leaflet",
      "Material UI",
    ],
  },
  {
    id: "musingoo",
    title: "Musingoo",
    description: [
      "Based in Hamburg, musingoo is a music learning platform for music enthusiasts built using React, with options to make appointments, instrument rentals and much more. Musingoo is on track to be officially launched very soon.",
    ],
    link: "https://musingoo.de/",
    tools: ["React", "Typescript", "Full Calendar Js", "Reactstrap"],
  },
  {
    id: "seebiz",
    title: "Seebiz Inventory",
    description: [
      "SeeBiz deeply recognizes the challenges being faced by modern wholesalers and therefore developed a simple solution: SeeBiz Inventory which is an inventory management system specifically designed to help wholesalers easily manage their inventory. It keeps track of organization products and generates detailed inventory and transaction reports which are vital for wholesalers.",
      "I worked as a full stack developer on this project using Laravel and React.",
    ],
    link: "https://inventory.seebiz.com/login",
    tools: ["React", "React Router", "Context", "Laravel"],
  },
  {
    id: "espares",
    title: "eSpares UK",
    description: [
      "Ecommerce application specialized in spare parts for electronics based in the UK. With the rapid growth of the ecommerce industry, staying ahead of the competion is vital for survival. As a result we opted to perform A/B tests to keep track of conversions after our design and feature updates in order to maximize the results. We made use of A/B testing tools like VWO to manage conversion results, create goals and stay up to date with user behaviour. By doing so we were able to increase our user conversions by over 200% monthly.",
    ],
    link: "https://www.espares.co.uk/",
    tools: ["VWO", "Javascript", "HTML", "CSS", "Bootstrap"],
  },
];

export const findById = (id) => {
  return projects.find((project) => project.id === id);
};
