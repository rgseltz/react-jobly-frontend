import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";
import JobsList from "./JobsList";
// import companyContext from "./companyContext";

const CompanyDetail = () => {
    const {handle} = useParams();
    console.log(handle);
    const [company, setCompany] = useState(null)
    useEffect(() => {
        async function getCompany() {
            setCompany(await JoblyApi.getCompany(handle))
        }
        getCompany()
    },[handle]
    )
    console.log(company);

    return (
        <div>
        {company && 
            <div>
                    <h1 className="CompanyDetail name">{company.name}</h1>
                    <h4 className="CompanyDetail description-heading">Company Description:</h4>
                    <p className="CompanyDetail description">{company.description}</p>
                    <p className="CompanyDetail employees">Employees: {company.numEmployees}</p>
                    <h3>Available Roles:</h3>
                    <JobsList jobs={company.jobs}/>
            </div>
            
            }
        </div>
    )
}
export default CompanyDetail;