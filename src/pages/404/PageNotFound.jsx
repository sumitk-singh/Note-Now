import "./PageNotFound.css";
import notFound from "../../assets/page_not_found.svg";
import {Link} from "react-router-dom";

const PageNotFound = () => {
  return (
    <section className="not-found-ctn pd-lg">
      <div className="not-found-img">
        <img src={notFound} alt="page-not-found" className="img-responsive" />
      </div>
      <div className="not-found-cta">
        <Link to="/notes" className="btn btn-primary pd-sm">
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default PageNotFound
