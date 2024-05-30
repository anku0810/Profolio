import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="custom-footer-container">
            <div className="custom-footer-section">
                <h3 className='custom-footer-heading'>Profolio</h3>
                <p className='custom-footer-description'>"Transform your career aspirations into reality with resumes that showcase your talents in style."</p>
                <div className="custom-footer-icons">
                    <a href="https://m.facebook.com/profile.php/?id=100013555248948&name=xhp_nt_" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                    <a href="https://twitter.com/ANKITPRAJAPATH3?t=ZeKrlHN8ioaVMpFCXiQDkg&s=09" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.instagram.com/_ankit_praju/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href="https://in.linkedin.com/in/ankit-prajapathi-a-388596244?trk=public_profile_browsemap" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            <div className="custom-footer-section">
                <h5 className="custom-footer-heading">Quick Links</h5>
                <ul className="custom-footer-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="#resume">Resume</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div>
            <div className="custom-footer-section">
                <h5 className="custom-footer-heading">Contact</h5>
                <p className='custom-footer-info'><i className="fas fa-phone-volume"></i> +91 9003327373</p>
                <p className='custom-footer-info'><i className="fas fa-envelope"></i> profolio1234@gmail.com</p>
                <p className='custom-footer-info'><i className="fas fa-paper-plane"></i> Uttar Pradesh, India.</p>
            </div>
            <div className="custom-footer-section">
                <p className="custom-copyright">©2024 Copyright Profolio - All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
