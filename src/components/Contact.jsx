import React, { useState } from "react";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "@hooks";
import { slideIn } from "@utils/motion";
import ModalFl from "./ModalFl";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email address").required("Email is required").not(["mouadfliti@gmail.com"], "Email cannot be mine"),
      message: Yup.string().trim().required("Message cannot be empty"),
    }),
    onSubmit: (values, { resetForm }) => {
      setLoading(true);

      emailjs
        .send(
          import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_APP_EMAILJS_TEMPLATEID,
          {
            from_name: values.name,
            to_name: import.meta.env.VITE_APP_EMAILJS_RECEIVERID,
            from_email: values.email,
            to_email: import.meta.env.VITE_APP_EMAILJS_USER_ID,
            message: values.message,
          },
          import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setLoading(false);
            openModal();
            resetForm();
          },
          (error) => {
            setLoading(false);
            console.error(error);
            alert("Ahh, something went wrong. Please try again.");
          }
        );
    },
  });

  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div variants={slideIn("left", "tween", 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form onSubmit={formik.handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              placeholder="What's your good name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            {formik.touched.name && formik.errors.name ? (
              <p className='text-red-400 text-sm'>{formik.errors.name}</p>
            ) : null}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="What's your email address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            {formik.touched.email && formik.errors.email ? (
              <p className='text-red-400 text-sm'>{formik.errors.email}</p>
            ) : null}
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              placeholder='What you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
            {formik.touched.message && formik.errors.message ? (
              <p className='text-red-400 text-sm'>{formik.errors.message}</p>
            ) : null}
          </label>
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div variants={slideIn("right", "tween", 0.2, 1)} className='xl:flex-1 xl:h-[800px] xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
      <ModalFl isOpen={isModalOpen} onRequestClose={closeModal} width="max-w-xl" height="h-1/4" title="Message Sent">
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className=" p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold  mb-4">Thank You!</h2>
            <p className=" mb-6">We’ve received your message and will get back to you as soon as possible.</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300" onClick={closeModal}>
              OK
            </button>
          </div>
        </div>
      </ModalFl>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
