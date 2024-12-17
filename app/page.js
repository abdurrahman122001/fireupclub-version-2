"use client";
import Counter from "@/components/Counter";
import GrowBusiness from "@/components/GrowBusiness";
import Team from "@/components/Team";
import { useState, useEffect, useRef } from "react";
import NextLayout from "@/layouts/NextLayout";
import { TestimonialSlider2 } from "@/components/TestimonialSlider";
import Link from "next/link";
// import ReactModal from "react-modal";

const page = () => {
  const videoRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    // Lock the scroll
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Unlock the scroll
    document.body.style.overflow = "";
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const iframe = videoRef.current;
          if (iframe) {
            const src = iframe.getAttribute('data-src');
            if (src && !iframe.src.includes('autoplay')) {
              iframe.src = `${src}?autoplay=1&loop=1&muted=1&controls=0`;
              iframe.onload = () => setIsLoaded(true);
            }
          }
        }
      },
      {
        root: null, // viewport
        threshold: 0.5, // Trigger when 50% of the video is in view
      }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }
    return () => {
      document.body.style.overflow = "";
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);
  return (
    <NextLayout header={2     } footer={3} single>
      {/* Hero Section Start */}
      <section className="hero-section hero-3">
        <div className="bottom-shape">
          <img src="assets/img/hero/bottom-shape.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <span className="sub-content wow fadeInUp" data-wow-delay=".2s">
                  <img src="assets/img/bale.png" alt="img" />
                  25+ Years Of Experience
                </span>
                <h1 className="wow fadeInUp text-black" data-wow-delay=".4s">
                  Our Goal is To<br /> See You
                  <span> Succeed</span>
                </h1>

                <div className="hero-button ">
                  <Link
                    href="Subscription"
                    className="theme-btn wow fadeInUp"
                    data-wow-delay=".7s"
                  >
                    Subscribe Now <i className="far fa-arrow-right" />
                  </Link>

                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-image">
                <img src="assets/img/hero/hero-1.png" alt="img" />

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="news-section section-padding pt-0" id="blog">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="assets/img/bale.png" alt="img" />
              Your Gateway to Growth
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              WHY JOIN FIRE UP CLUB
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="news-card-items">
              <Link href="personalized-support">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/about/financial-support.jpg")' }}
                />
                </Link>
                <div className="news-content">
                  {/* <p>November 25, 2024</p> */}
                  <h3 style={{ textAlign: 'center', color: 'black' }}>
                    <Link href="personalized-support">
                      Personalized Support
                    </Link>
                  </h3>
                  <center>
                    <Link style={{ fontFamily: '12px' }} className="link-btn mt-2" href="personalized-support">
                      Read More
                      <i className="far fa-arrow-right" />
                    </Link>
                  </center>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="news-card-items">
              <Link href="step-by-step-guidance">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/about/step-by-step.jpg")' }}
                />
                </Link>
                <div className="news-content">
                  {/* <p>November 25, 2024</p> */}
                  <h3 style={{ textAlign: 'center', color: 'black' }}>
                    <Link href="step-by-step-guidance">
                      Step-by-Step Guidance
                    </Link>
                  </h3>
                  <center>
                    <Link style={{ fontFamily: '12px' }} className="link-btn mt-2" href="step-by-step-guidance">
                      Read More
                      <i className="far fa-arrow-right" />
                    </Link>
                  </center>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="news-card-items">
              <Link href="exclusive-access">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("assets/img/about/exclusive-access.jpg")' }}
                />
                </Link>
                <div className="news-content">
                  {/* <p>November 25, 2024</p> */}
                  <h3 style={{ textAlign: 'center', color: 'black' }}>
                    <Link href="exclusive-access">
                      Exclusive Access
                    </Link>
                  </h3>
                  <center>
                    <Link style={{ fontFamily: '12px' }} className="link-btn mt-2" href="exclusive-access">
                      Read More
                      <i className="far fa-arrow-right" />
                    </Link>
                  </center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section Start */}
      <section className="about-section-3 section-padding pt-0" id="about">
        <div className="container">
          <div className="about-wrapper-2">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="about-image-items">
                  <div
                    className="about-image-1 wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <img src="assets/img/about/03.jpg" alt="img" />
                    <div className="about-image-2">
                      <img src="assets/img/about/04.jpg" alt="img" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title">
                    <span className="sub-content wow fadeInUp">
                      <img src="assets/img/bale.png" alt="img" />
                      About Company
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      The life You’ve Always Dreamed of isn’t as Far Away as it Seems
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    We are more than advisors, we're freedom builders. Join Fire Up Club's expert community for a path to early retirement.
                  </p>
                  <div className="about-counter-area">
                    <div className="row g-4">
                      <div
                        className="col-md-6 col-sm-6 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <div className="about-counter-items">
                          <h2>
                            <span className="count">
                              {" "}
                              <Counter end={90} />
                            </span>
                            %
                          </h2>
                          <p>Personalized Plans Success</p>
                        </div>
                      </div>
                      <div
                        className="col-md-6 col-sm-6 wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <div className="about-counter-items">
                          <h2>
                            <span className="count">
                              <Counter end={80} />
                            </span>
                            %
                          </h2>
                          <p>Financial Independence Achieved
                          </p>
                        </div>
                      </div>
                      <div
                        className="col-md-6 col-sm-6 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <div className="about-counter-items">
                          <h2>
                            <span className="count">
                              {" "}
                              <Counter end={95} />
                            </span>
                            %
                          </h2>
                          <p>Community Support Satisfaction</p>
                        </div>
                      </div>
                      <div
                        className="col-md-6 col-sm-6 wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <div className="about-counter-items">
                          <h2>
                            <span className="count">
                              {" "}
                              <Counter end={2} />
                            </span>
                            K+
                          </h2>
                          <p>Subscribers</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Offer Section Start */}
      <section className="service-offer-section" id="services">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="assets/img/bale.png" alt="img" />
              What We Offer
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
               Our Services
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-3 wow fadeInUp" data-wow-delay=".3s">
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="service-offer-items">
                <div className="icon">
                  <img src="assets/img/service/icon/earning.png" alt="img" />
                </div>
                <div className="offer-content">
                  <div className="content">
                    <h3>
                      <Link href="global-investment">Global Investment Opportunities</Link>
                    </h3>
                    <p style={{ fontSize: '14px' }}>Our Global Investment Opportunities service connects you with experienced financial experts who provide insights into international markets.</p>
                  </div>
                  <Link href="global-investment" className="arrow-icon">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 wow fadeInUp" data-wow-delay=".3s">
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="service-offer-items">
                <div className="icon">
                  <img src="assets/img/service/icon/targeted.png" alt="img" />
                </div>
                <div className="offer-content">
                  <div className="content">
                    <h3>
                      <Link href="crypto-trading">
                        Crypto Trading
                      </Link>
                    </h3>
                    <p style={{ fontSize: '14px' }}>We equip you with proven strategies to diversify your portfolio with global investment opportunities, explore the dynamic</p>
                  </div>
                  <Link href="crypto-trading" className="arrow-icon">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="service-offer-items">
                <div className="icon">
                  <img src="assets/img/service/icon/ecommerce.png" alt="img" />
                </div>
                <div className="offer-content">
                  <div className="content">
                    <h3>
                      <Link href="ecommerce">
                        E-Commerce
                      </Link>
                    </h3>
                    <p style={{ fontSize: '14px' }}>Our service helps aspiring entrepreneurs turn their ideas into successful ventures. Through our consultancy, you receive step-by-step</p>
                  </div>
                  <Link href="ecommerce" className="arrow-icon">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="service-offer-items">
                <div className="icon">
                  <img
                    src="assets/img/service/icon/brainstorming.png"
                    alt="img"
                  />
                </div>
                <div className="offer-content">
                  <div className="content">
                    <h3>
                      <Link href="financial-planning">Financial Planning & Real Estate Investment</Link>
                    </h3>
                    <p style={{ fontSize: '14px' }}>Our personalized financial planning services are designed to help you build a strategy that supports your goal</p>
                  </div>
                  <Link href="financial-planning" className="arrow-icon">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="service-offer-items">
                <div className="icon">
                  <img src="assets/img/service/icon/digital-books.png" alt="img" />
                </div>
                <div className="offer-content">
                  <div className="content">
                    <h3>
                      <Link href="digital-books">
                        Digital Books Creation
                      </Link>
                    </h3>
                    <p style={{ fontSize: '14px' }}>Unlock your earning potential with Fire Up Club’s Digital Books Creation service. Whether you’re an aspiring author</p>
                  </div>
                  <Link href="digital-books" className="arrow-icon">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="service-offer-items">
                <div className="icon">
                  <img src="assets/img/service/icon/immigration.png" alt="img" />
                </div>
                <div className="offer-content">
                  <div className="content">
                    <h3>
                      <Link href="immigration">
                        Immigration
                      </Link>
                    </h3>
                    <p style={{ fontSize: '14px' }}>We help you develop a robust financial plan, invest in real estate, explore immigration opportunities, and provide</p>
                  </div>
                  <Link href="immigration" className="arrow-icon">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="service-offer-items">
                <div className="icon">
                  <img
                    src="assets/img/service/icon/content-creation.png"
                    alt="img"
                  />
                </div>
                <div className="offer-content">
                  <div className="content">
                    <h3>
                      <Link href="content-creation">Content Creation Personal Branding</Link>
                    </h3>
                    <p style={{ fontSize: '14px' }}>Join our Earning Through Content Creation group to learn how to effectively monetize your online presence. Led</p>
                  </div>
                  <Link href="content-creation" className="arrow-icon">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 wow fadeInUp" data-wow-delay=".3s">
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="service-offer-items">
                <div className="icon">
                  <img src="assets/img/service/icon/tax-planning.png" alt="img" />
                </div>
                <div className="offer-content">
                  <div className="content">
                    <h3>
                      <Link href="tax-planning">
                        Personalized Tax Planning
                      </Link>
                    </h3>
                    <p style={{ fontSize: '14px' }}>Achieve optimal tax efficiency and maximize your savings with Fire Up Club’s Personalized Tax Planning service. Our</p>
                  </div>
                  <Link href="tax-planning" className="arrow-icon">
                    <i className="far fa-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 wow fadeInUp" data-wow-delay=".3s">
            </div>
          </div>
        </div>
      </section>
      {/* Team Section Start */}
      <Team />
      {/* Business Boost Section Start */}
      <section className="business-boost-section section-padding pt-0">
        <div className="container">
          <div className="business-boost-wrapper">
            <div className="row g-4 align-items-center">
              <div className="col-lg-6">
                <div className="business-boost-content">
                  <h2>Ready to take charge of your Financial Destiny?</h2>
                  <p>
                    We’re selective about who joins our community to ensure a
                    supportive and motivated environment. Take the first step by
                    completing our brief questionnaire. If you’re a good fit,
                    we’ll extend a personal invitation to join us.
                  </p>
                  <Link href="Subscription"> <button
                    className="theme-btn bg-2 get-started-btn"
                    onClick={openModal}
                  >
                    Get Started Now
                  </button></Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="video-image">
                {!isLoaded && (
                  <div className="video-thumbnail">
                    <img src="assets/img/video-thumbnail.PNG" alt="Video Thumbnail" />
                  </div>
                )}
                  <iframe
                    ref={videoRef}
                    data-src="https://player.vimeo.com/video/1024089228"
                    title="Video"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    allowFullScreen
                    style={{
                      border: 'none',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </div>
                {/* <div className="video-image">
                  <img src="assets/img/video-thumbnail.PNG" alt="img" />
                  <div className="video-box">
                    <button
                      className="video-buttton ripple"
                      onClick={openModal}
                    >
                      <i className="fas fa-play" />
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {/* {isModalOpen && (
          <div className="modal-overlay">
            <div className="modal-content">
              <button className="close-modal" onClick={closeModal}>
                &times;
              </button>
              <iframe
                width="100%"
                height="100%"
                src="https://player.vimeo.com/video/1024089228?autoplay=1&controls=0&muted=1&loop=1"
                title="Video"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </div>
          </div>
        )} */}

        <style jsx>{`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 999;
          }
        .video-image {
          position: relative;
          width: 100%;
          height: 400px;
          
          background-size: cover;
          overflow: hidden;
        }
        iframe {
          display: block;
        }

          .modal-content {
            position: relative;
            background: black;
            padding: 0;
            border-radius: 10px;
            max-width: 700px;
            width: 80%;
            height: 400px;
            overflow: hidden;
          }

          .modal-content iframe {
            width: 100%;
            height: 100%;
            border: none;
          }

          .close-modal {
            position: absolute;
            top: 10px;
            right: 10px;
            font-size: 20px;
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            z-index: 1000;
          }
        `}</style>
      </section>

      {/* Grow Business Section Start */}
      <GrowBusiness />
      {/* Working Process Section Start */}


      <section className="testimonial-section-5 fix section-padding fix pt-0" id="clients">
        <div className="container">
          <div className="section-title text-center">
            <span className="sub-content wow fadeInUp">
              <img src="assets/img/bale.png" alt="img" />
              Inspiring Journeys
            </span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Our Success Stories
            </h2>
          </div>
        </div>
        <TestimonialSlider2 style="style-2" />
      </section>
      {/* News Section Start */}

    </NextLayout>
  );
};
export default page;
