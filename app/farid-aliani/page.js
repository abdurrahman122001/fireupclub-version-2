"use client"; 
import Breadcrumb from "@/components/Breadcrumb";
import Team from "@/components/Team";
import NextLayout from "@/layouts/NextLayout";

const page = () => {
  return (
    <NextLayout header={3} footer={3} single>
      <Breadcrumb pageName="Farid Aliani" />
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
                      backgroundImage: 'url("assets/img/team/05.webp")',
                    }}
                    data-wow-delay="0.3s"
                  />
                </div>
                <div className="col-lg-1" />
                <div className="col-lg-5">
                  <div className="right-content wow fadeInUp" data-wow-delay="0.4s">
                    <h2>Farid Aliani – CFA </h2>
                    <p>Portfolio Management Expert | Investment Strategist </p>
                    <div className="list">
                    Farid Aliani is a highly experienced investment professional with over 13 years of expertise in <b>portfolio management, equity research, and strategic investment planning</b>. A CFA Charter holder since 2014, he earned his BBA in Finance and MIS from IBA Karachi. Farid specializes in simplifying complex financial concepts, making him an ideal guide for individuals from non-finance backgrounds seeking to secure their financial futures. 
                    </div>
                    <div className="social-icon d-flex align-items-center">
                      <a href="https://www.linkedin.com/in/faridaliani/" className="color-4">
                        <i className="fab fa-linkedin-in" />
                      </a>
                    </div>
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
              <p className="wow fadeInUp py-2" data-wow-delay=".6s">
              Having managed investments across public and private markets in emerging and frontier economies, Farid brings a practical and approachable perspective to wealth building. His investment philosophy focuses on capital protection and steady growth, ensuring financial stability for those unfamiliar with volatile markets. By blending long-term strategies with short-term opportunities, he creates customized plans that resonate with individuals aiming to grow their wealth without unnecessary risk. 
              </p>
              <p className="wow fadeInUp py-2" data-wow-delay=".6s">
              As a core mentor at Fire Up Club, Farid works closely with members, many of whom are professionals living abroad, to empower them with straightforward strategies to achieve financial independence and early retirement. He believes that financial freedom is within everyone’s reach, regardless of their background or current knowledge of finance. 
              </p>
              <p className="wow fadeInUp py-2" data-wow-delay=".6s">
              Farid’s guidance includes:  
              </p>
              <ul className="about-list wow fadeInUp py-2" data-wow-delay=".6s">
                <li>
                  <i className="fas fa-check" />
                  Helping members create a clear, step-by-step investment plan tailored to their goals. 
                </li>
                <li>
                  <i className="fas fa-check" />
                  Simplifying financial tools and investment options, ensuring accessibility for everyone. 
                </li>
                <li>
                  <i className="fas fa-check" />
                  Providing personalized support to navigate challenges like fluctuating exchange rates and adapting portfolios to international markets. 
                </li>
              </ul>
              <p className="py-2 wow fadeInUp py-2" data-wow-delay=".6s">Farid’s role aligns with Fire Up Club’s mission to transform lives by offering actionable advice that enables members to enjoy a stress-free financial future. His approachable and practical style ensures that every individual, regardless of prior experience, feels confident and empowered to take charge of their financial journey.  </p>
              
            </div>
          </div>
        </div>
      </section>

      <Team />
    </NextLayout>
  );
};
export default page;
