import React from "react";

const StayPrepared = () => {
  return (
    <div className="flex items-center justify-between pl-[50px] bg-[#EA4FA2] max-md:flex-col max-md:pl-0 max-md:pb-0 max-md:gap-y-[40px]">
      <section className="text-white max-w-[450px] max-md:p-[5px] max-md:w-[90%] max-md:mx-auto">
        <h1 className="font-bold text-[51px] leading-[64px] pb-2.5 max-md:text-[30px] max-md:text-center max-md:leading-[40px]">
          Stay prepared for life's emergencies
        </h1>
        <p className="leading-7 font-[400] text-[16px] max-md:text-center">
          Give your emergency funds a boost! We know that emergencies can happen
          anytime. Building an emergency fund in Flex Naira helps you to stay
          ahead, so you can avoid borrowing or extra financial burden when there
          is a crisis. Best of all, you earn interests.
        </p>
      </section>

      <section className="h-[460px] max-w-[600px] max-md:h-auto max-md:w-[90%] max-md:mx-auto">
        <img
          src="../../../public/imgi_36_image_e9186b5e07.png"
          alt="Stay Prepared"
          className="h-full w-full object-contain"
        />
      </section>
    </div>
  );
};

export default StayPrepared;
