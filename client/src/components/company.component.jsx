import React, {useState, useEffect} from "react";
import "./company.styles.css";
import axios from "axios";

const Company = (props) => {
    const [companyData, setCompanyData] = useState([]);
    const [isLoadingData, setLoadingData] = useState(false);


    useEffect(() => {
        (async () => {
            setLoadingData(true);
            axios.get(`/api/company${props.kycValue}`)
                .then((response) => {
                    setLoadingData(false);
                    setCompanyData(response.data);
                })
                .catch(error => console.error(error));
        })();
    }, [props.kycValue]);

    return (isLoadingData ?
            <p>Loading data...</p>
            :
            <>
                <div className="component-company container">
                    <p>company</p>
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
                        {/*
                    if null value this does not work, check for that
                    <tr>
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