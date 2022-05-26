import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import { GoMail, GoLocation } from "react-icons/go";



const ContactH = () => {
    return (
        <div>
            <div className='text-center my-20'>
                <h2 className='text-secondary text-3xl'>Send us your questions and requests.</h2>
                <h2 className='text-secondary text-4xl font-bold'>WE WANT TO HEAR FROM YOU</h2>
                <div className="mt-5 w-20 h-2 mx-auto bg-primary"></div>
            </div>
            <div className='max-w-screen-xl mx-auto grid lg:grid-cols-3 grid-cols-1'>
                <div className='space-y-10 pl-10 lg:pl-0'>
                    <h2 className='text-3xl text-secondary'>Fill The Form or<br /> <span className='text-4xl font-bold text-secondary uppercase'>Call Us</span></h2>
                    <div className='flex items-center'>
                        <FaPhoneAlt className='w-8 h-8 mr-5' />
                        <div>
                            <p>00123456789</p>
                            <p>Don’t hesitate to contact us</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <GoMail className='w-8 h-8 mr-5' />
                        <div>
                            <p>info@toolmaster.com</p>
                            <p>If you have any query to contact us</p>
                        </div>
                    </div>
                    <div className='flex items-center'>
                        <GoLocation className='w-8 h-8 mr-5' />
                        <div>
                            <p>350 Flatbush ave New York</p>
                            <p>NY 10018 USA.</p>
                        </div>
                    </div>
                </div>
                <div className='lg:col-span-2'>
                    <div className="card-body">
                        <div className='lg:flex w-full gap-5'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Company</span>
                                </label>
                                <input type="text" placeholder="Company" className="input input-bordered" />
                            </div>
                        </div>
                        <div className='lg:flex w-full gap-5'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">E-mail Address</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input type="text" placeholder="Phone" className="input input-bordered" />
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Message</span>
                            </label>
                            <textarea className="textarea textarea-bordered h-24" placeholder="Message"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-white font-bold">send message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactH;