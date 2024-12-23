"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Register Swiper modules 
SwiperCore.use([Autoplay, Pagination, Navigation]);



const Team = ()  => {
// Team data
const teamMembers = [
  {
    name: "Saqib Z Siddiqui",
    role: "Technical Analyst",
    image: "assets/img/team/02.webp",
    url: "/saqib-siddiqui",
    socialLinks: {

    },
  },
  {
    name: "Imran Kalim",
    role: "E-Commerce Expert",
    image: "assets/img/team/03.webp",
    url: "imran-kalim",
    socialLinks: {
    },
  },
  {
    name: "Nafees Mazhar",
    role: "Content Creator & Youtuber",
    image: "assets/img/team/04.webp",
    url: "/nafees-mazhar",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/nafees-mazhar-youtuber/",
    },
  },
  {
    name: "Farid Aliani – CFA",
    role: "Portfolio Management Expert",
    image: "assets/img/team/05.webp",
    url: "/farid-aliani",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/faridaliani/",
    },
  },
  {
    name: "Umaima Ansari",
    role: "Amazon Kdp Expert",
    image: "assets/img/team/06.jpg",
    url: "/umaima-ansari",
    socialLinks: {
    },
  },
  {
    name: "Rehan Kazmi – FCA",
    role: "Tax Consultant",
    image: "assets/img/team/07.webp",
    url: "/rehan-kazmi",
    socialLinks: {

      linkedin: "https://www.linkedin.com/in/syed-rehan-kazmi-fca-icap-aca-icaew-b9b99825/",
    },
  },
];

  return (
    <section className="team-section fix team-bg section-padding" id="team">
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="assets/img/bale.png" alt="img" />
            Team Members
          </span>
          <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
            Meet Our Professional Team Members
          </h2>
        </div>
        <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-4">
              <div className="team-card-items">
                <div className="team-image">
                  <Link href="/nabeel-shaikh">
                    <img src="assets/img/team/01.webp" alt="Nabeel Shaikh – FCA" style={{ height: "335px", width: "100%", objectFit: "cover" }}/>
                  </Link>
                    <div className="icon-list">
                      <ul>
                        <li>
                          <a href="https://www.linkedin.com/in/nabeilschaik/"
                          onClick={(e) => e.stopPropagation()}
                          target="_blank"
                          rel="noopener noreferrer"
                          >
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  
                </div>
                <div className="team-content">
                  <h4>
                  <Link href="nabeel-shaikh"> Nabeel Shaikh – FCA </Link>
                  </h4>
                  <p>Founder</p>
                </div>
              </div>
            </div>
            
            <div className="col-xl-9 col-lg-8 col-md-8">
              <Swiper
              spaceBetween={30}
              slidesPerView={3}
              loop = {true}
              autoplay={{
                delay: 3000,
                
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >

              {teamMembers.map((member, index) => (
                <SwiperSlide key={index}>
                  <div className="team-card-items">
                      <div className="team-image">
                        <Link href = {member.url}>
                        <img src={member.image} alt={`${member.name}`} style={{ height: "335px", width: "100%", objectFit: "cover" }}/>
                        </Link>
                        <div className="icon-list">
                          <ul>
                            <li>
                              <a href={member.socialLinks.linkedin}
                              onClick={(e) => e.stopPropagation()}
                              target="_blank"
                              rel="noopener noreferrer"
                              >
                                <i className="fab fa-linkedin-in" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    
                    <div className="team-content">
                      <h4>
                        <Link href={member.url}>{member.name}</Link>
                      </h4>
                      <p>{member.role}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              </Swiper>
            </div>
        </div>


      </div>
    </section>
  );
};

export default Team;
