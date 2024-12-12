"use client"; 

import Breadcrumb from "@/components/Breadcrumb";
import Team from "@/components/Team";
import { TestimonialSlider2 } from "@/components/TestimonialSlider";
import NextLayout from "@/layouts/NextLayout";
const page = () => {
  return (
    <NextLayout header={3} footer={3} single>
      {/*<< Breadcrumb Section Start >>*/}
      <Breadcrumb pageName="Personalized Support"/>
      {/* About Section Start */}
      <section className="about-section fix section-padding pb-80">
        <div className="container">
          <div className="about-wrapper style-2">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="about-content ms-0 style-about">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      <img src="assets/img/bale.png" alt="img" />
                      About Company
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Personalized Support
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                  At Fire Up Club, we understand that each member’s financial journey is unique. That’s why our experts are dedicated to providing personalized support tailored to your specific needs. From identifying your financial goals to helping you overcome obstacles, our team works with you closely, ensuring that you’re always moving forward with clarity and confidence.
                  </p>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    <div className="dot" />
                    <div className="content">
                      <h6>Get actionable insights</h6>
                    </div>
                  </div>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    <div className="dot" />
                    <div className="content">
                      <h6>Customized strategies</h6>
                    </div>
                  </div>
                  <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                    <div className="dot" />
                    <div className="content">
                      <h6>One-on-One Sessions</h6>

                    </div>
                  </div>
                  <p className="mt-3 wow fadeInUp" data-wow-delay=".5s">Discover the difference personalized support can make in transforming your financial future</p>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                <div className="about-image-3">
                  <img src="assets/img/about/financial-support.jpg" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section Start */}


      {/* Testimonial Section Start */}
      <section className="testimonial-section-2 fix section-padding fix">
        <div className="bg-shape">
          <img src="assets/img/testimonial/bg-shape.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content">
              <img src="assets/img/bale.png" alt="img" />
              Clients Feedback
            </span>
            <h2>Our Clients Say</h2>
          </div>
        </div>
        <TestimonialSlider2 />
      </section>
      {/* Team Section Start */}
      <Team />
      {/* Footer Section Start */}
    </NextLayout>
  );
};
export default page;
