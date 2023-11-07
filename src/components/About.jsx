import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const About = () => {
  return (
    <>
      <motion.div /*animate*/ variants={textVariant()} >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
      >
        I'm a software developer with experience in C++ and MERN-stack Javascript (MongoDB, Express, React, & Node). Together, we can debug issues, find solutions, and create next-level projects.     
      </motion.p>
    </>
  )
}

export default About