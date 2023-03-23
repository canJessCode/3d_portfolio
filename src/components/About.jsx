import React, { Fragment } from "react";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { services } from "../constants";
import styles from "../styles";

const About = () => {
  const ServiceCard = ({ index, title, icon }) => {
    return (
      <Tilt className="xs:w-[250px] w-full">
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    );
  };

  return (
    <Fragment>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Over View.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Hi, I am a junior web developer. I recently completed my education in
        web development and I am excited to start my career in this field. I am
        eager to learn more about web development frameworks and technologies. I
        am passionate about creating beautiful and functional websites that meet
        the needs of clients and users alike. I am a quick learner, a team
        player, and always up for a challenge. I am excited to be a part of the
        dynamic and constantly evolving field of web development and I am
        committed to growing and improving in my role as a junior web developer.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </Fragment>
  );
};

export default SectionWrapper(About, "about");
