import React from 'react';
import './contact.css';
import FacebookIcon from "../../assets/facebook-icon.png"
import TwitterIcon from "../../assets/twitter.png"
import InstagramIcon from "../../assets/instagram.png"

const Contact = () => {
    return (
        <section id="contactPage">
            <div id="contact">
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className="contactDesc">
                    Please fill out the form if you have any questions!
                </span>
                <form className='contactForm'>
                    <input type='text' className='name' placeholder='Your Name'/>
                    <input type='email' className='email' placeholder='Email'/>
                    <textarea lassName='msg' name="message" rows="5" placeholder='Your message here'></textarea>
                    <button type="submit" value="Send" className="submitBtn">Submit</button>
                    <div className='links'>
                        <img src={FacebookIcon} alt="Facebook" className='link'/>
                        <img src={TwitterIcon} alt="Twitter" className='link'/>
                        <img src={InstagramIcon}  alt="Instagram" className='link'/>

                    </div>
                </form>
            </div>
        </section>

    )
}

export default Contact