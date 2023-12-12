import React from "react";
import { Link } from "react-router-dom";
import featureImageTopAutomationTestingTools from '../assets/Images/All/featureImageTopAutomationTestingTools.webp';
import FeatureImageSkillsRequiredToBecomeDigitalMarketer from '../assets/Images/All/FeatureImageSkillsRequiredToBecomeDigitalMarketer.webp';
import featureimageCareerOpportunitiesinDigitaMarketing from '../assets/Images/All/featureimageCareerOpportunitiesinDigitaMarketing.webp';

const cardData = [
  {
    title: "Top 10 Best Automation Testing Tools in 2023",
    image: featureImageTopAutomationTestingTools,
    link: "https://www.guvi.in/blog/best-automation-testing-tools/",
    description: "Automation testing tools have really become a great and important factor in building efficient web",
    date: "17 August 2023",
    comments: "No Comments"
  },
  {
    title: "Top Skills Required to Become a Digital Marketer",
    image: FeatureImageSkillsRequiredToBecomeDigitalMarketer,
    link: "https://www.guvi.in/blog/skills-required-to-become-a-digital-marketer/",
    description: "Digital marketing is one of the most dynamic industries that has transformed how businesses connect",
    date: "16 August 2023",
    comments: "No Comments"
  },
  {
    title: "Career Opportunities in Digital Marketing | Digital Marketing Career",
    image: featureimageCareerOpportunitiesinDigitaMarketing,
    link: "https://www.guvi.in/blog/career-opportunities-in-digital-marketing/",
    description: "As we move forward in today’s digital age, the need for businesses to engage with",
    date: "16 August 2023",
    comments: "No Comments"
  },
  
  
];

export default function Home() {
  return (
    <div className="container">
      <div className="row g-4">
        {cardData.map((card, index) => (
          <div className="col-lg col-md-6" key={index}>
            <div className="card h-100">
              <div>
                <Link className="nav-link" to={card.link}>
                  <img src={card.image} className="card-img-top" alt="..." />
                </Link>
              </div>
              <div className="card-body">
                <p className="card-title">
                  <Link className="nav-link" to={card.link}>
                    {card.title}
                  </Link>
                </p>
                <p className="card-text">{card.description}</p>
                <p>
                  <Link className="nav-link read" to={card.link}>
                    READ MORE »
                  </Link>
                </p>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary d-inline-flex w-100 text-align-left">
                  {card.date} <ul><li>{card.comments}</li></ul>
                </small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}