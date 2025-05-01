import  { useState } from 'react';
import './Zestyhelp.css'; 


const faqs = [
  "Is there a limit on the number of devices I can use Zesty FAQsOne on?",
  "Is there a minimum bill value to avail Zesty FAQsOne Pre-Book offers on Dineout?",
  "Is there a limit on free deliveries or extra discounts?",
  "Can I club Zesty FAQsOne extra discount with other offers? Is there an upper limit?",
  "Is Zesty FAQsOne available in all cities ?",
  "Is there a minimum order value to avail extra discount?",
  "Can I cancel, pause or transfer my membership?",
  "On which platforms can I use my Zesty FAQsOne benefits?",
  "Is Instamart available in all locations ?",
  "What is the Zesty FAQsOne Pre Book offers on Dineout?"
];

const sidebarItems = [
  "Help with orders",
  "Zesty FAQs",
  "General issues",
  "Partner Onboarding",
  "Report Safety Emergency",
  "Instamart Onboarding",
  "Legal, Terms & Conditions",
  "FAQs",
  "Zesty FAQsMoney FAQs",
  "Zesty FAQsDineout FAQs",
  "IRCTC FAQs"
];

const Zestyhelp = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const [activeSidebar, setActiveSidebar] = useState("Zesty FAQs");


  return (
    
    <div className="faq-container p-7  bg-gray-200 ">

      <aside className="sidebar">
      {sidebarItems.map((item, idx) => (
        <div
        key={idx}
        className={`sidebar-item ${item === activeSidebar ? 'active' : ''}`}
        onClick={() => setActiveSidebar(item)}
      >
        {item}
      </div>
      
      ))}
      
      </aside>

      <main className="faq-main">
        <h2>Zesty FAQs</h2>
        {faqs.map((faq, idx) => (
          <div key={idx} className="faq-item">
            <div
              className={`faq-question ${faq.includes('minimum order value') ? 'highlight' : ''}`}
              onClick={() => toggleFAQ(idx)}
            >
              {faq}
              <span className="arrow">{openIndex === idx ? '▲' : '▼'}</span>
            </div>
            {openIndex === idx && (
              <div className="faq-answer">
                This is a placeholder answer for: {faq}. 
              </div>
            )}
          </div>
        ))}
      </main>
    </div>
  );
};

export default Zestyhelp;
