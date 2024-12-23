"use client"; 
import Breadcrumb from "@/components/Breadcrumb";
import Team from "@/components/Team";
import NextLayout from "@/layouts/NextLayout";

const page = () => {
  return (
    <NextLayout header={3} footer={3} single>
      <Breadcrumb pageName="Syed Rehan Kazmi" />
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
                      backgroundImage: 'url("assets/img/team/07.webp")',
                    }}
                    data-wow-delay="0.3s"
                  />
                </div>
                <div className="col-lg-1" />
                <div className="col-lg-5">
                  <div className="right-content wow fadeInUp" data-wow-delay="0.4s">
                    <h2>Syed Rehan Kazmi – FCA, ICAEW </h2>
                    <p>Tax Strategist | Financial Consultant | Corporate Governance Specialist </p>
                    <div className="list">
                    Syed Rehan Kazmi is a seasoned Chartered Accountant with dual accreditation from the Institute of Chartered Accountants of Pakistan (ICAP) and the Institute of Chartered Accountants in England and Wales (ICAEW). With a distinguished career spanning finance, tax advisory, and corporate governance, Rehan brings unparalleled expertise to the Fire Up Club, empowering members to achieve <b>financial independence and long-term security</b>. 
                    </div>
                    <div className="social-icon d-flex align-items-center">
                      <a href="https://www.linkedin.com/in/syed-rehan-kazmi-fca-icap-aca-icaew-b9b99825/" className="color-4">
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
              Currently serving as CFO and Company Secretary for Elevation Ventures (Pvt.) Limited, Habib Schools, and the Habib Education Trust, Rehan’s commitment to financial stewardship and transparent governance is evident across diverse sectors. His leadership ensures operational efficiency and compliance while upholding the highest standards of fiscal responsibility. 
              </p>
              <h2 className="wow fadeInUp py-2 mb-0" data-wow-delay=".6s">Areas of Expertise </h2>
              <ul className="about-list wow fadeInUp py-2" data-wow-delay=".6s">
                <li>
                  <i className="fas fa-check" />
                    <b>Tax Advisory and Optimization:</b> Specializes in devising tax-efficient strategies tailored to individual and corporate needs, helping members retain more of their earnings while remaining compliant with local and international tax laws. 
                </li>
                <li>
                  <i className="fas fa-check" />
                  <b>Financial Management and Clarity:</b> Offers expert guidance on financial planning, enabling members to make informed decisions that align with their personal goals and the FIRE philosophy.  
                </li>
                <li>
                  <i className="fas fa-check" />
                  <b>Corporate Governance and Accountability:</b> Provides insights into building sustainable governance structures, ensuring organizations thrive on principles of transparency and ethical practices. 
                </li>
              </ul>
              <p className="py-2 wow fadeInUp" data-wow-delay=".6s">Rehan’s role within Fire Up Club is pivotal for members looking to navigate complex tax landscapes and optimize their financial strategies. By simplifying intricate financial regulations and offering actionable advice, Rehan empowers members—especially those from non-finance backgrounds—to achieve their goals of financial independence and early retirement. </p>

              <h2 className="py-2 wow fadeInUp mb-0" data-wow-delay=".6s">Financial Freedom through Tax Efficiency </h2>
              <p className="wow fadeInUp py-2" data-wow-delay=".7s">
              Rehan believes that understanding and optimizing taxes is a cornerstone of building wealth. His expertise helps members maximize their earnings, protect their investments, and create sustainable financial plans that align with the FIRE movement's values of intentional living and financial empowerment.  
              </p>
              <p className="wow fadeInUp py-2" data-wow-delay=".7s">
              Whether you're looking to streamline your personal finances, secure tax-efficient investments, or enhance your corporate governance, Rehan Kazmi’s guidance offers the clarity and confidence you need to take control of your financial future.   
              </p>
              
            </div>
          </div>
        </div>
      </section>

      <Team />
    </NextLayout>
  );
};
export default page;
