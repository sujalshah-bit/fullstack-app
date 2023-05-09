import React from 'react'
import {AiOutlineMail, AiOutlineHome, AiOutlinePhone } from 'react-icons/ai'
const Contact = () => {
  return (
    <>
        <section className="contacts">
            <div className="first_container mb-5">
                <div className="sub_container">
                    <h2><AiOutlinePhone fill='#0096FF'/></h2>
                    <div className="details">
                        <h3>Phone</h3>
                        +91234556
                    </div>
                </div>
                <div className="sub_container">
                    <h2><AiOutlineMail fill='#0096FF'/></h2>
                    <div className="details">
                        <h3>Email</h3>
                        <span>hioj@dd.com</span>
                    </div>
                </div>
                <div className="sub_container">
                    <h2><AiOutlineHome fill='#0096FF'/></h2>
                    <div className="details">
                        <h3>Address</h3>
                        <span>rajpurkjsdflkjsdflj</span>
                    </div>
                </div>
            </div>

            <div className="second_container">
                <form action="">
                <h1>Get In Touch</h1>
                <div className="input_fields">

                    <input type="text" placeholder='Your name'/>
                    <input type="email" placeholder='Your email'/>
                    <input type="number" placeholder='Your number'/>
                </div>
                <textarea name="message" id="message" cols="40" rows="15"></textarea>
                <button className='btn_contact' type="submit">Send Message</button>
                </form>
            </div>
        </section>
    </>
  )
}

export default Contact