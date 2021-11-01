import React, {useState, useEffect} from "react";
import "./persons.styles.css";
import axios from "axios";
import {Button, Card, Col, Row} from "react-bootstrap";

const countries = require("i18n-iso-countries");
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

const Persons = (props) => {
    const [personData, setPersonData] = useState([]);
    const [isLoadingData, setLoadingData] = useState(false);

    // todo dont know how this behaves on multiple countries ops
    const countryName = (code) => {
      return countries.getName(code, "en", {select: "official"})
    }

    const addToDB = (person) => {
        axios.post(`http://localhost:3000/create/`, person)
            .then((response) => {
                console.log(response.data);
            })
            .catch(error => console.error(error));
    }

    useEffect(() => {
        (async () => {
            setLoadingData(true);
            axios.get(`/api/persons${props.kycValue}`)
                .then((response) => {
                    setLoadingData(false);
                    setPersonData(response.data.hits);
                })
                .catch(error => console.error(error));
        })();
    }, [props.kycValue]);

    return (isLoadingData ?
            <p>Loading data...</p>
            :
            <>
                <Row xs={1} md={3} className="g-4">
                    {personData.map(result => (
                        <Col key={result.id}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{result.name}</Card.Title>
                                    <Card.Text>Dataset: {result.dataset}</Card.Text>
                                    <Card.Text>Birthdate: {result.birth_date}</Card.Text>
                                    <Card.Text>Countries: {countryName(result.countries)}</Card.Text>
                                    {/*<Card.Text>Country codes: {result.countries}</Card.Text>*/}
                                    <Card.Text>Score: {result.score}</Card.Text>
                                    <Button variant="success"
                                            onClick={() => addToDB(result)}>Add to DB</Button>
                                </Card.Body>
                                <Card.Footer className="text-muted">Last seen {result.last_seen}</Card.Footer>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </>
    )
}

export default Persons;