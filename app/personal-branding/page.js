import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

const page = () => {
  return (
    <NextLayout header={3} footer={3} single>
      <Breadcrumb pageName="Our Services" pageTitle="Personal Branding" />
            {/* About Section Start */}
            <section className="about-section fix section-padding pb-0">
              <div className="container">
                <div className="about-wrapper">
                  <div className="row g-4 align-items-center justify-content-between">
                    <div className="col-lg-6">
                      <div className="about-content ms-0">
                        <div className="section-title">
                          <span className="sub-content wow fadeInUp">
                            <img src="assets/img/bale.png" alt="img" />
                            Our Services
                          </span>
                          <h2 className="wow fadeInUp" data-wow-delay=".3s">
                          Personal Branding
                          </h2>
                        </div>
                        <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                          Your name is your biggest asset! In today’s world, success isn’t just about skills—it’s about how people see you. A strong personal brand builds trust, attracts opportunities, and increases your earning potential. At Fire Up Club, we help professionals, entrepreneurs, and investors establish a powerful brand that positions them as industry leaders. From refining your niche to optimizing your online presence, we provide expert guidance to help you stand out and grow financially.
                        </p>
                        
                        <ul className="about-list wow fadeInUp" data-wow-delay=".3s">
                          <h3 className="mb-2">Why Personal Branding is Essential for Financial Success</h3>
                          <li>
                            <i className="fas fa-check" />
                            Higher Earning Potential – Strong brands command higher salaries and business deals
                          </li>
                          <li>
                            <i className="fas fa-check" />
                            More Opportunities – Attract clients, partnerships, and investments effortlessly
                          </li>
                          <li>
                            <i className="fas fa-check" />
                            Trust & Influence – Position yourself as an expert people rely on

                          </li>
                          <li>
                            <i className="fas fa-check" />
                            Long-Term Growth – Build assets beyond money—credibility, reputation, and authority

                          </li>
                        </ul>
                        <p className="mt-4  wow fadeInUp" data-wow-delay=".7s">Your personal brand is your most valuable investment—start building it today with Fire Up Club!</p>
                        <p className="mt-3  wow fadeInUp font-weight-bold" data-wow-delay=".7s">Let’s Elevate Your Brand!</p>
                        <div
                          className="about-button mt-4 wow fadeInUp"
                          data-wow-delay=".5s"
                        >
                          <Link href="Subscription" className="theme-btn">
                            Subscribe Now
                            <i className="far fa-arrow-right" />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="about-image-items-4">

                        <div className="row g-4 align-items-center">
                          <div className="col-lg-6">
                            <div className="row g-4">
                              <div
                                className="col-md-12 wow fadeInUp"
                                data-wow-delay=".3s"
                              >
                                <div className="about-thumbs">
                                  <img src="assets/img/service/content-1.jpg" alt="img" />
                                </div>
                              </div>
                              <div
                                className="col-md-12 wow fadeInUp"
                                data-wow-delay=".5s"
                              >
                                <div className="about-thumbs">
                                  <img src="assets/img/service/digitalbook-1.jpg" alt="img" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".7s">
                            <div className="about-thumbs">
                              <img src="assets/img/service/content-3.jpg" alt="img" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="news-section section-padding" id="blog">
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
    </NextLayout>
  );
};
export default page;
