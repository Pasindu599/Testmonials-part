import React from "react";
import boy1 from "./assets/boy1.png";
import boy2 from "./assets/boy2.png";
import "./Testimonials.css";

function Testimonials() {
  return (
    <>
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="title">Testimonials</h2>
            <p className="sub-title">What our student say about us</p>
          </div>

          <div className="testimonials-content">
            <div class="testimonials-slider js-testimonials-slider">
              <div className="testimonials-item">
                <div className="info">
                  <img className="" src={boy1} alt="profile" />
                  <div className="text-box">
                    <h3 className="name">Ronald Richards</h3>
                    <div className="mobile-rating">
                      <i className="fa fa-star positive"></i>
                      <i className="fa fa-star positive"></i>
                      <i className="fa fa-star positive"></i>
                      <i className="fa fa-star positive"></i>
                      <i className="fa fa-star negative"></i>
                    </div>
                  </div>
                </div>
                <p>
                  This platform has completely revolutionized my approach to
                  learning. The diverse range of courses and resources available
                  allowed me to tailor my education to my interests. I've gained
                  invaluable skills that have propelled me forward in my career.
                </p>
                <div className="rating">
                  <i className="fa fa-star positive"></i>
                  <i className="fa fa-star positive"></i>
                  <i className="fa fa-star positive"></i>
                  <i className="fa fa-star positive"></i>
                  <i className="fa fa-star negative"></i>
                </div>
              </div>

              <div className="testimonials-item">
                <div className="info">
                  <img className="" src={boy1} alt="profile" />
                  <div className="text-box">
                    <h3 className="name">Wade Warren</h3>
                    <div className="mobile-rating">
                      <i className="fa fa-star positive"></i>
                      <i className="fa fa-star positive"></i>
                      <i className="fa fa-star positive"></i>
                      <i className="fa fa-star positive"></i>
                      <i className="fa fa-star negative"></i>
                    </div>
                  </div>
                </div>
                <p>
                  As a busy professional, finding time for traditional classroom
                  learning was a challenge. This site provided me with the
                  flexibility to learn at my own pace, from anywhere.
                </p>
                <div className="rating">
                  <i className="fa fa-star positive"></i>
                  <i className="fa fa-star positive"></i>
                  <i className="fa fa-star positive"></i>
                  <i className="fa fa-star positive"></i>
                  <i className="fa fa-star negative"></i>
                </div>
              </div>

              <div className="testimonials-item">
                <div className="info">
                  <img className="" src={boy2} alt="profile" />
                  <div className="text-box">
                    <h3 className="name">Jacob Jones</h3>
                    <div className="mobile-rating">
                      <i className="fa fa-star positive"></i>
                      <i className="fa fa-star positive"></i>
                      <i className="fa fa-star positive"></i>
                      <i className="fa fa-star positive"></i>
                      <i className="fa fa-star negative"></i>
                    </div>
                  </div>
                </div>
                <p>
                  The comprehensive math courses, and step-by-step explanations
                  helped me build a solid foundation and gain confidence in my
                  abilities. I'm thrilled to say that I've aced my exams.
                </p>
                <div className="rating">
                  <i className="fa fa-star positive"></i>
                  <i className="fa fa-star positive"></i>
                  <i className="fa fa-star positive"></i>
                  <i className="fa fa-star positive"></i>
                  <i className="fa fa-star negative"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
