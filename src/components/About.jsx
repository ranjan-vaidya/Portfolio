import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";



const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        As a passionate and skilled software developer with over 1.5 years of experience, I specialize in building robust web applications using React.js, Next.js, and the MERN stack. I have successfully integrated APIs and implemented state management with Redux to deliver seamless user experiences. My expertise includes responsive design, efficient API handling, and effective data passing, ensuring that applications are both functional and user-friendly. With a strong foundation in computer science and a commitment to continuous learning, I am dedicated to delivering innovative and impactful software solutions.
      </motion.p>

      
    </>
  );
};

export default SectionWrapper(About, "about");
