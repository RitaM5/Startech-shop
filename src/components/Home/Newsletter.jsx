import React, { useState } from 'react';
import { FaFacebookMessenger, FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa';
const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!validateEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }
        console.log('Form submitted:', email);
        setSuccess('Thank you for signing up for our newsletter!');
        setEmail('');
    };

    return (
        <div className='bg-[#000000e6] mt-16'>
            <div className="grid max-md:grid-cols-1 md:grid-cols-2 gap-6 md:gap-5 lg:gap-0 lg:grid-cols-3 grid-cols-1 text-white p-10 ">
                <div className=' space-y-3'>
                    <span className="footer-title font-caveat text-3xl text-left flex justify-start">Startech</span>
                    <p className='text-lg text-left'>
                        There are many variations of passages of lorem ipsum available, but the majority suffered.
                    </p>
                    <span className="footer-title text-left text-2xl flex pt-2 justify-start">Services</span>
                    <div className='grid grid-cols-1 lg:grid-cols-4  gap-3'>
                        <a className="link link-hover"><FaFacebookMessenger size={30} /></a>
                        <a className="link link-hover"><FaFacebook size={30} /></a>
                        <a className="link link-hover"><FaInstagram size={30} /></a>
                        <a className="link link-hover"><FaTwitter size={30} /></a>
                    </div>
                </div>
                <div className='ml-0 lg:ml-14'>
                    <span className="footer-title text-2xl text-left flex justify-start">Explore</span>
                    <div className='grid grid-cols-1 text-left gap-4 text-lg my-3'>
                        <a className="link link-hover">About</a>
                        <a className="link link-hover">services</a>
                        <a className="link link-hover">Our Projects</a>
                        <a className="link link-hover">Lates News</a>
                        <a className="link link-hover">Contact</a>
                    </div>
                </div>
                <div className='ml-0 '>
                    <span className="footer-title text-left text-2xl flex justify-start">Newsletter</span>
                    <div className="form-control w-80 space-y-5 mt-4">
                        <p className=' inline-flex gap-3 items-center'>
                            <span><FaPhone /></span>
                            <span>666 888 0000</span>
                        </p>
                        <p className='hidden md:flex gap-3 items-center'>
                            <span><FaEnvelope /></span>
                            <span>email</span>
                        </p>
                        <div className='w-full hidden md:flex gap-3 items-center'>
                            <span><FaMapMarker /></span>
                            <p className='w-full'>80 broklyn golden street line New York, USA</p>
                        </div>
                        <div className="relative w-48 md:w-full">
                            <form onSubmit={handleSubmit}>
                                <input type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} placeholder="email" className="input text-black input-bordered w-full" />
                                <button className="btn bg-[#4baf47] absolute top-0 right-0 rounded-l-none">
                                    <img src="https://img.icons8.com/ios/30/sent--v1.png" alt="sent--v1" />
                                </button>
                                {error && <p className="text-red-500 mt-2">{error}</p>}
                                {success && <p className="text-green-500 mt-4 text-center">{success}</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;