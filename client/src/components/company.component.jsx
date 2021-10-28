import React, {useState, useEffect} from "react";
import "./company.styles.css";
import axios from "axios";

const Company = (props) => {
    const [companyData, setCompanyData] = useState([]);


    useEffect(() => {
        axios.get(`/api/company${props.kycValue}`)
            .then((response) => {
                const company = response;
                console.log('peeeeeeeeeeeeeeeeeeeeeeeeeep');
                console.log(company.data);
                setCompanyData(company);
            })
            .catch(error => console.error(error));
    }, []);

    return (<>
            <div className="component-company container">
                <p>company</p>
                <table className="table-company table">
                    <tbody>
                    <tr>
                        <td>Firmaname</td>
                        <td>{companyData.navn}</td>
                    </tr>
                    <tr>
                        <td>Orgnr</td>
                        <td>{companyData.organisasjonsnummer}</td>
                    </tr>
                    {/*<tr>
                        <td>Firmatype</td>
                        <td>{companyData.organisasjonsform.beskrivelse}</td>
                    </tr>
                    <tr>
                        <td>Beskrivelse</td>
                        <td>{companyData.naeringskode1.beskrivelse}</td>
                    </tr>
                    <tr>
                        <td>Stiftelsesdato</td>
                        <td>{companyData.stiftelsesdato}</td>
                    </tr>*/}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Company;