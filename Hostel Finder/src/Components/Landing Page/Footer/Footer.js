// import { Button } from '../Button'
import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='sign-up'>How it works</Link>
                        <Link to="/">Testimonials</Link>
                        <Link to="/">Careers</Link>
                        <Link to="/">Investors</Link>
                        <Link to="/">Terms of Services</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Contact Us</h2>
                        <Link to='sign-up'>Contact</Link>
                        <Link to="/">Support</Link>
                        <Link to="/">Destinations</Link>
                        <Link to="/">Sponsorships</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    {/* <div className='footer-link-items'>
                        <h2>Videos</h2>
                        <Link to='sign-up'>Submit Video</Link>
                        <Link to='/'>Ambassadors</Link>
                        <Link to="/">Agency</Link>
                        <Link to="/">Influencer</Link>
                    </div> */}
                    <div className='footer-link-items'>
                        <h2>Social Media</h2>
                        <Link to='sign-up'>Instagram</Link>
                        <Link to="/">Facebook</Link>
                        <Link to="/">Youtube</Link>
                        <Link to="/">Twitter</Link>
                    </div>
                </div>
            </div>
            <section className='social-media'>
                <div className='social-media-wrap'>
                    {/* <div className="footer-logo">
                        <Link to="/" className='social-logo'>
                        HF <i className="fab fa-typo3"></i>
                        </Link>
                    </div> */}
                    <small className='website-rights'>
                    HOSTEL FINDER ©️ 2021</small>
                    <div className="social-icons">
                        <Link to="/" target="_blank" 
                        aria-label="Facebook"
                        className="social-icon-link facebook">
                            <i className='fab fa-facebook-f' />
                        </Link>
                        <Link to="/" target="_blank" 
                        aria-label="Instagram"
                        className="social-icon-link instagram">
                            <i className='fab fa-instagram' />
                        </Link>
                        <Link to="/" target="_blank" 
                        aria-label="Youtube"
                        className="social-icon-link youtube">
                            <i className='fab fa-youtube' />
                        </Link>
                        <Link to="/" target="_blank" 
                        aria-label="Twitter"
                        className="social-icon-link twitter">
                            <i className='fab fa-twitter' />
                        </Link>
                        <Link to="/" target="_blank" 
                        aria-label="Linked"
                        className="social-icon-link linkedin">
                            <i className='fab fa-linkedin' />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
