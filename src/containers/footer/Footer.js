import React from "react";
import './Footer.css';
import gpt3Logo from '../../assets/logo.svg';

const Footer=()=>{
    return(
        <div className="gpt3__footer section__padding">
            <div className="gpt3__footer-heading">
                <h2 className="gradient__text">Come, Explore AI!</h2>
            </div>

            <div className="gpt3__footer-btn">
                <p>Request to get access</p>
            </div>

            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                    <img src={gpt3Logo} alt="logo"/>
                    <p>The copyright of this site lies with the creators.</p>
                </div>

                <div className="gpt3__footer-links-div">
                    <h4>Links</h4>
                    <p>Social Media</p>
                    <p>Contacts</p>
                </div>

                <div className="gpt3__footer-links-div">
                    <h4>Company</h4>
                    <p>Terma and conditions</p>
                    <p>Privacy policy</p>
                </div>

                <div className="gpt3__footer-links-div">
                    <h4>Get in touch</h4>
                    <p>E-Mail: groffr98@yahoo.com</p>
                    <p>Phonr: +91 9836671737</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;