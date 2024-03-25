import Button from "@/components/Button/Button";
import Link from "next/link";

const Content = () => {
  return (
    <div class="w-10/12">
      <h1 class="text-4xl md:text-5xl uppercase tracking-wide text-slate-950 font-extrabold text-center">
        Hey, I am Mustadir Mahmood
      </h1>
      <p class="mt-10 text-center text-lg md:text-xl">
        Focused MERN stack Web Developer building Web Applications that leads to
        the success of the overall product
      </p>
      <div class="flex justify-center">
        <div class="mt-10">
          <Button link="/#projects" newTab={false}>
            Projects
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Content;
