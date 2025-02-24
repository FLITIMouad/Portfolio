import React, { useEffect, useRef, useState } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "@hooks";
import { technologies, radarData } from "@constants";
import { motion, useAnimation } from "framer-motion";
import { Radar } from "react-chartjs-2";
import "chart.js/auto";
import { fadeIn } from "@utils/motion";
const Tech = () => {
  const controlsArray = technologies.map(() => useAnimation());
  const [visible, setVisible] = useState(false);
  const barsComp = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      const section = barsComp.current;
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.75) {
          console.log("is on");
          setVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (visible) {
      technologies.forEach((skill, index) => {
        controlsArray[index].start({
          width: `${skill.level}%`,
          transition: { duration: 3, ease: "easeOut" },
        });
      });
    }
  }, [visible]);

  const radarOptions = {
    plugins: {
      legend: {
        display: true, // Hide legend text
      },
    },
    scales: {
      r: {
        ticks: {
          display: false, // Hide scale numbers
        },
        pointLabels: {
          display: true, // Hide labels around radar chart
        },
      },
    },
  };
  return (

    <div id="skills" className='p-10 bg-gray-900 min-h-screen flex-wrap justify-center gap-10'>
      {/* Grid UI for Skills */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
        {technologies.map((skill, index) => (
          <motion.div
            key={index}

            variants={fadeIn("up", "spring", index * 0.15, 0.75)}
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-4 bg-gray-800 rounded-lg text-center shadow-lg cursor-pointer hover:shadow-xl"
          >
            <motion.img
              src={skill.icon}
              alt={skill.name}
              className="h-16 w-16 mx-auto mb-2"
              whileHover={{ scale: 1.2, rotate: -5 }}
            />
            <p className="hover:text-blue-400 transition-colors duration-200">{skill.name}</p>
          </motion.div>
        ))}
      </div>

      {/* Skill Bars */}
      <div ref={barsComp} className="space-y-4 mb-16">
        {technologies.map((skill, index) => (
          <div key={skill.name}>
            <p className="text-sm font-bold">{skill.name}</p>
            <div className="w-full bg-gray-700 rounded-lg h-3">
              <motion.div
                className="bg-blue-500 h-3 rounded-lg"
                custom={skill}
                initial={{ width: "0%" }}
                animate={controlsArray[index]}
              ></motion.div>
            </div>
          </div>
        ))}
      </div>

      {/* Radar Chart for Skills */}
      <div className="flex justify-center">
        <div className="w-96">
          <Radar data={radarData} options={radarOptions} />
        </div>
      </div>
      {/* Additional Message */}
      <div className="mt-10 text-center text-lg text-gray-300">
        <p>These are just some of my skills! 🚀</p>
        <p>Contact me to learn more about my expertise and how I can help your project.</p>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "");
