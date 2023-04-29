import Link from "next/link";
import Heading from "../Heading/Heading";
import SubHeading from "../Heading/SubHeading";
import Skill from "./Skill/Skill";

const About = ({ titleType }) => {
  return (
    <section class="py-24 px-7" id="about">
      <Heading
        type="title"
        title="About me"
        subtitle="Here you will find more information about me, what I do, and my current
        skills mostly in terms of programming and technology"
      />
      <div class="flex flex-wrap justify-start">
        <div class="w-full md:w-1/2 md:pr-4 mb-16 md:mb-0">
          <SubHeading text="Get to know me!" />
          <p class="mb-3">
            I am Front-end engineer with 5 years of experience building robust
            client-end applications with extensive experience in Javascript. As
            a team leader, managing the team, communicating with clients,
            solving problems, and conducting code reviews are some of my main
            responsibilities. I have a solid commitment to meeting client
            requirements and deadlines while producing quality applications in
            an agile environment.
          </p>
          <p class="mb-3">
            I am open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then do not hesitate to contact me.
          </p>
          <p class="mb-3">
            Feel free to Connect or Follow me on my{" "}
            <Link
              href="https://www.linkedin.com/in/mustadir-mahmood-anik/"
              target="_blank"
              class=""
            >
              <span class="font-medium text-yellow-400 underline">
                Linkedin
              </span>
            </Link>{" "}
          </p>
        </div>
        <div class="w-full md:w-1/2 md:pl-4">
          <SubHeading text="My Skills" />
          <div class="flex justify-start items-center flex-wrap">
            <Skill>React</Skill>
            <Skill>Redux</Skill>
            <Skill>Context</Skill>
            <Skill>React Router</Skill>
            <Skill>Typescript</Skill>
            <Skill>React Query</Skill>
            <Skill>Vanilla JS</Skill>
            <Skill>Jest</Skill>
            <Skill>React Testing Library</Skill>
            <Skill>Nextjs</Skill>
            <Skill>Canvas Js</Skill>
            <Skill>Leaflet Js</Skill>
            <Skill>Blueprint JS</Skill>
            <Skill>Full Calendar Js</Skill>
            <Skill>jQuery</Skill>
            <Skill>HTML</Skill>
            <Skill>CSS</Skill>
            <Skill>Bootstrap</Skill>
            <Skill>Tailwind</Skill>
            <Skill>Material UI</Skill>
            <Skill>Reactstrap</Skill>
            <Skill>A/B testing</Skill>
            <Skill>PHP</Skill>
            <Skill>Laravel</Skill>
            <Skill>Responsive Design</Skill>
            <Skill>Git</Skill>
            <Skill>Agile</Skill>
            <Skill>Team Management</Skill>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
