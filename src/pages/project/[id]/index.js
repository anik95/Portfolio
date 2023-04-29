import Skill from "@/components/About/Skill/Skill";
import Button from "@/components/Button/Button";
import Heading from "@/components/Heading/Heading";
import SubHeading from "@/components/Heading/SubHeading";
import { useRouter } from "next/router";
import { findById } from "../../../../public/projects";
import Loader from "@/components/Loader/Loader";
import Image from "next/image";
import BeeblioImg from "./../../../../public/assets/images/beeblio.png";
import AmbergImg from "./../../../../public/assets/images/amberg.png";
import MusingooImg from "./../../../../public/assets/images/musingoo.png";
import SeebizImg from "./../../../../public/assets/images/seebiz.png";
import EsparesImg from "./../../../../public/assets/images/espares.png";

const ProjectDetails = () => {
  const router = useRouter();
  const id = router.query.id;
  const project = findById(id);

  const findImg = (id) => {
    switch (id) {
      case "beeblio":
        return BeeblioImg;
      case "amberg":
        return AmbergImg;
      case "musingoo":
        return MusingooImg;
      case "espares":
        return EsparesImg;
      case "seebiz":
        return SeebizImg;
    }
  };

  return project ? (
    <section>
      <div class="flex-col h-screen bg-gradient-to-r from-slate-300 to-white flex justify-center items-center px-14 relative overflow-hidden">
        <h1 class="text-6xl font-extrabold mb-8">{project.title}</h1>
        <p class="text-2xl text-center">
          This page contains the case study of {project.title} Project which
          includes the Project Overview, Tools Used and Live Links to the
          official product.
        </p>
        <div class="mt-10">
          <Button link={project.link}>Project Link</Button>
        </div>
      </div>
      <div class="py-24 px-7 mx-0 md:mx-36 lg:mx-40 xl:mx-48">
        <Image src={findImg(project.id)} alt={project.title} />
        <div class="text-center pt-24">
          <SubHeading text="Project Overview" />
          {project.description.map((para) => (
            <p key={para} class="my-4 text-left">
              {para}
            </p>
          ))}
        </div>
        <div class="pt-24 text-center">
          <SubHeading text="Tools Used" />
          <div class="flex justify-center items-center flex-wrap">
            {project.tools.map((tool) => (
              <Skill key={tool}>{tool}</Skill>
            ))}
          </div>
        </div>
        <div class="pt-24 text-center">
          <SubHeading text="See Live" />
          <div class="flex justify-center items-center gap-5 flex-wrap">
            <Button link={project.link}>Link</Button>
            <Button link={"/"} type="secondary" newTab={false}>
              Go Back
            </Button>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <div class="h-screen w-full relative">
      <Loader />
    </div>
  );
};

export default ProjectDetails;
