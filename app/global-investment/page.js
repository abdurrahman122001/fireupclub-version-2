import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

const page = () => {
  return (
    <NextLayout header={3} footer={3} single>
      <Breadcrumb pageName="Our Services" pageTitle="Global Investment Opportunities" />
            {/* About Section Start */}
            <section className="about-section fix section-padding pb-0">
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
                            Global Investment Opportunities
                          </h2>
                        </div>
                        <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                          Achieve financial independence within 5-10 years through our Global Investment Opportunities. Access a customized equity portfolio tailored to your goals, updated regularly to stay in line with market trends. Diversify with debt markets, gain insights on US and global equities, and receive weekly updates.
                        </p>
                        <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                        Join an interactive community of experts and experienced investors, sharing strategies, risk management tips, and market insights. Get hands-on guidance, tactical strategies, and educational resources to grow your knowledge and investments. Start your journey to financial freedom with Fire Up Club today!
                        </p>
                        <ul className="about-list wow fadeInUp" data-wow-delay=".3s">
                          <h3 className="wow fadeInUp mb-2" data-wow-delay=".3s">Benefits:</h3>
                          <li>
                            <i className="fas fa-check" />
                            Personalized Investment Strategy – Tailored portfolios that match your goals and risk tolerance.
                          </li>
                          <li>
                            <i className="fas fa-check" />
                            Expert Community Support – Connect with seasoned investors for insights, strategies, and support.
                          </li>
                          <li>
                            <i className="fas fa-check" />
                            Market Insights & Education – Weekly updates and resources to grow your financial knowledge.
                          </li>
                        </ul>
                        <div
                          className="about-button mt-5 wow fadeInUp"
                          data-wow-delay=".5s"
                        >
                          <Link href="Subscribe" className="theme-btn">
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
                                  <img src="assets/img/service/global-1.jpg" alt="img" />
                                </div>
                              </div>
                              <div
                                className="col-md-12 wow fadeInUp"
                                data-wow-delay=".5s"
                              >
                                <div className="about-thumbs">
                                  <img src="assets/img/service/global-2.jpg" alt="img" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6 wow fadeInUp" data-wow-delay=".7s">
                            <div className="about-thumbs">
                              <img src="assets/img/about/03.jpg" alt="img" />
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
                    <Link href="about-2">
                      <div
                        className="news-image bg-cover"
                        style={{ backgroundImage: 'url("assets/img/about/financial-support.jpg")' }}
                      />
                      </Link>
                      <div className="news-content">
                        {/* <p>November 25, 2024</p> */}
                        <h3 style={{ textAlign: 'center', color: 'black' }}>
                          <Link href="about-1">
                            Personalized Support
                          </Link>
                        </h3>
                        <center>
                          <Link style={{ fontFamily: '12px' }} className="link-btn mt-2" href="about-1">
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
                    <Link href="about-2">
                      <div
                        className="news-image bg-cover"
                        style={{ backgroundImage: 'url("assets/img/about/step-by-step.jpg")' }}
                      />
                      </Link>
                      <div className="news-content">
                        {/* <p>November 25, 2024</p> */}
                        <h3 style={{ textAlign: 'center', color: 'black' }}>
                          <Link href="about-2">
                            Step-by-Step Guidance
                          </Link>
                        </h3>
                        <center>
                          <Link style={{ fontFamily: '12px' }} className="link-btn mt-2" href="about-2">
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
                    <Link href="about-3">
                      <div
                        className="news-image bg-cover"
                        style={{ backgroundImage: 'url("assets/img/about/exclusive-access.jpg")' }}
                      />
                      </Link>
                      <div className="news-content">
                        {/* <p>November 25, 2024</p> */}
                        <h3 style={{ textAlign: 'center', color: 'black' }}>
                          <Link href="about-3">
                            Exclusive Access
                          </Link>
                        </h3>
                        <center>
                          <Link style={{ fontFamily: '12px' }} className="link-btn mt-2" href="about-3">
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
