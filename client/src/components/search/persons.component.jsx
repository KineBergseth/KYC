import React, {useState, useEffect} from "react";
import axios from "axios";
import {Button, Card, Col, Row} from "react-bootstrap";

const countries = require("i18n-iso-countries");
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

const Persons = (props) => {
    const [personData, setPersonData] = useState([]);
    const [isLoadingData, setLoadingData] = useState(false);
    const [error, setError] = useState(null);
    const [isPep, setIsPep] = useState(false);

    const countryName = (code) => {
        return countries.getName(code, "en", {select: "official"})
    }

    const addToDB = (person) => {
        axios.post(`/persons/create/`, person)
            .then((response) => {
                console.log(response);
                console.log(response.data);

            })
            .catch(error => {
                setError(error);
                console.error(error)
            });
    }

    useEffect(() => {
        (async () => {
            setLoadingData(true);
            axios.get(`/api/persons${props.kycValue}`)
                .then((response) => {
                    setPersonData(response.data.hits);
                    response.data.length === 0 ? setIsPep(false) : setIsPep(true);
                    setLoadingData(false);
                })
                .catch(error => console.error(error));
        })();
    }, [props.kycValue]);

    if (!isLoadingData && !isPep) return <h1>Person is not PEP</h1>
    if (error) return <p>Error {error.message}</p>

    return (
        isLoadingData ?
            <p>Loading data...</p>
            :
            <div>
                <Row xs={1} md={3} className="g-4">
                    {personData.map(result => (
                        <Col key={result.id}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{result.name}</Card.Title>
                                    <Card.Text>Dataset: {result.dataset}</Card.Text>
                                    <Card.Text>Birthdate: {result.birth_date}</Card.Text>
                                    <Card.Text>Countries: {countryName(result.countries)}</Card.Text>
                                    <Card.Text>Score: {result.score}</Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <Button variant="success"
                                            onClick={() => addToDB(result)}>Add to DB
                                    </Button>
                                </Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
    )
}

export default Persons;