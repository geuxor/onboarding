import React from "react";
import questionsList from "./data/questionsList"
import questionInfos from "./data/questionInfo";
import faqsList from "./data/faqsList"
import faqInfos from "./data/faqInfos";
import AccordionList from "./components/AccordionList";
import FaqList from "./components/FaqList";

import logo from "./images/logo.jpg"


const App = () => {
  return (
    <div className="kyc-flow">
      <div className="left-bar">
        <img
          className="logo"
          src={logo}
          alt="logo"
        />
      </div>
      <div className="container">
        <div className="component">
          <AccordionList questionsList={questionsList} questionInfos={questionInfos} />
        </div>
      </div>
      <div className="faq">
        <FaqList faqsList={faqsList} faqInfos={faqInfos} />
      </div>
    </div>
  );
};

export default App;
