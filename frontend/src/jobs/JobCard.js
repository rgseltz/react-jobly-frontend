import React,{useContext, useEffect, useState} from "react";
import UserContext from "../hooks/userContext";
const JobCard = ({title, equity, salary, company, id}) => {
    const {currentUser, alreadyApplied, applyToJob, appIds} = useContext(UserContext);
    const [clickedApply, setClickedApply] = useState(false);
    const handleApplication = async (evt) => {
        evt.preventDefault();
        setClickedApply(!clickedApply);
        currentUser.applications.push({title, id});

        await applyToJob(id);
        currentUser.applications.push(id);
    }
   useEffect(() => {
    if (appIds.includes(id)){
        console.log(currentUser);
        setClickedApply(!clickedApply);
        return console.log('already-applied');
    }
   }, []) 
       
  
    const applyBtn = <button className="JobCard btn btn-primary btn-apply" onClick={handleApplication}>Apply</button>
    const appliedBtn = <button className="JobCard btn btn-secondary btn-applied">Applied</button>
    return (
            <div className="JobCard card text-center">
                <div className="JobCard card-body">
                <h4 className="JobCard card-title">{company}</h4>
                <h5 className="JobCard card-title">{title}</h5>
                <p className="JobCard card-text">Salary: {salary}</p>
                <p className="JobCard card-text">Equity: {equity}</p>
                <p>Job Id: {id}</p>
                {clickedApply ? appliedBtn : applyBtn}
                {/* <button className="JobCard btn btn-primary btn-apply" onClick={handleApplication}>
                {clickedApply ? "Applied" : "Apply"}
                </button> */}

                
                
                {/* <button className="JobCard btn btn-primary btn-apply" onClick={handleApplication}>
                {clickedApply ?  "Applied" : "Apply"}
                </button> */}
                
                </div>
            </div>
            )
};
export default JobCard;