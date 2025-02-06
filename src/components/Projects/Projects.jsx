import Image from "next/image";
import Heading from "../Heading/Heading";
import ProjectImg from "./../../../public/assets/images/project-mockup-example.jpeg";
import BeeblioImg from "./../../../public/assets/images/beeblio.png";
import AmbergImg from "./../../../public/assets/images/amberg.png";
import SeebizImg from "./../../../public/assets/images/seebiz.png";
import MusingooImg from "./../../../public/assets/images/musingoo.png";
import EsparesImg from "./../../../public/assets/images/espares.png";
import SubHeading from "../Heading/SubHeading";
import Project from "./Project/Project";

const Projects = () => {
  return (
    <section class="py-24 px-7" id="projects">
      <Heading
        title="Projects"
        subtitle="Here you will find some of the personal and clients projects that I created with each project containing its own case study"
      />
      <div class="p-6">
        <Project
          img={BeeblioImg}
          title={"Beeblio"}
          link="/project/beeblio"
          description="Vocabulary builder application built using React Helps users improve their vocabulary. Users can get a list of unique words along with dictionary meanings from a sentence or URL which can be saved for review later."
        />
        <Project
          img={AmbergImg}
          title={"Amberg RMS Inspection"}
          link="/project/amberg"
          description="Robust, easy-to-use platform in order to evaluate and analyze rail track measurement data through the use of charts, data tables, images, maps and reports."
        />{" "}
        {/* <Project
          img={MusingooImg}
          title={"Musingoo"}
          link="/project/musingoo"
          description="Music learning platform for music enthusiasts built using React, with options to make appointments, instrument rentals and much more."
        />{" "} */}
        <Project
          img={SeebizImg}
          title={"Seebiz Inventory"}
          link="/project/seebiz"
          description="Inventory Management system to keep track of organization products and generate detailed inventory and transaction reports."
        />
        <Project
          img={EsparesImg}
          title={"eSpares UK"}
          link="/project/espares"
          description="Ecommerce application specialized in spare parts for electronics based in the UK."
        />
      </div>
    </section>
  );
};

export default Projects;
