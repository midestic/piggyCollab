import React, { useState } from "react";
import { SiRclone } from "react-icons/si";
import { BsArrowReturnRight } from "react-icons/bs";


const Savings = () => {
    const piggyCard = [
    {
      title: "Automated Saving",
      desc: "Build a dedicated savings faster on your terms, automatically or manually",
      btnTitle: "Piggy bank",
      color: "text-[#0F60D6]",
      bgHover: "bg-[#0F60D6]",
      image: "/images/INBOX1.png",
    },
    {
      title: "Fixed Savings",
      desc: "Lock money away for a fixed duration without having access to it until maturity. It's like having a custom fixed deposit.",
      btnTitle: "Safe Lock",
      color: "text-[#3296FF]",
      bgHover: "bg-[#3296FF]",
      image: "/images/INBOX2.png",
    },
    {
      title: "Goal-oriented Savings",
      desc: "Reach all your savings goals faster. Save towards multiple goals on your own or with a group.",
      btnTitle: "Target Savings",
      color: "text-[#069B40]",
      bgHover: "bg-[#069B40]",
      image: "/images/INBOX3.avif",
    },
    {
      title: "Flex Naira",
      desc: "Save, transfer, manage, organise, and withdraw your money at any time.",
      btnTitle: "FlexNaira",
      color: "text-[#E5288E]",
      bgHover: "bg-[#E5288E]",
      image: "/images/INBOX4.avif",
    },
    {
      title: "Flex Dollar",
      desc: "Save and grow your money in foreign currencies such as Dollars.",
      btnTitle: "FlexDollar",
      color: "text-[#0C1825]",
      bgHover: "bg-[#0C1825]",
      image: "/images/inbox5.avif",
    },
    {
      title: "HouseMoney",
      desc: "Plan for your rent and household expenses",
      btnTitle: "HouseMoney",
      color: "text-[#FF783C]",
      bgHover: "bg-[#FF783C]",
      image: "/images/inbox6.png",
    },
  ];

  return (
    <>
      <div className=" bg-[#F2F7F8]">
        <div className="max-w-[1280px] mx-auto max-tablet:flex max-tablet:flex-col max-tablet:items-center max-tablet:text-center max-tablet:max-w-[600px] max-tablet:mb-6 ">
          <section className="text-center mb-[100px]">
            <p className="text-5xl leading-[66px] font-bold text-[#122232]">
              Many ways to build your savings
            </p>
            <p className="text-2xl leading-9 font-normal text-[#122231]">
              Earn 12%-20% when you save with any of these Piggyvest plans.
            </p>
          </section>
          <section className=" flex flex-wrap gap-[20px] justify-center pb-[80px] ">
            {piggyCard.map((data, i) => (
            < div>
                   <main
                className={`hover:${data.bgHover} group hover:text-white bg-white h-[450px] w-[534px] relative rounded-[27px] p-7 card`}
              >
                <h1
                
                  className={`font-bold leading-11 text-4xl my-[15px] ${data.color} group-hover:text-white`}
                >
                  {data.title}
                </h1>
                <img
                  src={`${data.image}`}
                  className="w-[230px] h-[220px] absolute bottom-0 right-[19px] hidden group-hover:block scaleImage"
                />
                {console.log(data.color)}
                <p className="text-[19px] leading-7 text-gray-600 w-[60%] group-hover:text-white">
                  {data.desc}
                </p>
                <span
                  
                  className={`flex absolute bottom-[40px] gap-[8px] text-[18px] ${data.color} group-hover:text-white`}
                >
                  {<BsArrowReturnRight />}
                  {data.btnTitle}
                </span>
              </main>
            </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default Savings;
