import React from "react";
import JobCard from "./JobCard";
const JobList = ({jobs}) => {
    return (
        <>
        <h1>Job List</h1>
        {jobs.map(j => <JobCard key={j.id} id={j.id} company={j.compy} title={j.title} equity={j.equity} salary={j.salary}/>)}
        </>
    )
}
export default JobList;