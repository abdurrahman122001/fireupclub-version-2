import Link from "next/link";

 const Pricing2 = () => {
  return (
    <section
      className={`fix section-padding pricing-section-2`}
      id="pricing"
    >
      <div className="container">
        <div className="section-title text-center">
          <span className="sub-content wow fadeInUp">
            <img src="assets/img/bale.png" alt="img" />
              Pricing Package
          </span>
          <h2 className="wow fadeInUp" data-wow-delay=".3s">
            Choose Your Plan & Start Growing
          </h2>
        </div>
        <div className="row pb-2 pricing-small">
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="pricing-card-items-2">
              <div className="pricing-header">
                <h3>Monthly Plan</h3>
                <p>
                  Perfect for those looking to get started
                </p>
              </div>
              <div className="pricing-button">
                <Link href="Subscription" className="theme-btn bg-header">
                  Choose Package
                </Link>
              </div>
              <div className="price-items">
                <h2>
                  <sub>$</sub>10 <span>/month</span>
                </h2>
                <div className="discount">
                  <h6>
                    23% <br />
                    OFF
                  </h6>
                </div>
                <div className="arrow-img">
                  <img src="assets/img/arrow.png" alt="img" />
                </div>
              </div>
              <ul className="price-list">
                <li>
                  <i className="far fa-check" />
                  One-on-One Expert Sessions
                </li>
                <li>
                  <i className="far fa-check" />
                  Personlized Financial & Branding Plans
                </li>
                <li>
                  <i className="far fa-check" />
                  Step-by-Step Guidance
                </li>
                <li>
                  <i className="far fa-check" />
                  Access to Exclusive Resources & Community
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="pricing-card-items-2 active">
              <div className="pricing-header">
                <h3>6-Month Plan</h3>
                <p>
                  Best for consistent progress and deeper insights!
                </p>
              </div>
              <div className="pricing-button">
                <Link href="Subscription" className="theme-btn bg-header">
                  Choose Package
                </Link>
              </div>
              <div className="price-items">
                <h2>
                  <sub>$</sub>55<span>/6 months</span>
                </h2>
                <div className="discount">
                  <h6>
                    Save <br />
                    $5!
                  </h6>
                </div>
                <div className="arrow-img">
                  <img src="assets/img/arrow-2.png" alt="img" />
                </div>
              </div>
              <ul className="price-list">
                <li>
                  <i className="far fa-check" />
                  Everything in the Monthly Plan
                </li>
                <li>
                  <i className="far fa-check" />
                  Long-Term Strategy Optimization
                </li>
                <li>
                  <i className="far fa-check" />
                  Additional Expert Insights & Priority Support
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay=".7s"
          >
            <div className="pricing-card-items-2">
              <div className="pricing-header">
                <h3>Annual Plan (Best Value)</h3>
                <p>
                  The ultimate plan for long-term success!
                </p>
              </div>
              <div className="pricing-button">
                <Link href="Subscription" className="theme-btn bg-header">
                  Choose Package
                </Link>
              </div>
              <div className="price-items">
                <h2>
                  <sub>$</sub>100<span>/month</span>
                </h2>
                <div className="discount">
                  <h6>
                    Save <br />
                    $20!
                  </h6>
                </div>
                <div className="arrow-img">
                  <img src="assets/img/arrow.png" alt="img" />
                </div>
              </div>
              <ul className="price-list">
                <li>
                  <i className="far fa-check" />
                  Everything in the 6 Month Plan
                </li>
                <li>
                  <i className="far fa-check" />
                  Ongoing Accountability & Follow-Ups
                </li>
                <li>
                  <i className="far fa-check" />
                  VIP Access to Advanced Strategies & Exclusive Events
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Pricing2;