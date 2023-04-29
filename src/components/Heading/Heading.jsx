const Heading = (props) => {
  return (
    <div class="mb-16">
      <h1 class="mb-8 text-center">
        <span class="font-bold text-3xl uppercase after:content-[' '] after:w-8 after:h-1 after:bg-yellow-400 after:block after:rounded-lg after:mt-2 after:mx-auto">
          {props.title}
        </span>
      </h1>
      {props.subtitle && (
        <span class="decoration-gray-100 font-normal text-lg text-center inline-block w-full">
          {props.subtitle}
        </span>
      )}
    </div>
  );
};

export default Heading;
