import React from "react";
const JobCard = ({title, equity, salary, company}) => {
    return (
            <div className="JobCard card text-center">
                <div className="JobCard card-body">
                <h4 className="JobCard card-title">{company}</h4>
                <h5 className="JobCard card-title">{title}</h5>
                <p className="JobCard card-text">Salary: {salary}</p>
                <p className="JobCard card-text">Equity: {equity}</p>
                <button className="JobCard btn-primary">Apply</button>
                </div>
            </div>
            )
};
export default JobCard;