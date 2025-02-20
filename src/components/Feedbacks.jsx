import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Truncate text at word boundary
  const truncatedText = testimonial.split(" ").slice(0, 20).join(" ") + "...";

  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className='bg-black-200 p-6 md:p-10 rounded-3xl xs:w-[320px] w-full'
    >
      <p className='text-white font-black text-[32px] md:text-[48px]'>"</p>

      <div className='mt-1'>
        <motion.p
          className='text-white tracking-wider text-sm md:text-lg leading-relaxed'
          animate={{ height: "auto" }}
        >
          {isExpanded ? testimonial : truncatedText}{" "}
          {testimonial.length > 100 && (
            <span
              className='text-blue-400 cursor-pointer text-xs md:text-sm'
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? " Show less" : " Read more"}
            </span>
          )}
        </motion.p>

        <div className='mt-7 flex justify-between items-center gap-1'>
          <div className='flex-1 flex flex-col'>
            <p className='text-white font-medium text-[14px] md:text-[16px]'>
              <span className='blue-text-gradient'>@</span> {name}
            </p>
            <p className='mt-1 text-secondary text-[10px] md:text-[12px]'>
              {designation} of {company}
            </p>
          </div>

          <img
            src={image}
            alt={`feedback_by-${name}`}
            className='w-8 h-8 md:w-10 md:h-10 rounded-full object-cover'
          />
        </div>
      </div>
    </motion.div>
  );
};

  
  

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className="-mt-20 pb-14 flex flex-wrap gap-7 justify-center">
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
