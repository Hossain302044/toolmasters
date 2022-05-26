import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-base-200 '>
            <div className="footer max-w-screen-xl mx-auto p-20 text-base-content">
                <div>
                    <div className="text-primary font-bold text-3xl">Tool<span className='text-secondary'>Masters</span></div>
                    <p>TOOLMASTERS Industries Ltd.<br />Providing reliable tech since 1992</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <div className="text-[16px] hover:text-primary link link-hover">Branding</div>
                    <div className="text-[16px] hover:text-primary link link-hover">Design</div>
                    <div className="text-[16px] hover:text-primary link link-hover">Marketing</div>
                    <div className="text-[16px] hover:text-primary link link-hover">Advertisement</div>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <div className="text-[16px] hover:text-primary link link-hover">About us</div>
                    <div className="text-[16px] hover:text-primary link link-hover">Contact</div>
                    <div className="text-[16px] hover:text-primary link link-hover">Jobs</div>
                    <div className="text-[16px] hover:text-primary link link-hover">Press kit</div>
                </div>
                <div>
                    <span className="footer-title">Newsletter</span>
                    <div className="form-control w-80">
                        <label className="label">
                            <span className="label-text text-[16px]">Enter your email address</span>
                        </label>
                        <div className="relative">
                            <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <div>
                    <p>Copyright © 2022 - All right reserved by ToolMasters</p>
                </div>
            </footer>
        </footer>

    );
};

export default Footer;