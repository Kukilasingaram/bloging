import React from "react";
import { Link } from "react-router-dom";

import cybersecuity from '../assets/Images/CyberSecurity/cybersecuity.gif';
import BluePurple from '../assets/Images/CyberSecurity/BluePurple.webp';

const cardData = [
  
  {
    title: "What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
    image: cybersecuity,
    link: "https://www.guvi.in/blog/what-is-cybersecurity/",
    description: "Look around today, you will witness that we are more reliant on technology and devices",
    date: "20 December 2022",
    comments: "No Comments"
  },
  {
    title: "Top 10 Ethical Hacking Books for Beginner to Advanced",
    image: BluePurple,
    link: "https://www.guvi.in/blog/best-ethical-hacking-books/",
    description: "Did you know that according to the University of Maryland hackers attack every 39 seconds",
    date: "21 November 2022",
    comments: "No Comments"
  },
  
  
];

export default function Cybersecurity() {
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