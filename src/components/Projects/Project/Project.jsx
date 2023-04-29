import Button from "@/components/Button/Button";
import SubHeading from "@/components/Heading/SubHeading";
import Image from "next/image";
import Link from "next/link";

const Project = (props) => {
  return (
    <div class="flex flex-wrap justify-center items-start mb-24 last-of-type:mb-0 w-full">
      <div class="w-full md:w-2/3 lg:w-1/2 lg:pr-4">
        <Image src={props.img} alt="project" />
      </div>
      <div class="flex justify-center items-center lg:justify-start lg:items-start flex-col w-full lg:w-1/2 lg:pl-4 pt-4">
        <SubHeading text={props.title} />
        <p class="w-2/3 text-center lg:w-full lg:text-start">
          {props.description}
        </p>
        <div class="mt-10">
          <Button link={props.link}>Case Study</Button>
        </div>
      </div>
    </div>
  );
};

export default Project;
