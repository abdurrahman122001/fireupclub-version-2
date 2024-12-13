import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";

const page = () => {
  return (
    <NextLayout header={3} footer={3} single>
      <Breadcrumb pageName="Our Services" pageTitle="Content Creation & Personal Branding" />
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
                          Content Creation & Personal Branding
                          </h2>
                        </div>
                        <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                        Take control of your financial future by building a strong Personal Brand with Fire Up Club’s Content Creation Services. YouTube Growth – Set up, optimize, and grow your channel with our easy, step-by-step guidance. Learn to plan and create engaging content, connect with your audience, and monetize through ads, memberships, and more. Affiliate Marketing – Start earning through affiliate marketing by selecting profitable programs aligned with your niche. Master content strategies and track performance for sustainable income while ensuring compliance and credibility. Digital Marketing – Gain essential skills in SEO, SEM, social media, and email marketing. Learn how to analyze data, optimize campaigns, and create effective strategies to drive results and build your brand.
                        </p>
                        <ul className="about-list wow fadeInUp" data-wow-delay=".3s">
                          <h3>Benefits:</h3>
                          <li>
                            <i className="fas fa-check" />
                            Personalized monetization strategies
                          </li>
                          <li>
                            <i className="fas fa-check" />
                            Access to successful content creators' insights
                          </li>
                          <li>
                            <i className="fas fa-check" />
                            Increase engagement and revenue from your content
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
