import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import jahid from '../assets/jahid.png'


const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center md:items-center">

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify md:pr-[60px]'
        >
          "I Am A Highly Skilled Software Developer With Extensive Experience In Typescript And Javascript, Specializing In Frameworks Such As React, Node.js, And Three.js. My Expertise Allows Me To Build Powerful, Scalable Web Applications, While My Strong Foundation In Graphic Design Enables Me To Create Visually Engaging And Intuitive User Interfaces. I’m Proficient In Both Frontend And Backend Development, Delivering Cohesive And Well-rounded Solutions. My Approach Emphasizes Close Collaboration With Clients To Ensure Their Goals Are Met Through Innovative, Efficient, And User-centric Designs. If You're Looking For A Developer Who Combines Technical Excellence With Creative Design, Let's Work Together To Bring Your Vision To Life!"
        </motion.p>

        <div className="mt-4 md:mt-0">
          <img src={jahid} alt='logo' className='w-full h-auto max-w-[500px] md:max-w-none' />
        </div>

      </div>



      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
