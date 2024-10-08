import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import { Truculenta } from "next/font/google";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);
  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>Renox Omache | About Page</title>
        <meta name="description" content="Software Engineer" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Unleashing the Power of Technology!"
            className="mb-16 !text-5xl tracking-tight !text-center lg:!text-5xl sm:!text-4xl xs:!text-3xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                About Me
              </h2>
              <p className="font-medium">
                I am a highly skilled and motivated professional with a
                Bachelor's degree in Statistics and a certification in
                Software Engineering. With a strong foundation in both
                statistical analysis and software development, I am passionate
                about leveraging data to drive meaningful insights and solve
                complex problems. My areas of expertise lie in Full-Stack Development,
                data science, and machine learning engineering.
              </p>
              <p className="my-4 font-medium">
                In my journey as a data professional, I have honed my skills in
                collecting, cleaning, and analyzing large datasets, utilizing
                statistical methodologies and advanced tools. My ability to
                extract actionable insights from complex data sets has empowered
                organizations to make informed decisions and drive business
                growth. I am experienced in using programming languages such as
                Python and R, as well as tools like SQL and Tableau to
                manipulate and visualize data effectively.{" "}
              </p>
              <p className="font-medium">
                Furthermore, my knowledge in software engineering allows me to
                build robust and scalable solutions for data analysis and
                machine learning. With proficiency in frameworks such as
                TensorFlow and scikit-learn, I have successfully developed
                predictive models and implemented machine learning algorithms to
                solve real-world problems. My strong attention to detail,
                combined with my ability to work collaboratively and
                independently, enables me to deliver high-quality results within
                deadline-driven environments.
              </p>
              <p className="font-medium">
                I am seeking opportunities to apply my expertise in data
                analysis, data science, and machine learning engineering. With a
                passion for extracting insights from complex datasets and a
                commitment to driving innovation, I am dedicated to contributing
                to projects that make a significant impact. If you are looking
                for a dedicated professional who can turn data into actionable
                intelligence, I would be thrilled to be part of your team.
              </p>
            </div>

            <div
              className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8"
            >
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="KennethCamacho"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width:768px) 100vw,
    (max-width:1200px) 50vw,
    33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Students Taught
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Years of Experience
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
