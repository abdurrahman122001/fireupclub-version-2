import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

const page = () => {
  return (
    <NextLayout header={3} footer={3} single>
      <Breadcrumb pageName="Our Services" pageTitle="Digital Books Creation" />
            {/* About Section Start */}
            <section className="about-section fix section-padding">
              <div className="container">
                <div className="about-wrapper">
                  <div className="row g-4 align-items-center justify-content-between">
                    <div className="col-lg-5">
                      <div className="about-content ms-0">
                        <div className="section-title">
                          <span className="sub-content wow fadeInUp">
                            <img src="assets/img/bale.png" alt="img" />
                            Our Services
                          </span>
                          <h2 className="wow fadeInUp" data-wow-delay=".3s">
                          Digital Books Creation 
                          </h2>
                        </div>
                        <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                        Unlock your earning potential with Fire Up Club’s Digital Books Creation service. Whether you’re an aspiring author or an established writer, our comprehensive service helps you create, publish, and market your digital books with ease, maximizing your success and passive income potential.
                        </p>
                        <ul className="about-list wow fadeInUp" data-wow-delay=".3s">
                          <h3>What We Offer:</h3>
                          <li>
                            <i className="fas fa-check" />
                            Content Creation: Work with our expert writers and editors to craft compelling, polished content that resonates with your target audience.
                          </li>
                          <li>
                            <i className="fas fa-check" />
                            Global Publishing: Seamlessly publish and distribute your book on major platforms like Amazon and Apple Books, reaching a worldwide audience.
                          </li>
                          <li>
                            <i className="fas fa-check" />
                            Targeted Marketing: Boost visibility and sales through effective marketing strategies, including social media and email campaigns.
                          </li>
                        </ul>
                        <div
                          className="about-button mt-5 wow fadeInUp"
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
                                  <img src="assets/img/service/digitalbook-1.jpg" alt="img" />
                                </div>
                              </div>
                              <div
                                className="col-md-12 wow fadeInUp"
                                data-wow-delay=".5s"
                              >
                                <div className="about-thumbs">
                                  <img src="assets/img/about/05.jpg" alt="img" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".7s">
                            <div className="about-thumbs">
                              <img src="assets/img/grow/01.jpg" alt="img" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="service-video-section fix section-padding pt-0">
              <div className="container">
                <div className="service-video-wrapper">
                  <div className="row align-items-center">
                    <div className="col-lg-10 wow fadeInUp m-auto" data-wow-delay=".3s">
                      <div className="service-video-image">
                        <img src="assets/img/service/digitalbook-2.jpg" alt="img" />

                      </div>
                    </div>
                    <div className="col-lg-12 m-auto mt-5">
                      <div className="content">
                        <div className="section-title mb-0">
                          <h2 className="wow fadeInUp" data-wow-delay=".3s">
                          Benefits of Our Digital Books Creation Service
                          </h2>
                        </div>
                        <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                          <h5>
                            <i className="fas fa-check-circle" />
                            Professional Quality
                          </h5>
                          <p>
                          Produce digital books that connect with readers and stand out in the market.  Self-Publishing Mastery: Learn the essentials of self-publishing and take control of your book’s success.  Passive Income: Create books that sell consistently, generating continuous revenue.  Expert Support: Receive guidance every step of the way from our team of industry professionals. 
                          </p>
                        </div>
                        <div className="icon-items wow fadeInUp" data-wow-delay=".5s">
                          <h5>
                            <i className="fas fa-check-circle" />
                            Tips &amp; Tricks
                          </h5>
                          <p>
                          Access strategies for excelling on Amazon KDP, including niche research and market analysis.  Informative Updates: Stay ahead with the latest trends, competition insights, and book launch strategies. 
                          </p>
                        </div>
                        <div className="icon-items wow fadeInUp" data-wow-delay=".5s">
                          <h5>
                            <i className="fas fa-check-circle" />
                            Video Tutorials
                          </h5>
                          <p>
                          Learn book planning, design, and KDP platform navigation through short, insightful videos. 
                          </p>
                        </div>
                        <div className="icon-items wow fadeInUp" data-wow-delay=".5s">
                          <h5>
                            <i className="fas fa-check-circle" />
                            Advanced Training
                          </h5>
                          <p>
                          Dive deep with lecture-based videos on maximizing your KDP success, from launch to marketing. 
                          </p>
                        </div>
                        <div className="icon-items wow fadeInUp" data-wow-delay=".5s">
                          <h5>
                            <i className="fas fa-check-circle" />
                            Publishing Assistance
                          </h5>
                          <p>
                          We handle the writing, publishing, and design, allowing you to earn passive income effortlessly. 
                          </p>
                        </div>
                        <div className="icon-items wow fadeInUp" data-wow-delay=".5s">
                          <h5>
                            <i className="fas fa-check-circle" />
                            PPC Campaigns
                          </h5>
                          <p>
                          Increase your book’s visibility with our expert-managed Amazon ad campaigns. 
                          </p>
                        </div>
                        <div className="icon-items wow fadeInUp" data-wow-delay=".5s">
                          <h5>
                            <i className="fas fa-check-circle" />
                            Special Offer
                          </h5>
                          <p>
                          Community members enjoy discounted services. Non-subscribers can start their online venture with our Exclusive Onboarding Offer—no upfront costs. Plus, explore our profit-sharing model for long-term KDP account management.  
                          </p>
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
