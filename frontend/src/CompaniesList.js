import React, {useState, useEffect} from "react";
import JoblyApi from './api'
import CompanyCard from './CompanyCard';
import SearchForm from './SearchForm';

const CompaniesList = () => {
    const [companies, setCompanies] = useState([]);

    /**On mount, get all companies */
    useEffect(() => {
        getCompanies();
        }, []
    );
    async function getCompanies(name) {
        let companies = await JoblyApi.getCompanies(name)
        setCompanies(companies)
    }
    return (
        <>
        <SearchForm search={getCompanies}/>
        {companies.length === 0 ? <p>Nothing Found</p> : companies.map(c => <div key={c.handle} ><CompanyCard name={c.name} handle={c.handle} logo={c.logoUrl} description={c.description} employees={c.numEmployees}/></div>)}
        </>
    )
}
export default CompaniesList;