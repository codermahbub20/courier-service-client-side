/* eslint-disable no-unused-vars */
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const Contact = () => {


  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      
  
      emailjs
        .sendForm('service_vp1tpsv', 'template_jbi26ao', form.current, {
          publicKey: 'T3RCrWQ-4dRYIw8jz',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
  
    };

    return (
        <div className="w-full mx-auto lg:w-[60%] h-full py-10 bg-secondary flex flex-col gap-8 p-4 lg:p-8 mb-5 mt-5  shadow-shadowOne">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 lg:gap-6 py-2 lg:py-5">
          {errMsg && (
            <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
              {errMsg}
            </p>
          )}
          {successMsg && (
            <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
              {successMsg}
            </p>
          )}
          <div
            className="w-full flex flex-col lg:flex-row gap-10"
            data-aos="zoom-in"
          >
            <div className="flex flex-col w-full gap-4" >
              <p className="text-sm text-gray-400 uppercase tracking-wide">
                Your name
              </p>
              <input
                type="text" name="from_name" 
                className={`${
                  errMsg === "Username is required!" &&
                  "outline-designColor"
                } contactInput h-12`}
                
              />
            </div>
          </div>
          <div className="flex flex-col gap-4" data-aos="zoom-in">
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              Email
            </p>
            <input
              type="email" name="from_email"
              className={`${
                errMsg === "Please give your Email!" &&
                "outline-designColor"
              } contactInput h-12`}
              
            />
          </div>
          <div className="flex flex-col gap-4" data-aos="zoom-in">
            <p className="text-sm text-gray-400 uppercase tracking-wide">
              Message
            </p>
            <textarea
              name="message"
              className={`${
                errMsg === "Message is required!" && "outline-designColor"
              } contactTextArea`}
              cols="30"
              rows="8"
            ></textarea>
          </div>
          <div className="w-full" data-aos="zoom-in">
            <button
              type="submit" value="Send"
              className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
            >
              Send Message
            </button>
          </div>
          {errMsg && (
            <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
              {errMsg}
            </p>
          )}
          {successMsg && (
            <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
              {successMsg}
            </p>
          )}
        </form>
      </div>
    );
};

export default Contact;