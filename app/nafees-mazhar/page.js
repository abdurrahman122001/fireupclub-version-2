"use client"; 
import Breadcrumb from "@/components/Breadcrumb";
import Team from "@/components/Team";
import NextLayout from "@/layouts/NextLayout";

const page = () => {
  return (
    <NextLayout header={3} footer={3} single>
      <Breadcrumb pageName="Nafees Mazhar" />
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
                    className="details-iamge bg-cover wow fadeInUp"
                    style={{
                      backgroundImage: 'url("assets/img/team/04.webp")',
                    }}
                    data-wow-delay="0.3s"
                  />
                </div>
                <div className="col-lg-1" />
                <div className="col-lg-5">
                  <div className="right-content wow fadeInUp" data-wow-delay="0.4s">
                    <h2>Nafees Mazhar </h2>
                    <p>Digital Marketing Strategist | Content Creator | YouTube Growth Expert</p>
                    <div className="list">
                    Nafees Mazhar is a leading digital marketer, YouTuber, and social media influencer with an impressive track record in building successful online communities and creating engaging content. As the founder of Online Pakistan and E Blood, Nafees has used his expertise in content creation to empower countless individuals to harness the power of social media for financial independence. 
                    </div>
                    <div className="social-icon d-flex align-items-center">
                      <a href="https://www.linkedin.com/in/nafees-mazhar-youtuber/" className="color-4">
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
              <p className="pb-4 wow fadeInUp" data-wow-delay=".4s">
              Since launching his YouTube journey in 2016, Nafees has achieved remarkable success, growing his flagship channel, Purisrar Dunya, to over 1.73 million subscribers. His consistent delivery of viral, high-quality content has earned him prestigious accolades, including the YouTube Silver Play Button, Golden Play Button, and multiple Connected Pakistan Awards in 2021 and 2023.
              </p>
              <h2 className="wow fadeInUp" data-wow-delay=".5s">A Proven Path to Social Media Success </h2>
              <p className="wow fadeInUp" data-wow-delay=".3s">Nafees has managed and expanded multiple YouTube channels, each surpassing 100,000 subscribers. His expertise spans: </p>
              <ul className="about-list wow fadeInUp py-2 mb-4" data-wow-delay=".5s">
                <li>
                  <i className="fas fa-check" />
                    <b>Content Strategy:</b> Crafting compelling narratives that captivate audiences and drive engagement. 
                </li>
                <li>
                  <i className="fas fa-check" />
                  <b>SEO Optimization:</b> Maximizing video visibility through cutting-edge keyword strategies and analytics.
                </li>
                <li>
                  <i className="fas fa-check" />
                  <b>Monetization:</b> Leveraging social media platforms to create passive income streams. 
                </li>
              </ul>
              <h2 className="wow fadeInUp mb-0" data-wow-delay=".3s">Join Fire Up Club for Exclusive Insights </h2>
              <p className="py-2">As a key contributor to the Fire Up Club, Nafees offers members exclusive access to his proven strategies for creating passive income through social media. Through interactive sessions, giveaways of valuable tools, and hands-on mentorship, members can fast-track their journey to financial independence by mastering YouTube and other platforms. </p>
              <p className="py-2">Nafees is passionate about democratizing access to digital opportunities. His workshops and guidance focus on helping individuals, particularly from non-financial backgrounds, unlock their potential in the digital economy. </p>
              <p className="py-2">Start your YouTube and social media journey with Nafees Mazhar today and turn your creativity into a sustainable source of income! </p>

            </div>
          </div>
        </div>
      </section>

      <Team />
    </NextLayout>
  );
};
export default page;
