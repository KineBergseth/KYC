import React, {useState, useEffect} from "react";
import "./company.styles.css";
import axios from "axios";

const Company = (props) => {
    const [companyData, setCompanyData] = useState([]);
    const [roleData, setRoleData] = useState([]);
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

    return isLoadingData ?
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
                <div className="component-roles container">
                   {/* <Row xs={1} md={3} className="g-4">
                        {personData.map(result => (
                            <Col key={result.id}>
                                <Card>
                                    <Card.Body>
                                        <Card.Title>{result.name}</Card.Title>
                                        <Card.Text>Dataset: {result.dataset}</Card.Text>
                                        <Card.Text>Birthdate: {result.birth_date}</Card.Text>
                                        <Card.Text>Countries: {countryName(result.countries)}</Card.Text>
                                        <Card.Text>Country codes: {result.countries}</Card.Text>
                                        <Card.Text>Score: {result.score}</Card.Text>
                                        <Button variant="success"
                                                onClick={() => addToDB(result)}>Add to DB</Button>
                                    </Card.Body>
                                    <Card.Footer className="text-muted">Last seen {result.last_seen}</Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>*/}
                </div>
            </>
}

export default Company;

//todo konk- liquidation, Not registrerd in VAT register bad?