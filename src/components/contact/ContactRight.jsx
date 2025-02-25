import React from 'react'
import ContactSingleInfo from './ContactSingleInfo'
import ContactSingleSocial from './ContactSingleSocial';
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone, FiGithub } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

const ContactRight = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-12'>
      <img src="/images/email-image.png" alt="Contact Me" className='max-w-[300px]' />
      <div className='flex flex-col gap-4 text-gray-800 dark:text-gray-100'>
        <ContactSingleInfo text="gracefengye@gmail.com" Image={HiOutlineMail} />
        <ContactSingleInfo text="+1 226-791-1188" Image={FiPhone} />
        <ContactSingleInfo text="Oakville, Ontario" Image={IoLocationOutline} />
      </div>
      <div className='flex gap-4'>
        <ContactSingleSocial Icon={FaLinkedinIn} link='#' />
        <ContactSingleSocial Icon={FiGithub} link='#' />
        <ContactSingleSocial Icon={FaInstagram} link='#' />
      </div>

    </div>
  )
}

export default ContactRight