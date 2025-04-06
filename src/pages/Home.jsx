import React from 'react';
import marciMetzger from '../assets/images/marci-metzger.webp';
import { IoCall } from "react-icons/io5";
import Button from '../components/Button';
import { getItSoldObject} from '../arrays-objects/getItSoldObject';



  const padding = "px-24";

  export default function Home() {
    

    return (
      <div>
        <section className="text-white">
          <div className={`relative flex flex-col lg:flex-row bg-[url('assets/images/background-2.png')] bg-cover h-screen`}>
            <div className="flex flex-col items-start pt-10 py-15 ps-24">
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-0"></div>
              <div className="relative z-10">
                <h1 className="font-cinzel text-4xl md:text-6xl font-bold">MARCI MERTZGER <br/> THE RIDGE REALTY GROUP</h1>
                <h2 >PAHRUMP REALTOR</h2>
                <Button buttonProps={{text: "CALL NOW", backgroundColor: "bg-gray-400", textColor: "text-white"}}/>
              </div>
            </div>

            <div className="relative bg-gray-400 flex flex-col ps-24 md:ps-0 items-start md:items-center w-full lg:w-1/2 py-10">
              <h2 className="font-bold">MARCI METZGER</h2>
              <p>REALTOR FOR NEARLY 3 DECADES!</p>
              <div className="flex cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out ">
                <span className="text-xl mt-1 mr-1"><IoCall /></span>
                <p className="font-bold text-xl">206-919-6886</p>
              </div>
              
              <img src={marciMetzger} 
                  alt="Photo of Ms. Marci Metzger"
                  className="rounded-full shadow-2xl shadow-black mt-4 w-[320px] md:w-[350px]"/>
            </div>
          </div>
        </section>

        <section className={`${padding} py-10`}>
          <h2 className="text-center">Get It Sold</h2>
          <div className="w-full flex flex-col lg:flex-row justify-around items-center gap-4">
            {getItSoldObject.map((item, index) => (
              <div key={index}
                  className="relative w-[400px] shadow-black shadow-lg overflow-hidden group">
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

      </div>

    )
  }
