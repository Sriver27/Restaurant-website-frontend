import React, { useState } from "react";
import people from "./data";
import "./reviews.css";
import { SubHeading } from "../../components";
// import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = (props) => {
  const testimonials = [];
  let id = 1;
  function reviewsTestimonials() {
    props.reviewsCollection.map((review) => {
      id++;
      testimonials.push({
        customerName: review.customer_name,
        rating: review.rating,
        comment: review.comment,
        id: id,
      });
    });
    return testimonials;
  }
  reviewsTestimonials();

  let [index, setIndex] = useState(0);
  const clickleft = () => {
    setIndex((index + testimonials.length - 1) % testimonials.length);
  };
  const clickright = () => {
    setIndex((index + 1) % testimonials.length);
  };

  return (
    <div className="app__reviews">
      <div className="container" key={testimonials[index].id}>
        <div className="review">
          <div className="img-container">
            <img
              src={people[index].image}
              alt={people[index].name}
              className="person-img"
            />
          </div>
          <div>
            <h2 className="author">{testimonials[index].customerName}</h2>

            <p className="p__cormorant review_text">
              {testimonials[index].comment}
            </p>
            <p className="p__cormorant review_text">
              ({testimonials[index].rating}⭐)
            </p>
            <div>
              <span onClick={clickleft} className="prev-btn">
                &#x276E;
              </span>
              <span onClick={clickright} className="prev-btn">
                &#x276F;
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="title">
        <SubHeading title="Reviews" />
        <h1 className="headtext__cormorant">What our customers say about us</h1>
      </div>
    </div>
  );
};

export default Review;
