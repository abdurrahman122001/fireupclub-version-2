"use client"; 
import Breadcrumb from "@/components/Breadcrumb";
import Team from "@/components/Team";
import NextLayout from "@/layouts/NextLayout";

const page = () => {
  return (
    <NextLayout header={3} footer={3} single>
      <Breadcrumb pageName="Imran Kalim" />
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
                      backgroundImage: 'url("assets/img/team/03.webp")',
                    }}
                    data-wow-delay="0.3s"
                  />
                </div>
                <div className="col-lg-1" />
                <div className="col-lg-5">
                  <div className="right-content wow fadeInUp" data-wow-delay="0.4s">
                    <h2>Imran Kalim</h2>
                    <p>eCommerce Specialist | Amazon Strategist | Digital Business Mentor </p>
                    <div className="list">
                    Imran Kalim is a seasoned eCommerce expert with a proven track record of transforming online businesses into thriving success stories. With years of experience in the dynamic world of eCommerce, Imran has become a trusted mentor, empowering individuals to leverage digital platforms like Amazon, Etsy, Shopify, and Walmart to achieve financial independence and early retirement (FIRE). 
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
              <p className="wow fadeInUp py-2 pb-4" data-wow-delay=".6s">
              As a visionary in the digital business space, Imran has helped countless entrepreneurs and business owners develop, launch, and scale their eCommerce ventures. From private label branding to innovative marketing strategies, his comprehensive skill set enables clients to turn ideas into sustainable and profitable businesses.  
              </p>
              <h2 className="wow fadeInUp py-2 mb-0" data-wow-delay=".6s">Key Expertise and Contributions </h2>
              <ul className="about-list wow fadeInUp py-2" data-wow-delay=".6s">
                <li>
                  <i className="fas fa-check" />
                    <b>Amazon Private Label Mastery:</b> Specializes in product research, sourcing, branding, and optimizing listings to maximize visibility and sales on Amazon. 
                </li>
                <li>
                  <i className="fas fa-check" />
                  <b>Walmart 2-Step Distribution Model:</b> Expert in streamlining product stocking and delivery for efficient operations and increased profitability. 
                </li>
                <li>
                  <i className="fas fa-check" />
                  <b>Etsy Shop Optimization:</b> Guides artisans and sellers in creating compelling shops, optimizing product descriptions for search engines, and implementing impactful marketing campaigns.
                </li>
                <li>
                  <i className="fas fa-check" />
                  <b>TikTok Dropshipping Innovator:</b> Leverages trend analysis and influencer collaborations to drive traffic and enhance conversion rates through TikTok. 
                </li>
                <li>
                  <i className="fas fa-check" />
                  <b>Shopify Store Scaling:</b> Builds and customizes Shopify stores with advanced app integration and strategic advertising campaigns to grow revenue steadily. 
                </li>
              </ul>
              <p className="py-2 wow fadeInUp py-2" data-wow-delay=".6s">Imran is passionate about teaching and skill development, equipping aspiring entrepreneurs with the tools and strategies they need to succeed in the digital economy. His mentorship emphasizes hands-on learning, ensuring every client gains practical expertise to confidently navigate the challenges of eCommerce. </p>
              <p className="py-2 wow fadeInUp py-2 pb-4" data-wow-delay=".6s">Through Fire Up Club, Imran is dedicated to creating opportunities for individuals from non-financial backgrounds to establish and grow online businesses that align with their personal goals and the FIRE philosophy. Whether you're starting from scratch or seeking to scale an existing venture, Imran’s guidance offers a clear roadmap to financial success. </p>

              <h2 className="mb-0">The Path to Financial Freedom </h2>
              <p className="wow fadeInUp py-2" data-wow-delay=".7s">
              Imran’s strategic approach to eCommerce is designed to help clients build profitable ventures that support a life of freedom and purpose. By combining market insights, trend-driven strategies, and operational excellence, he ensures businesses achieve long-term sustainability and growth. His mentorship transforms eCommerce from a side hustle into a powerful vehicle for achieving financial independence.  
              </p>
              <p className="wow fadeInUp py-2" data-wow-delay=".7s">
              Join Imran Kalim in exploring the limitless potential of eCommerce and discover how digital entrepreneurship can pave the way to a future of freedom and fulfillment. 
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
