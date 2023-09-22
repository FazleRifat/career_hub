import PropTypes from "prop-types";
import { CiLocationOn } from 'react-icons/ci';
const Job = ({ job }) => {
  const { logo,job_title,company_name,remote_or_onsite,job_type,location,salary} = job;
  return (
    <div className="card w-96 bg-base-100 shadow-xl mt-10">
      <figure>
        <img
        className="ml-0"
          src={logo}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {job_title}
        </h2>
        <p>{company_name}</p>
        <div className="card-actions justify-start">
          <div className="badge badge-outline">{remote_or_onsite}</div>
          <div className="badge badge-outline">{job_type}</div>
        </div>
        <div className="flex justify-between content-center">
            <div><CiLocationOn></CiLocationOn>{location}</div>
            <div>{salary}</div>
        </div>
      </div>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object.isRequired,
};

export default Job;
