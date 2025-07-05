import React from "react";

import { FaChevronDown } from "react-icons/fa";
import FaqHero from "../components/block/faqs/FaqHero";
import FaqSection from "../components/block/faqs/FaqSection";
import FaqInvest from "../components/block/faqs/FaqInvest";

const FAQs = () => {
  return (
    <div>
      <FaqHero />
      <FaqSection />
      <FaqInvest />
    </div>
  );
};

export default FAQs;
