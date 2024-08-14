import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                md:w-[2px] md:left-[30px] xs:left-[20px]
                "
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="University of Nairobi"
            time="Graduate | BSc. Statistics"
            info="As a graduate of the BSc Statistics program at the University of Nairobi, I successfully merged classical statistical modeling techniques with technology. By combining my expertise in data analysis with a deep understanding of machine learning, I excelled in designing innovative solutions that leverage the power of both disciplines. My ability to bridge statistical modeling and technology prepares me for future opportunities where this unique blend of skills is invaluable."
          />
          <Details
            type="ALX"
            time="Bootcamp | Software Engineering"
            info="As a graduate of the ALX Software Engineering Bootcamp, I underwent an intensive program from September 2020 to October 2021. Throughout the bootcamp, I gained expertise in computer science fundamentals, data structures and algorithms, application design and development, frontend and backend development, web APIs, machine learning, artificial intelligence, and computer systems and hardware. This immersive experience has equipped me with a diverse skill set and a solid foundation in software engineering, empowering me to tackle complex challenges and drive innovation in the industry."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
