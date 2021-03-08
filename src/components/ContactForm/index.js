import React, { useState } from "react";

const ContactForm = () => {

    const CONTACT_SERVICE = 'service_1p6pjh4';
    const CONTACT_FORM = 'template_vh5iumn';

    const handleSubmit = async (e) => {
        e.preventDefault();

        // these IDs from the previous steps
        emailjs.sendForm(CONTACT_SERVICE, CONTACT_FORM, this)
            .then(function () {
                console.log('SUCCESS!');
            }, function (error) {
                console.log('FAILED...', error);
            });
    };

    return (
        <form onSubmit={ handleSubmit }>

            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="user_name" placeholder="John Doe" required />

            <label htmlFor="email">Email</label>
            <input id="email" type="email" name="user_email" placeholder="test@example.com" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="6" required placeholder="Please enter your query here"></textarea>

            <input type="submit" value="Send" />

        </form>
    );
};

export default ContactForm;