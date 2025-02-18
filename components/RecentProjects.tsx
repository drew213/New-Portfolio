"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-16 mt-10 p-4">
        {projects.map((item) => (
          <div
            className="flex justify-center items-center w-[80vw] sm:w-96 h-[25rem] lg:min-h-[32.5rem]"
            key={item.id}
          >
            <PinContainer
              title="github.com/drew213"
              href="https://twitter.com/mannupaaji"
            >
              <div className="relative flex justify-center items-center mb-10 w-[80vw] sm:w-96 h-[20vh] lg:h-[30vh] overflow-hidden">
                <div
                  className="relative lg:rounded-3xl w-full h-full overflow-hidden"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/bg.png" alt="bgimg" />
                </div>
                <img
                  src={item.img}
                  alt="cover"
                  className="bottom-0 z-10 absolute"
                />
              </div>

              <h1 className="font-bold text-base md:text-xl lg:text-2xl line-clamp-1">
                {item.title}
              </h1>

              <p
                className="font-light lg:font-normal text-sm lg:text-xl line-clamp-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex justify-between items-center mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center bg-black border border-white/[.2] rounded-full w-8 lg:w-10 h-8 lg:h-10"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <a href="mailto:a7a.business@gmail.com, adetunjidarren@gmail.com">
                    <p className="flex text-purple md:text-xs text-sm lg:text-xl">
                      Request A Demo
                    </p>
                  </a>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
