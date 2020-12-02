import React from 'react';
import emailjs from 'emailjs-com';
import {Contact_Title, ContType, MedIntBodyText} from '../styles/fonts';
import {Input, TextArea, Submit, Contacts} from '../styles/styles';
import {ContactContainer, ContactDetails, ContactFormHolder} from '../styles/Containers';


export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_crukxhd', 'template_qsaa0cb', e.target, 'user_rgfFg0ak7L5gJVFI8i3gR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset();
  }

  return (
    <div className="Contact-section">
        <ContactContainer>
            <ContactDetails>
                <Contact_Title>Let's work together.</Contact_Title>

                <Contacts>
                    <ContType>Phone</ContType>
                    <MedIntBodyText>+27 622 868 775</MedIntBodyText>
                </Contacts>

                <Contacts>
                    <ContType>Email Address</ContType>
                    <MedIntBodyText>shiluva1202@gmail.com</MedIntBodyText>
                </Contacts>

            </ContactDetails>

            <ContactFormHolder>
                <form className="contact-form" onSubmit={sendEmail}>
                    <Input type="text" placeholder="Name and Surname" name="from_name"></Input><br></br>
                    <Input type="text" placeholder="Email Address" name="reply_to"></Input><br></br>
                    <Input type="text" placeholder="Subject" name="subject"></Input><br></br>
                    <TextArea placeholder="write your message here..." name="message"></TextArea><br></br>
                    <Submit type="submit" value="Send"/>
                </form>
            </ContactFormHolder>

        </ContactContainer>
    </div>
  );
}