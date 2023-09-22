import { useEffect, useState } from "react";
import Job from "../../Job/Job";

const Feature = () => {
  const [jobs, setJobs] = useState([]);
  const [cards, setCards] = useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
 
  return (
    <div>
      <div className="text-center my-10 space-y-5">
        <h2 className="text-5xl">Featured Jobs</h2>
        <p>
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="max-w-sm md:max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
        {jobs.slice(0, cards).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className={cards === jobs.length && "hidden"}>
        {" "}
        <div className="text-center mt-20">
          <button className="btn" onClick={()=> setCards(jobs.length)}>
            Show All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
