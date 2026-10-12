import ContactForm from '../contactForm';
import ContactDetails from '../contactDetails';

const ContactSection = () => {
  return (
    <section className='w-full bg-mist'>
      <div className='section-inner-container grid grid-cols-1 items-stretch gap-12 pb-0 pt-16 sm:pt-20 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:pt-24 xl:gap-24'>
        <div className='pb-16 sm:pb-20 lg:pb-24'>
          <ContactForm />
        </div>
        <ContactDetails />
      </div>
    </section>
  )
}

export default ContactSection;