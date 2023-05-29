import Image from "next/image";
import AnimatedImg from "./AnimatedImg";

const OurStory = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col md:flex-row items-start cont overflow-hidden">
        <div className="w-full md:w-1/2 relative">
          <div
            className=" w-full md:w-[80%] h-[200px] md:h-[400px] bg-yellow-400 relative border-s rounded-e-[50%] overflow-hidden"
            // style={{ left: "492px", top: "17px" }}
          >
            {/* <Image
              src="/images/RectangleSnacks 34.svg"
              alt="About Us"
              width={500}
              height={300}
              className=" absolute w-full h-full -mt-5 -ml-5 object-cover"
            /> */}
            <AnimatedImg
              path="/images/RectangleSnacks 34.svg"
              alt="snacks"
              className=" absolute w-full h-full -mt-5 -ml-5 object-cover"
              direction="-100"
            />
          </div>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0 md:ml-8">
          <h1 className=" font-inter font-bold text-3xl md:text-5xl leading-10 tracking-tighter text-[#3A8DDE] flex-none order-0 mb-5 text-center md:text-start">
            Our Story Begins...
          </h1>
          <p className="text-gray-600 leading-9 text-xl">
            Lorem ipsum dolor sit amet consectetur. Viverra at vel purus sed
            tristique elementum tincidunt viverra. Lorem ipsum dolor sit amet
            consectetur. Viverra at vel purus sed tristique elementum tincidunt
            viverra.
          </p>
          <p className="text-gray-600 leading-9 text-xl mt-4">
            Lorem ipsum dolor sit amet consectetur. Viverra at vel purus sed
            tristique elementum tincidunt viverra. Lorem ipsum dolor sit amet
            consectetur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
