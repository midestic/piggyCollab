import React from "react";
import main1 from "../assets/images/main1.png";
import investors from "../assets/images/investors.png";
import explore from "../assets/images/explore.png";
import estate from "../assets/images/estate.png";
import PiggyBtn from "../components/reusable/PiggyBtn";

const Invest = () => {
  return (
    <div className=" mx-auto  " style={{ backgroundColor: "#F2F7F8" }}>
      <section
        className="flex justify-between items-center max-w-[1280px] px-16 pt-20"
        style={{ backgroundColor: "hsl(269, 85%, 49%)" }}
      >
        <div className="text-white ">
          <h1 className="text-5xl font-bold mb-8">Invest on the go</h1>
          <span
            className="bg-white text-xl mb-8 inline-block px-6 py-3 rounded-4xl"
            style={{ color: "hsl(269, 85%, 49%)", backgroundColor: "#EFF5FC" }}
          >
            Up to 35% returns
          </span>
          <p className="w-2/3 text-2xl  mb-6">
            Invest securely and confidently on the go. Up to 35% returns, 6-12
            month duration.
          </p>
          <div className="flex gap-4 mb-8">
            <PiggyBtn
              title="GetOniphone"
              textColor="white"
              bgColor="black"
              iconTitle=""
            />
            <PiggyBtn
              title="GetonAndroid"
              textColor="#white"
              borderColor="#122231"
              bgColor="black"
              iconTitle=""
            />
          </div>
        </div>
        <div>
          <img src={main1} alt="Invest" className="max-h-[800px] " />
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-16 pt-20 pb-10">
        <div className="text-center ">
          <h1 className="text-5xl font-bold mt-8" style={{ color: "#122231" }}>
            Simple investments with great returns
          </h1>
          <p className="text-xl" style={{ color: "#485F6E" }}>
            Investments are made readily accessible to everyone
          </p>
        </div>
      </section>
      <section
        className="max-w-[1280px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-16 pb-20"
        style={{ backgroundColor: "#F2F7F8" }}
      >
        <div className="bg-white rounded-3xl pt-6 px-6">
          <h1
            className="text-4xl font-bold w-1.5  mb-3"
            style={{ color: "#7913E5" }}
          >
            Investments simplified
          </h1>
          <p className="w-5/5 text-lg mb-20" style={{ color: "#485F6E" }}>
            With minimum investments starting as low as N5,000, investment is no
            longer out of reach. Everyone is welcome.
          </p>
          <img src={investors} alt="Investors" className="max-h-[250px]" />
        </div>
        <div className="bg-white rounded-3xl pt-6 px-6">
          <h1
            className="text-4xl font-bold w-1.5  mb-3"
            style={{ color: "#7913E5" }}
          >
            Invest confidently
          </h1>
          <p className="w-5/5 text-lg mb-20" style={{ color: "#485F6E" }}>
            We work with leading licensed investment houses such as ARM, AIICO
            and Stanbic.
          </p>
          <img src={explore} alt="explore" className="max-h-[250px]" />
        </div>
        <div className="bg-white rounded-3xl pt-6 px-6">
          <h1
            className="text-4xl font-bold   mb-3"
            style={{ color: "#7913E5" }}
          >
            Diversify your portfolio
          </h1>
          <p className="w-5/5 text-lg mb-20" style={{ color: "#485F6E" }}>
            Invest in various industries such as fixed income instruments,
            agriculture, transportation, etc.
          </p>
          <img src={estate} alt="Investment" className="max-h-[250px]" />
        </div>
      </section>
    </div>
  );
};

export default Invest;
