import React from 'react'
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { services } from "../constants";
import { styles } from "../styles";
import {Tilt} from "react-tilt";

const ServiceCard = ({ index, title, icon, degree, duration }) => (
    <Tilt className='xs:w-[350px] w-full'>
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
          className='bg-tertiary rounded-[20px] py-5 px-6 min-h-[260px] flex justify-evenly  flex-col'
        >
          {/* <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          /> */}
  
          <h3 className='text-white text-[20px] font-bold'>
            {title}
          </h3>
  
          <h6>
            {degree}
          </h6>
          <p>{duration}</p>
        </div>
      </motion.div>
    </Tilt>
  );

const Education = () => {
  return (
    <div>
        

      

      <h2 className={`${styles.sectionHeadText} text-center`}>Education</h2>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px]  leading-[30px]'
      >
        Here is a summary of my educational background, showcasing the key degrees and qualifications that have shaped my career in technology.


      </motion.p>


      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  )
}

export default  SectionWrapper(Education, "education");