import React, {useState, useEffect} from "react";
import axios from "axios";
import Roles from "./roles.component";

const Company = (props) => {
    const [companyData, setCompanyData] = useState([]);
    const [roleData, setRoleData] = useState([]);
    const [isLoadingData, setLoadingData] = useState(false);
    const [error, setError] = React.useState(null);


    useEffect(() => {
        (async () => {
            setLoadingData(true);
            const reqCompany = axios.get(`/api/company${props.kycValue}`);
            const reqRoles = axios.get(`/api/roles${props.kycValue}`);
            axios.all([reqCompany, reqRoles])
                .then(axios.spread((companyRes, rolesRes) => {
                    setCompanyData(companyRes.data);
                    setRoleData(rolesRes.data);
                    setLoadingData(false);
                }))
                .catch(error => {
                    setError(error);
                    console.error(error)
                });
        })();
    }, [props.kycValue]);

    if (props.kycValue.length !== 9) return <h1>Not a valid org number</h1>
    if (error) return <p>Error {error.message}</p>

    return (
        isLoadingData ?
            <p>Loading data...</p>
            :
            <>
                <div className="component-company container">
                    <h1>Company overview</h1>
                    <table className="table-company table" key={companyData.organisasjonsnummer}>
                        <tbody>
                        <tr>
                            <td>Firmaname</td>
                            <td>{companyData.navn}</td>
                        </tr>
                        <tr>
                            <td>Orgnr</td>
                            <td>{companyData.organisasjonsnummer}</td>
                        </tr>
                        <tr>
                            <td>Konkurs</td>
                            <td>{companyData.konkurs === false ? 'nei' : 'ja'}</td>
                        </tr>
                        <tr>
                            <td>Under avvikling</td>
                            <td>{companyData.underAvvikling === false ? 'nei' : 'ja'}</td>
                        </tr>
                        <tr>
                            <td>Under tvungen avvikling/oppl??sning</td>
                            <td>{companyData.underTvangsavviklingEllerTvangsopplosning === false ? 'nei' : 'ja'}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                {roleData != null ? <Roles roles={roleData}/> : null}
            </>
    )
}

export default Company;
