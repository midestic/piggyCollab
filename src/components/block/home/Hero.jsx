import React from "react";

import { FaApple } from "react-icons/fa";
import { RiArrowRightWideLine } from "react-icons/ri";
import Button from "../../reusable/Button";

const Hero = () => {
  return (
    <>
      <div className="bg-[#F2F7F8]">
        <div
          className="flex justify-between pt-[150px] max-w-[1280px] h-full px-16 mx-auto items-center  pb-[130px] flex-wrap max-md:max-w-[100%]
        max-md:flex-col max-md:gap-y-[50px]"
        >
          <section
            className="max-w-[450px] max-tablet:flex max-tablet:flex-col max-tablet:items-center max-md:w-[100%]
           max-tablet:text-center max-tablet:max-w-[600px] max-tablet:mb-6"
          >
            <a href="#">
              <div className="flex  items-center bg-[#0089FF] w-[350px] rounded-[48px] px-2.5 py-1.5 text-[white] gap-1.5 font-semibold mb-6 ">
                <img src="/images/booklogo.svg" alt="" className="book" />
                <h3>The 2024 PiggyVest Savings Report</h3>
                <RiArrowRightWideLine size={25} />
              </div>
            </a>
            <h1 className="font-bold text-[42px] leading-12 mb-6 text-[#122231]">
              The Better Way to Save & Invest
            </h1>
            <p className="text-lg mb-5 text-[#3D4F60]">
              Piggyvest helps over 5 million customers achieve their financial
              goals by helping them save and invest with ease.
            </p>
            <a href="#">
              <div className=" flex gap-2.5">
                <Button
                  iconTitle={<FaApple color="white" size={30} />}
                  title="Get on Iphone"
                  textColor="white"
                  bgColor="#122231"
                />
                <Button
                  srcTitle="/images/go.png"
                  title="Get on Android"
                  textColor="white"
                  bgColor="#122231"
                />
              </div>
            </a>
          </section>
          <section className="max-w-[550px] relative max-md:max-w-[95%] max-md:mx-auto">
            <img
              src="/images/lady.avif"
              alt=""
              className=" w-full h-[550px] "
            />
            <main>
              <img
                src="/images/image01.png"
                alt=""
                className="h-[60px] absolute left-[-14%] top-[75px] w-auto"
              />
              <img
                src="/images/image2.png"
                alt=""
                className="h-[85px] absolute right-[-8%] top-[45px] w-auto"
              />
              <img
                src="/images/image3.png"
                alt=""
                className="h-[75px] absolute left-[-11%] top-[240px] w-[212px]"
              />
              <img
                src="/images/image4.png"
                alt=""
                className="h-[65px] absolute right-[-10%] top-[280px] w-auto"
              />
              <img
                src="/images/image5.png"
                alt=""
                className="h-[70px] absolute left-[-11%] top-[430px] w-[180px]"
              />
              <img
                src="/images/image6.png"
                alt=""
                className="h-[75px] absolute right-[-7%] bottom-[-26px] w-auto"
              />
            </main>
          </section>
        </div>
      </div>
    </>
  );
};

export default Hero;
