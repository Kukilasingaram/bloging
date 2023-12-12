import React from "react";
import { Link } from "react-router-dom";
//import featureimageBestDataScienceOnlineCoursesforBeginners from '../assets/Images/DataScience/featureimageBestDataScienceOnlineCoursesforBeginners.webp';

import datasciencewebinarsandworkshops from '../assets/Images/DataScience/datasciencewebinarsandworkshops.webp';
import bestdatascienceframeworks from '../assets/Images/DataScience/bestdatascienceframeworks.webp';

const cardData = [
  
  {
    title: "Data Science Webinars and Workshops",
    image: datasciencewebinarsandworkshops,
    link: "https://www.guvi.in/blog/data-science-webinars-and-workshops/",
    description: "In today’s world, it’s becoming increasingly important to be knowledgeable in the field of data",
    date: "9 August 2023",
    comments: "No Comments"
  },
  {
    title: "10 Best Data Science Frameworks in 2023",
    image: bestdatascienceframeworks,
    link: "https://www.guvi.in/blog/10-best-data-science-frameworks/",
    description: "Does data scientists fascinate you? If yes, you must definitely know about data science frameworks.",
    date: "5 August 2023",
    comments: "No Comments"
  },
  

];

export default function Datascience() {
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