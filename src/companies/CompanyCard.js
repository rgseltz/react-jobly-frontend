import React from "react";
import { Link } from "react-router-dom";
const CompanyCard = ({name, handle, description, logo, employees}) => {
    return (
        <Link to={`/companies/${handle}`}>
        <div className="CompanyCard card text-center">
            <div className="CompanyCard card-body">
                <h5 className="CompanyCard card-title">{name}</h5>
                <p className="CompanyCard card-text">{description}</p>
                <p className="CompanyCard card-text">Number of Employees: {employees}</p>
            </div>
        </div>
        </Link>
    )
}
export default CompanyCard;