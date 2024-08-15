import React, { useState, useEffect, useContext } from 'react';
import Banner from '../Banner/Banner';
import PopularCategory from './PopularCategory';
import { ProductContext } from '../../context/ProductProvider';
import { CartContext } from '../../context/CartProvider';
import About from './About';
import Review from './Review';
import Newsletter from './Newsletter';
import { FaSearch } from 'react-icons/fa';
import { motion } from "framer-motion"

const Home = () => {
    const { products, showAllData } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);

    const handleSearch = () => {
        if (searchTerm === '') {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(product =>
                product.phoneName.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredProducts(filtered);
        }
    };
    return (
        <div className='font-poppins'>
            <Banner />
            {/* features */}
            <section>
                <div className=' space-y-3 py-7'>
                    <h1 className='text-2xl font-semibold'>Our Features</h1>
                    <p className='lg:w-1/2 mx-auto w-full text-lg'>
                        Our Features Our FeaturesOur FeaturesOur FeaturesOur FeaturesOur FeaturesOur FeaturesOur FeaturesOur FeaturesOur FeaturesOur FeaturesOur FeaturesOur Features.
                    </p>
                </div>
                <div className='py-24 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-8 gap-24'>
                    <div data-aos="fade-up"
                        data-aos-duration="3000" className=' relative group'>
                        <div className='border-2 transition-all duration-300 group-hover:bg-violet-800 absolute left-0 right-0 -top-16 bg-white w-20 h-20 flex justify-center items-center mx-auto rotate-45'>
                            <i className="fas fa-mobile-alt rotate-0 textColor group-hover:text-white text-xl"></i>
                        </div>
                        <div className='border border-gray-800 hover:border-violet-800 content py-12 px-4 space-y-2'>
                            <h2 className='text-xl font-semibold'>Latest Smart Laptops</h2>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look
                            </p>
                        </div>
                    </div>
                    <div data-aos="fade-up"
                        data-aos-duration="3000" className=' relative group'>
                        <div className='border-2 duration-300 transition-all group-hover:bg-violet-800 absolute left-0 right-0 -top-16 bg-white w-20 h-20 flex justify-center items-center mx-auto rotate-45'>
                            <i className="fas fa-mobile-alt rotate-0 textColor group-hover:text-white text-xl"></i>
                        </div>
                        <div className='border border-gray-800 hover:border-violet-800 content py-12 px-4 space-y-2'>
                            <h2 className='text-xl font-semibold'>Latest Smart Laptops</h2>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look
                            </p>
                        </div>
                    </div>
                    <div data-aos="fade-up"
                        data-aos-duration="3000" className=' relative group'>
                        <div className='border-2 duration-300 transition-all group-hover:bg-violet-800 absolute left-0 right-0 -top-16 bg-white w-20 h-20 flex justify-center items-center mx-auto rotate-45'>
                            <i className="fas fa-mobile-alt rotate-0 textColor group-hover:text-white text-xl"></i>
                        </div>
                        <div className='border border-gray-800 hover:border-violet-800 content py-12 px-4 space-y-2'>
                            <h2 className='text-xl font-semibold'>Latest Smart Laptops</h2>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* end features */}

            {/* latest laptops section */}
            <section>
                <div className=' space-y-3 py-7'>
                    <h1 className='text-2xl font-semibold'>Latest Laptops</h1>
                </div>

                <div className='text-center flex flex-col md:flex-row items-center justify-center gap-3 mt-3'>
                    <div className="relative w-full  max-w-xl">
                        <input
                            type="text"
                            placeholder="Type product name"
                            className="input rounded-full border-violet-800 w-full pr-10"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <FaSearch
                            onClick={handleSearch}
                            className="absolute text-2xl right-4 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                        />
                    </div>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-2 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5 mt-8 py-5'>
                    {filteredProducts.map((product, i) => (
                        <motion.div initial={{ opacity: 0, translateX: i % 2 === 0 ? -50 : 50, translateY: -50 }} animate={{ opacity: 1, translateX: 0, translateY: 0 }} transition={{ duration: 0.9, delay: i + 0.2 }} key={product?.id} className=' relative group w-full h-full border rounded-md bg-white shadow-lg py-6'>
                            <div className=' space-y-2 mt-4 absolute top-0 right-2 transition-all duration-300 opacity-0 group-hover:opacity-100'>
                                <div><i className="fas fa-search w-8 h-8 rounded-full flex justify-center items-center text-sm bg-violet-800 text-white"></i></div>
                                <div><i className="fas fa-heart w-8 h-8 rounded-full flex justify-center items-center text-sm heartColor text-white"></i></div>
                            </div>
                            <img className='w-[250px] mx-auto' src={product?.img} alt='' />
                            <div className='text-center '>
                                <h1 className='text-violet-800 text-lg font-semibold mt-4'>{product?.phoneName}</h1>
                                <p className='text-md flex items-center justify-center gap-6'>
                                    <span className='textColor font-semibold'>${product?.presentPrice}</span>
                                    <span className=' text-gray-500 font-semibold line-through'>${product?.previousPrice}</span>
                                </p>
                                <div className='text-md flex items-center justify-center gap-6'>
                                    <div>
                                        <i className="fas fa-star text-yellow-400 text-sm"></i>
                                        <i className="fas fa-star text-yellow-400 text-sm"></i>
                                        <i className="fas fa-star text-yellow-400 text-sm"></i>
                                        <i className="fas fa-star text-yellow-400 text-sm"></i>
                                        <i className="fas fa-star text-yellow-400 text-sm"></i>
                                        <span className='ml-2'>({product?.review})</span>
                                    </div>
                                    <span className=' text-gray-500 font-semibold'>Qty: {product?.quantity < 0 ? 0 : product?.quantity} pcs</span>
                                </div>
                                {product?.quantity < 0 || product?.quantity == 0 ? <button disabled onClick={() => addToCart(product, product?.id)} className='bg-[#a2b7ea] py-2 px-16 rounded-md text-white font-semibold my-8'><span className='font-semibold text-xl'>+</span> Add to Cart</button> : <button onClick={() => addToCart(product, product?.id)} className='bg-violet-800 py-2 px-16 rounded-md text-white font-semibold my-8'><span className='font-semibold text-xl'>+</span> Add to Cart</button>}
                            </div>
                        </motion.div>
                    ))}
                </div>
                <p class="text-center mt-6 hidden" id="see-more">
                    <button className='bg-violet-800 text-white py-2 px-5 font-semibold rounded-md' onClick={showAllData} type="button">View All Products</button>
                </p>
            </section>
            {/* end latest laptops section */}

            <PopularCategory />
            <About />
            <Review />
            <Newsletter />
        </div>
    );
};

export default Home;