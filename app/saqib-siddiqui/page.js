"use client"; 
import Breadcrumb from "@/components/Breadcrumb";
import Team from "@/components/Team";
import NextLayout from "@/layouts/NextLayout";

const page = () => {
  return (
    <NextLayout header={3} footer={3} single>
      <Breadcrumb pageName="Saqib Z. Siddiqui" />
      {/* Team Details Start */}
      <section className="team-details section-padding fix">
        <div className="container">
          <div className="team-details-wrapper">
            <div className="team-details-image-area">
              <div className="row g-4">
                <div className="col-lg-1">
                </div>
                <div className="col-lg-4">
                  <div
                    className="details-iamge bg-cover wow fadeInUp"
                    style={{
                      backgroundImage: 'url("assets/img/team/02.webp")',
                    }}
                    data-wow-delay="0.3s"
                  />
                </div>
                <div className="col-lg-1" />
                <div className="col-lg-5">
                  <div className="right-content wow fadeInUp" data-wow-delay="0.4s">
                    <h2>Saqib Z. Siddiqui </h2>
                    <p>Crypto Trading Mentor | Senior Technical Analyst </p>
                    <div className="list">
                    Saqib Z. Siddiqui is a celebrated crypto trading expert, senior technical analyst, and mentor with over a decade of experience in financial markets. Known for his precision in market predictions and trend analysis, Saqib has built a strong reputation for helping individuals unlock the potential of crypto trading as a pathway to financial independence. 
                    </div>
                    {/* <div className="social-icon d-flex align-items-center">
                      <a href="https://www.linkedin.com/in/nabeilschaik/" className="color-4">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div> */}
                  </div>
                </div>
                <div className="col-lg-1" />
              </div>
            </div>
            <div className="team-details-content section-padding pb-0">          
              <div className="section-title wow fadeInUp" data-wow-delay=".5s">
                <span className="sub-content wow fadeInUp">
                  <img src="assets/img/bale.png" alt="img" />
                  About Team Member
                </span>
              </div>
              <p className="wow fadeInUp py-2 pb-4" data-wow-delay=".6s">
              As the founder of a thriving trading community, Saqib has guided thousands of traders worldwide with his actionable insights, cutting-edge strategies, and an unwavering commitment to their success. His ability to simplify complex trading concepts makes him a standout mentor for both beginners and seasoned traders. Saqib’s trading accounts consistently deliver substantial profits, showcasing his disciplined approach to risk management and wealth-building.  
              </p>
              <h2 className="wow fadeInUp py-2 mb-0" data-wow-delay=".6s">Achievements and Expertise</h2>
              <ul className="about-list wow fadeInUp py-2" data-wow-delay=".6s">
                <li>
                  <i className="fas fa-check" />
                    <b>Award-Winning Mentor:</b> Recognized as the "Best Trading Mentor," Saqib is celebrated for his ability to transform aspiring traders into confident investors.
                </li>
                <li>
                  <i className="fas fa-check" />
                  <b>Proven Strategies:</b> Saqib’s methodologies have consistently delivered measurable results, making him a trusted advisor in the trading community.  
                </li>
                <li>
                  <i className="fas fa-check" />
                  <b>Global Influence:</b> With thousands of followers worldwide, he has cultivated a network of individuals committed to mastering crypto markets.
                </li>
              </ul>
              <p className="wow fadeInUp py-2" data-wow-delay=".6s">
              At the core of Saqib’s mentorship lies his belief in financial freedom through smart investing. By joining his trading group, members gain access to: 
              </p>
              <ul className="about-list wow fadeInUp py-2" data-wow-delay=".6s">
                <li>
                  <i className="fas fa-check" />
                    <b>Exclusive Webinars:</b> Learn directly from Saqib’s extensive market experience and gain insider insights to stay ahead in the dynamic crypto world. 
                </li>
                <li>
                  <i className="fas fa-check" />
                  <b>Proven Trading Strategies:</b> Leverage his techniques to maximize profitability while mitigating risks.  
                </li>
                <li>
                  <i className="fas fa-check" />
                  <b>Personalized Support:</b> Saqib offers mentorship tailored to individual goals, ensuring every trader receives the guidance needed to succeed. 
                </li>
              </ul>
              <p className="py-2 wow fadeInUp py-2" data-wow-delay=".6s">Saqib Z. Siddiqui empowers traders to view crypto markets as more than just an investment avenue—it’s a step toward achieving Financial Independence and Early Retirement (FIRE). By equipping members with tools, resources, and expertise, he transforms trading into a sustainable and rewarding career. His guidance ensures that you don’t just navigate markets but thrive within them.  </p>

              <p className="py-2 wow fadeInUp py-2" data-wow-delay=".6s">Whether you’re new to trading or seeking to refine your skills, Saqib’s mentorship promises to turn your aspirations into achievements. Invest in your trading journey today and start building a future rooted in financial independence and freedom.  </p>
              
            </div>
          </div>
        </div>
      </section>

      <Team />
    </NextLayout>
  );
};
export default page;
