import React from "react";
import { Link } from "react-router-dom";

//import TheUltimateGuidetoRealWorldFullStackDevelopmentApplications from '../assets/Images/Fullstack/TheUltimateGuidetoRealWorldFullStackDevelopmentApplications.png';
import bestwaytolearnfullstackdevelopment from '../assets/Images/Fullstack/bestwaytolearnfullstackdevelopment.webp';
import image6 from '../assets/Images/Fullstack/image6.webp'

const cardData = [
  
  
  {
    title: "Best Ways to Learn Full Stack Development in 2023",
    image: bestwaytolearnfullstackdevelopment,
    link: "https://www.guvi.in/blog/best-ways-to-learn-full-stack-development/",
    description: "Full stack development is and will be a promising and an in-demand career in the",
    date: "4 August 2023",
    comments: "No Comments"
  },
  {
    title: "How Long Would It Take to Be a Full Stack Developer?",
    image: image6,
    link: "https://www.guvi.in/blog/top-skills-to-become-a-full-stack-developer/",
    description: "Have you ever wondered how much time it would take to become a skilled Full",
    date: "4 August 2023",
    comments: "No Comments"
  },
    
  
];

export default function Fullstack() {
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