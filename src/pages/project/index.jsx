import Loader from "@/components/Loader/Loader";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Project = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, []);

  return (
    <div class="h-screen w-full relative">
      <Loader />
    </div>
  );
};

export default Project;
