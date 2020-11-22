import '../App.css';
import React, {Component} from 'react';
import {Contact_Title, ContType, MedIntBodyText} from '../styles/fonts';
import {Input, TextArea, Submit, Contacts} from '../styles/styles';
import {ContactContainer, ContactDetails, ContactFormHolder} from '../styles/Containers';


class Contact extends Component{
    render(){
        return(
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
                            <MedIntBodyText>me@shiluvafortunate.co.za</MedIntBodyText>
                        </Contacts>

                    </ContactDetails>

                    <ContactFormHolder>
                        <form>
                            <Input type="text" placeholder="Name and Surname"></Input><br></br>
                            <Input type="text" placeholder="Email Address"></Input><br></br>
                            <Input type="text" placeholder="Subject"></Input><br></br>
                            <TextArea placeholder="write your message here..."></TextArea><br></br>
                            <Submit type="submit" value="Send"/>
                        </form>
                    </ContactFormHolder>
                </ContactContainer>
            </div>
        );
    }
}

export default Contact;