import Breadcrumb from "@/components/Breadcrumb";
import NextLayout from "@/layouts/NextLayout";
import Link from "next/link";
const page = () => {
  return (
    <NextLayout header={3} footer={3} single>
      <Breadcrumb pageName="Error 404" />
      <div className="error-section fix section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="error-items text-center">
                <div className="error-image wow fadeInUp" data-wow-delay=".3s">
                  <h1 style={{ color: 'var(--theme)' }}>404 - Not Found</h1>
                  <p>It looks like nothing was found at this location.</p>
                </div>
                <Link
                  href="/"
                  className="theme-btn wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <span>
                    Back To Home
                    <i className="fas fa-chevron-right" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NextLayout>
  );
};
export default page;
