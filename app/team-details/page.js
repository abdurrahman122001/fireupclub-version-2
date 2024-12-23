import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";

const page = () => {
  return (
    <NextLayout header={3} footer={3} single>
      <Breadcrumb pageName="Team Member" />
      {/* Team Details Start */}
      <section className="team-details section-padding fix">
        <div className="container">
          <div className="team-details-wrapper">
            <div className="team-details-image-area">
              <div className="row g-4">
                <div className="col-lg-1">
                  {/* <h2 className="text">Next</h2> */}
                </div>
                <div className="col-lg-4">
                  <div
                    className="details-iamge bg-cover"
                    style={{
                      backgroundImage: 'url("assets/img/team/01.webp")',
                    }}
                  />
                </div>
                <div className="col-lg-1" />
                <div className="col-lg-6">
                  <div className="right-content">
                    <h2>Nabeel Shaikh (aka Nabeil Schaik) FCA, MSc, CME, Fintech (Certified) </h2>
                    <p>Startup Mentor | Wealth Strategist | Immigration Advisor | Visionary Leader</p>
                    <div className="list">
                    Nabeel Shaikh is a dynamic Chartered Accountant, Investment Banker, and Entrepreneur dedicated to empowering individuals to achieve Financial Independence and Early Retirement (FIRE). As the founder of Fire Up Club.com, he has built a thriving community that helps members design their lives around financial freedom and intentional living. Nabeel’s philosophy revolves around blending technical expertise with practical, personalized mentorship to make financial independence accessible to everyone.
                    </div>
                    <div className="social-icon d-flex align-items-center">
                      <a href="https://www.linkedin.com/in/nabeilschaik/" className="color-4">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-details-content section-padding pb-0">
              {/* <h2>Startup Mentor | Wealth Strategist | Immigration Advisor | Visionary Leader </h2>
              <p className="mb-4">
              Nabeel Shaikh is a dynamic Chartered Accountant, Investment Banker, and Entrepreneur dedicated to empowering individuals to achieve Financial Independence and Early Retirement (FIRE). As the founder of Fire Up Club.com, he has built a thriving community that helps members design their lives around financial freedom and intentional living. Nabeel’s philosophy revolves around blending technical expertise with practical, personalized mentorship to make financial independence accessible to everyone. 
              </p> */}
            <div className="section-title">
              <span className="sub-content wow fadeInUp">
                <img src="assets/img/bale.png" alt="img" />
                About Team Member
              </span>
            </div>
              <p>
              With a proven track record as an innovator and leader, Nabeel has launched multiple ventures: 
              </p>
              <ul className="about-list wow fadeInUp py-2" data-wow-delay=".3s">
                <li>
                  <i className="fas fa-check" />
                    <b>NashFact.com</b> – A leading online publishing platform.
                </li>
                <li>
                  <i className="fas fa-check" />
                  <b>Mr. Shapatar</b> – A successful UK-based food chain. 
                </li>
                <li>
                  <i className="fas fa-check" />
                  <b>Ed-Watch.org, Mavens Advisor, and E Blood</b> – High-impact, technology-driven startups demonstrating his ability to merge innovation with financial acumen.
                </li>
              </ul>
              <p className="py-2">As a Startup Mentor at the Startup Launchpad, Nabeel works closely with entrepreneurs, guiding them through business development, funding challenges, and scaling strategies. His unique insights into wealth creation and investment planning make him a sought-after advisor for individuals looking to maximize their assets in real estate and other lucrative markets. His immigration expertise equips clients with actionable steps to navigate global visa and residency pathways, aligning financial goals with international opportunities. </p>
              <p className="py-2">Nabeel’s mission is deeply rooted in the FIRE principles of financial literacy, sustainable wealth-building, and continuous learning. He believes financial independence is not just a milestone but a lifestyle—one where individuals can prioritize personal growth, time freedom, and purposeful living. Through Fire Up Club, Nabeel empowers members with tools, mentorship, and community support to take control of their financial futures.  </p>

              <div className="details-information-area">
              <h2>Why Nabeel Stands Out</h2>
                <div className="row g-4 justify-content-between">
                  {/* <div className="col-lg-5">
                    <div className="progress-wrap">
                      <div className="pro-items">
                        <div className="pro-head">
                          <h6 className="title">Web Development</h6>
                          <span className="point">90%</span>
                        </div>
                        <div className="progress">
                          <div className="progress-value" />
                        </div>
                      </div>
                      <div className="pro-items">
                        <div className="pro-head">
                          <h6 className="title">Business Solution</h6>
                          <span className="point">50%</span>
                        </div>
                        <div className="progress">
                          <div className="progress-value style-two" />
                        </div>
                      </div>
                      <div className="pro-items">
                        <div className="pro-head">
                          <h6 className="title">Digital Marketing</h6>
                          <span className="point">80%</span>
                        </div>
                        <div className="progress">
                          <div className="progress-value style-three" />
                        </div>
                      </div>
                    </div>
                  </div> */}
                  <div className="col-lg-12">
                    <div className="information-content-items g-8">
                      <div className="content-box-area">
                        <div className="content mb-4">
                          <h4>Visionary Leadership</h4>
                          <p>A trailblazer who bridges financial strategy with technological innovation. </p>
                        </div>
                        <div className="content">
                          <h4>Global Perspective</h4>
                          <p>Experience spanning diverse industries and markets worldwide. </p>
                        </div>
                      </div>
                      <div className="content-box-area">
                        <div className="content mb-4">
                          <h4>Mentorship Excellence</h4>
                          <p>A hands-on mentor offering tailored guidance to startups, professionals, and families alike. </p>
                        </div>
                        <div className="content">
                          <h4>Empowering Solutions</h4>
                          <p>Practical strategies for wealth creation and risk management, even for those new to finance. </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                <p>
                Nabeel Shaikh’s journey is a testament to the transformative power of strategic planning, intentional living, and the courage to pursue financial freedom. Whether you're an aspiring entrepreneur, a seasoned professional, or someone looking to take the first step toward financial independence, Nabeel’s expertise and passion for helping others make him a trusted guide on your path to success. 
                </p>
              
            </div>
          </div>
        </div>
      </section>
    </NextLayout>
  );
};
export default page;
