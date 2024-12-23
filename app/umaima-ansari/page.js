"use client"; 
import Breadcrumb from "@/components/Breadcrumb";
import Team from "@/components/Team";
import NextLayout from "@/layouts/NextLayout";

const page = () => {
  return (
    <NextLayout header={3} footer={3} single>
      <Breadcrumb pageName="Umaima Ansari" />
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
                      backgroundImage: 'url("assets/img/team/06.jpg")',
                    }}
                    data-wow-delay="0.3s"
                  />
                </div>
                <div className="col-lg-1" />
                <div className="col-lg-5">
                  <div className="right-content wow fadeInUp" data-wow-delay="0.4s">
                    <h2>Umaima Ansari - MBA </h2>
                    <p>Amazon KDP Expert | Author | Entrepreneur | HR & Finance Specialist </p>
                    <div className="list">
                    Umaima Ansari is a seasoned Amazon KDP expert and entrepreneur with a diverse background in HR and finance. Holding a BBA (Hons) in Finance and an MBA with bi-majors in HR and Finance, Umaima graduated as a gold medalist from the Institute of Business Management. With over 10 years of experience in human resources across Pakistan and the UAE, Umaima now resides in Canada, where she is pursuing her CHRL designation and exploring entrepreneurial ventures in education. 
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
              Umaima’s professional journey seamlessly blends her expertise in HR and finance with her entrepreneurial drive. She currently manages her own private label on Amazon USA and is the author of three published books on Amazon KDP, with more books on the way. As an instructor for Amazon KDP with Enablers Pakistan, Umaima runs an online institute that offers comprehensive courses to aspiring authors and entrepreneurs, teaching them how to self-publish and succeed on the Amazon KDP platform. 
              </p>

              <p className="py-2 wow fadeInUp py-2" data-wow-delay=".6s">As a proud member and mentor at Fire Up Club, Umaima offers invaluable resources to help members achieve financial independence through Amazon KDP. Her personalized coaching on building and managing Amazon KDP accounts empowers Fire Up Club members to tap into the global self-publishing market. </p>

              <h2 className="py-2 wow fadeInUp py-2 mb-0" data-wow-delay=".7s">A Passion for Education and Empowerment</h2>
              <p className="wow fadeInUp py-2" data-wow-delay=".7s">
              Umaima’s dedication extends beyond publishing; she is an active member of the Peel District School Council in Ontario and strives to bring education and self-sufficiency to individuals worldwide. Her passion for creating passive income streams through Amazon KDP helps aspiring entrepreneurs break free from financial constraints and move closer to their personal and financial goals. 
              </p>
              <p className="wow fadeInUp py-2" data-wow-delay=".7s">
              Join Umaima Ansari at Fire Up Club to learn how to transform your creativity into a passive income source through Amazon KDP and take control of your financial future.  
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
