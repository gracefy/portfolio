import React from 'react'
import ContactSingleInfo from './ContactSingleInfo'
import ContactSingleSocial from './ContactSingleSocial';
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone, FiGithub } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";


// Right side of the contact section
const ContactRight = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-12'>
      <img src={`${import.meta.env.BASE_URL}images/email-image.png`} alt="Contact Me" className='max-w-[240px]' />
      <div className='flex flex-col gap-4 text-gray-800 dark:text-gray-100'>
        <ContactSingleInfo text="gracefengye@gmail.com" Image={HiOutlineMail} />
        <ContactSingleInfo text="+1 226-791-1188" Image={FiPhone} />
        <ContactSingleInfo text="Oakville, Ontario" Image={IoLocationOutline} />
      </div>
      <div className='flex gap-4'>
        <ContactSingleSocial Icon={FaLinkedinIn} link='https://www.linkedin.com/in/gracefengye/' />
        <ContactSingleSocial Icon={FiGithub} link='https://github.com/GraceFengYe' />
        {/* <ContactSingleSocial Icon={FaInstagram} link='#' /> */}
      </div>

    </div>
  )
}

export default ContactRight