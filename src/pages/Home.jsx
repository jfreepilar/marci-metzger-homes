import {useState} from 'react';
import marciMetzger from '../assets/images/marci-metzger.webp';
import { IoCall } from "react-icons/io5";
import Button from '../components/Button';
import smoke from '../assets/images/smoke.png';
import { getItSoldObject} from '../arrays-objects/getItSoldObject';
import { useSelector, useDispatch } from 'react-redux';
import { updateFormData } from '../redux/formSlice';
import Carousel from '../components/Carousel';
import { carouselImgArray } from '../arrays-objects/carouselImgArray';
import { ourServicesObject, ourServicesObjectTwo } from '../arrays-objects/ourServicesObject';
import { FaWhatsapp } from "react-icons/fa";
import { socialMediaLogo } from '../arrays-objects/socialMedia';


export const padding = "px-24";

  
export default function Home() {

  const formData = useSelector((state) => state.form);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormData({ name, value }));
  };

  const handleSubmit = () => {
    console.log('Form data:', formData);
  };

    return (
      <>
        <section className="text-white mb-20 lg:mb-10">
          <div className={`relative flex flex-col lg:flex-row bg-[url('assets/images/background-2.png')] bg-cover h-[880px] lg:h-[700px]`}>
            <div className="flex flex-col items-center justify-center pt-15 mb-30 ps-24">
              <div className="absolute top-0 left-0 w-full h-full bg-[rgba(27,27,27,0.4)] z-0"></div>
              <div className="relative z-30">
                <h1 className="font-cinzel text-4xl lg:text-6xl font-bold">MARCI MERTZGER <br/> THE RIDGE REALTY GROUP</h1>
                <h2 >PAHRUMP REALTOR</h2>
                <Button buttonProps={{text: "CALL NOW", backgroundColor: "bg-gray-400", textColor: "text-white"}}/>
              </div>
            </div>

            <div className="relative flex w-full justify-center lg:w-1/2 mt-[-80px] sm:mt-[-40px] md:mt-[-52px] lg:mt-[122px] mr-[150px]">
              <img src={marciMetzger} 
                    alt="Photo of Ms. Marci Metzger"
                    className="h-[578px]"/>

              <div className="relative w-[300px] mt-[440px] ml-[-320px] sm:ml-[-420px] z-30">
                <h3 className="font-bold">MARCI METZGER</h3>
                <p>REALTOR FOR NEARLY 3 DECADES!</p>
                <div className="flex cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out ">
                  <span className="text-xl mt-1 mr-1"><IoCall /></span>
                  <p className="font-bold text-xl">206-919-6886</p>
                </div>
              </div>
            </div>
          </div>
          <img src={smoke} alt="Smoke" className="h-[320px] mt-[-320px] relative z-20 w-full" />
        </section>

        <section className={`${padding} pb-4`}>
          <h2 className="text-center font-bold">Get It Sold</h2>
          <div className="w-full flex flex-col lg:flex-row justify-around items-center gap-4">
            {getItSoldObject.map((item, index) => (
              <div key={index}
                   className="relative w-[400px] shadow-black shadow-lg overflow-hidden group rounded-t-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[400px]"/>

                <div className={`absolute pb-2 top-90 inset-0 flex flex-col justify-center items-center text-center transition-transform duration-300 ease-in-out group-hover:"translate-y-[-90%] text-white`}>

                <div className={`transform ${index === 0 ? "translate-y-18 group-hover:translate-y-[-35%]" : "translate-y-12 group-hover:translate-y-[-30%]"} transition-transform duration-300 ease-in-out pb-4 bg-[rgba(27,27,27,0.7)]`}>
                    <h3 className="font-bold mb-0 sm:mb-2.5">{item.title}</h3>
                    <p>{item.paragraph}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="relative mt-10 bg-[url('assets/images/background-1.png')] bg-cover py-20">
          <div className="absolute top-0 bg-[rgba(27,27,27,0.3)] w-full h-full z-0"></div>
          <div className="relative w-[90%] sm:max-w-4xl mx-auto mt-10 p-8 bg-gradient-to-br from-gray-50 to-gray-200 rounded-lg z-20 shadow-black shadow-xl/20">
            <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800 tracking-wide">
              Find Your Perfect Home
            </h2>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
                  Location
                </label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="mt-2 w-full p-1 border-b-2 border-gray-300 focus:border-indigo-500 bg-transparent outline-none transition-all duration-300"
                >
                  <option value="">Select Location</option>
                  <option value="City Center">City Center</option>
                  <option value="Suburbs">Suburbs</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
                  Property Type
                </label>
                <select
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                  className="mt-2 w-full p-1 border-b-2 border-gray-300 focus:border-indigo-500 bg-transparent outline-none transition-all duration-300"
                >
                  <option value="">Any Type</option>
                  <option value="Apartment">Apartment</option>
                  <option value="House">House</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
                  Bedrooms
                </label>
                <input
                  type="number"
                  name="bedrooms"
                  value={formData.bedrooms}
                  onChange={handleChange}
                  placeholder="Any Number"
                  className="mt-2 w-full p-1 border-b-2 border-gray-300 focus:border-indigo-500 bg-transparent outline-none transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
                  Baths
                </label>
                <input
                  type="number"
                  name="baths"
                  value={formData.baths}
                  onChange={handleChange}
                  placeholder="Any Number"
                  className="mt-2 w-full p-1 border-b-2 border-gray-300 focus:border-indigo-500 bg-transparent outline-none transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
                  Minimum Price
                </label>
                <input
                  type="number"
                  name="minPrice"
                  value={formData.minPrice}
                  onChange={handleChange}
                  placeholder="No Min"
                  className="mt-2 w-full p-1 border-b-2 border-gray-300 focus:border-indigo-500 bg-transparent outline-none transition-all duration-300"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
                  Maximum Price
                </label>
                <input
                  type="number"
                  name="maxPrice"
                  value={formData.maxPrice}
                  onChange={handleChange}
                  placeholder="No Max"
                  className="mt-2 w-full p-1 border-b-2 border-gray-300 focus:border-indigo-500 bg-transparent outline-none transition-all duration-300"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
                  Sort By
                </label>
                <select
                  name="sortBy"
                  value={formData.sortBy}
                  onChange={handleChange}
                  className="mt-2 w-full p-1 border-b-2 border-gray-300 focus:border-indigo-500 bg-transparent outline-none transition-all duration-300"
                >
                  <option value="">Default</option>
                  <option value="Price Asc">Price Ascending</option>
                  <option value="Price Desc">Price Descending</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-indigo-600 cursor-pointer text-white font-semibold p-4 rounded-lg hover:bg-indigo-700 hover:shadow-lg transition duration-300"
                >
                  Search Now
                </button>
              </div>
            </form>
          </div>



        </section>
        
        <section className="relative h-screen">
          <div className={`absolute top-8 left-8 sm:left-30 z-10 text-white p-4 bg-[rgba(27,27,27,0.7)] rounded-lg max-w-md`}>
            <h2 className="text-3xl font-bold">Where Dreams Begin — One Home at a Time</h2>
            <p className="mt-2 text-sm text-gray-300">Explore beautiful residential areas and find the perfect place to call home.</p>
          </div>
          <Carousel images={carouselImgArray} />
        </section>

        <section className={`${padding} mt-18`}>
          <h2 className="text-center font-bold">Our Services</h2>
          <div>
            {ourServicesObjectTwo.map((item, index) => (
              <p key={index} className="text-center text-xl mb-4">{item}</p>
            ))}

          </div>
          <div className="flex flex-col lg:flex-row justify-around items-center gap-4 mt-10">
            {ourServicesObject.map((item, index) => (
            <div key={index}
                className="group perspective w-[300px] h-[330px] mx-auto">

              <div className="relative w-full h-full transition-transform duration-500 transform preserve-3d group-hover:rotate-y-180">
        
                <div className="absolute w-full h-full backface-hidden z-20">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover rounded-lg"/>
                </div>

                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-lg flex shadow-lg shadow-black flex-col justify-center items-center px-4 text-center z-10">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.paragraph}</p>
                </div>
              </div>
            </div>
            ))}

          </div>

        </section>

        <section className={`${padding} my-18`}>
          <h2 className="text-center font-bold">Contact or Visit Us</h2>
          <div className="flex flex-col lg:flex-row justify-content-evenly mt-6 gap-4">
            <div className="max-w-xl mx-auto p-6 bg-gray-50 rounded-lg shadow-md">
              <h3 className="mb-6 text-center text-black">Send an Email</h3>
                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Enter your name"
                      className="w-full p-4 border border-transparent rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-600  focus:ring-1 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="email">Email*</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                      className="w-full p-4 border border-transparent rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-600  focus:ring-1 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      placeholder="Write your message here..."
                      className="w-full p-4 border border-transparent rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:border-indigo-600  focus:ring-1 focus:ring-indigo-600"
                      rows="4"
                    ></textarea>
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="w-3/4 md:w-full bg-indigo-600 cursor-pointer text-white font-semibold p-4 rounded-lg hover:bg-indigo-700 hover:shadow-lg transition duration-300">
                      SEND
                    </button>
                  </div>

                </form>
                <p className="text-gray-500 text-sm mt-4 text-center">
                  Protected by reCAPTCHA and Google Privacy Policy & Terms of Service.
                </p>
            </div>

            <div className="max-w-xs md:max-w-lg mx-auto p-6 bg-gray-50 rounded-lg shadow-md flex flex-col items-center">
              <div className="flex bg-gray-400 max-w-md justify-center rounded-lg hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer p-3 mb-4">
              <span className="text-white text-2xl mt-1 mr-1"><FaWhatsapp /></span>
              < button className="text-sm md:text-2xl text-white cursor-pointer font-semi-bold"> Message Us on WhatsApp</button>
              </div>
              

              <h1 className="text-3xl  font-cinzel font-semi-bold text-gray-800 mb-2">Marci Metzger - <br/> THE RIDGE REALTY GROUP</h1>
              <p className="text-gray-600 mb-1">3190 HW-160, Suite F, Pahrump, Nevada 89048, United States</p>
              <p className="text-gray-600 mb-4">(206) 919-6886</p>

              <h3 className="text-lg text-gray-800 mb-2">Office Hours</h3>
              <p className="text-gray-600">Open daily: 8:00 AM - 7:00 PM</p>
              <p className="text-gray-600">Appointments outside office hours available upon request. Just call!</p>

              <div className="mt-6">
                <h3 className="text-center">Follow Us</h3>
                <div className="flex">
                  {socialMediaLogo.map((item, index) => (
                    <div key={index}>
                      <img src={item}
                          alt="Social Media Logo" 
                          className="w-[80px] cursor-pointer hover:scale-110 transform-transition duration-300 ease-in-out"/>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center mx-auto bg-gray-100 justify-center rounded-lg p-4 mt-10 mb-4">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11149.442889936025!2d-115.95994383829627!3d36.18152361170713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c6398c31855555%3A0xca2c250302350734!2s3190%20NV-160%20Suite%20F%2C%20Pahrump%2C%20NV%2089048%2C%20USA!5e0!3m2!1sen!2sph!4v1744038868968!5m2!1sen!2sph" 
                    width="100%"     
                    height="450" 
                    style={{border: "0", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"}} 
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
              </iframe>
          </div>



          

        </section>



      
      </>
    )
  }
