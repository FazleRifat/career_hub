import PropTypes from "prop-types";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineDollarCircle } from "react-icons/ai";
const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;
  return (
    <div className="card w-96 justify-start bg-base-100 shadow-xl mt-10">
      <figure>
        <img className="ml-0" src={logo} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className="card-actions justify-start">
          <div className="badge badge-outline rounded-md">
            {remote_or_onsite}
          </div>
          <div className="badge badge-outline rounded-md">{job_type}</div>
        </div>
        <div className="flex gap-7 content-center">
          <span className="flex items-center">
            <CiLocationOn></CiLocationOn>
            {location}
          </span>
          <span className="flex items-center">
            <AiOutlineDollarCircle></AiOutlineDollarCircle>
            {salary}
          </span>
        </div>
        <div className="justify-start">
          <button className="btn">View Details</button>
        </div>
      </div>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object.isRequired,
};

export default Job;
