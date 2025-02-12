import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

const page = () => {
  return (
    <NextLayout header={3} footer={3} single>
      <Breadcrumb pageName="Our Services" pageTitle="Personalized Financial Planning" />
            {/* About Section Start */}
            <section className="about-section fix section-padding pb-0">
              <div className="container">
                <div className="about-wrapper">
                  <div className="row g-5 align-items-center justify-content-between">
                    <div className="col-lg-6">
                      <div className="about-content ms-0">
                        <div className="section-title">
                          <span className="sub-content wow fadeInUp">
                            <img src="assets/img/bale.png" alt="img" />
                            Our Services
                          </span>
                          <h2 className="wow fadeInUp" data-wow-delay=".3s">
                          Personalized Financial Planning
                          </h2>
                        </div>
                        <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                          Without a clear financial plan, managing money can feel overwhelming. At Fire Up Club, our expert Chartered Accountants create a personalized strategy based on your unique goals, lifestyle, and financial situation. Whether you're looking to save more, eliminate financial stress, or build a secure future, we provide step-by-step guidance to help you stay on track. With expert advice tailored just for you, you’ll gain the clarity and confidence to make the right financial decisions.
                        </p>
                        
                        <ul className="about-list wow fadeInUp" data-wow-delay=".3s">
                          <h3 className="mb-2">Why It Matters</h3>
                          <li>
                            <i className="fas fa-check" />
                            Customized Roadmap – A financial plan designed just for you
                          </li>
                          <li>
                            <i className="fas fa-check" />
                            Clarity & Confidence – Make informed decisions with expert guidance
                          </li>
                          <li>
                            <i className="fas fa-check" />
                            Step-by-Step Support – Navigate every stage of your financial journey

                          </li>
                          <li>
                            <i className="fas fa-check" />
                            One-on-One Expert Advice – Get personalized insights, not generic solutions

                          </li>
                        </ul>
                        <p className="mt-4  wow fadeInUp font-weight-bold" data-wow-delay=".7s">Tailored Plans | Expert Insights | Continuous Support | Actionable Steps</p>
                        <p className="mt-3  wow fadeInUp font-weight-bold" data-wow-delay=".7s">Take control of your financial future today! Get your personalized financial plan now!</p>
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
                                  <img src="assets/img/service/tax-1.jpg" alt="img" />
                                </div>
                              </div>
                              <div
                                className="col-md-12 wow fadeInUp"
                                data-wow-delay=".5s"
                              >
                                <div className="about-thumbs">
                                  <img src="assets/img/service/tax-2.png" alt="img" />
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
                  {/* <div className="row g-4 align-items-center justify-content-between">
                    <div className="col-md-12 wow fadeInUp">
                      <ul className="about-list wow fadeInUp" data-wow-delay=".3s">
                              <h3>How Fire Up Club Helps </h3>
                              <li>
                              🚀 Tailored Plans – Custom financial strategies designed for YOU
                              </li>
                              <li>
                              📈 Expert Insights – Experts with proven success
                              </li>
                              <li>
                              🤝 Ongoing Support – Stay on track with continuous guidance

                              </li>
                              <li>
                              💡 Practical Steps – Simple, actionable strategies for real results

                              </li>
                      </ul>
                    </div>
                  </div> */}
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
