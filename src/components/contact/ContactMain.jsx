import ContactText from './ContactText';
import ContactInfo from './ContactInfo';

const ContactMain = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-20 px-6 text-center bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100"
    >
      <ContactText />

      <ContactInfo />
    </section>
  );
};

export default ContactMain;
