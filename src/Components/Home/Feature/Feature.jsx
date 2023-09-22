import { useEffect, useState } from "react";
import Job from "../../Job/Job";

const Feature = () => {
    const [jobs,setJobs] =useState([])
    useEffect(()=>{
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data))
    },[])
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
        {
            jobs.map(job => <Job key={job.id} job={job}></Job>)
        }
      </div>
    </div>
  );
};

export default Feature;
