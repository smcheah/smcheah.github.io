import React, { useState } from "react";
import emailjs from 'emailjs-com';

const ContactForm = () => {

    const CONTACT_SERVICE = 'service_1p6pjh4';
    const CONTACT_FORM = 'template_vh5iumn';
    const USER_ID = 'user_0COEWeyhHdeMd90VxJkG0';

    const [submit, setSubmit] = useState("Send");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmit("Sending...")

        // these IDs from the previous steps
        emailjs.sendForm(CONTACT_SERVICE, CONTACT_FORM, document.getElementById('contact-form'), USER_ID)
            .then(function () {
                console.log('SUCCESS!');
                setSubmit("Message Sent!");
                document.getElementById('name').value = "";
                document.getElementById('email').value = "";
                document.getElementById('message').value = "";

            }, function (error) {
                console.log('FAILED...', error);
                    setSubmit("Error! Please email Simone instead.");
            });
    };

    return (
        <form id="contact-form" onSubmit={ handleSubmit }>

            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="user_name" placeholder="John Doe" required />

            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="user_email" placeholder="test@example.com" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" required placeholder="Please enter your query here"></textarea>

            <input type="submit" value={ submit } />

        </form>
    );
};

export default ContactForm;