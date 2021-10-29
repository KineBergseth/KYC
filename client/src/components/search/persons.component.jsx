import React, {useState, useEffect} from "react";
import "./persons.styles.css";
import axios from "axios";
import {Card, Col, Row} from "react-bootstrap";

const Persons = (props) => {
    const [personData, setPersonData] = useState([]);
    const [isLoadingData, setLoadingData] = useState(false);

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
                        <Col>
                            <Card key={result.id}>
                                <Card.Body>
                                    <Card.Title>{result.name}</Card.Title>
                                    <Card.Text>Dataset: {result.dataset}</Card.Text>
                                    <Card.Text>Birthdate: {result.birth_date}</Card.Text>
                                    <Card.Text>Countries: {result.countries}</Card.Text>
                                    <Card.Text>Score: {result.score}</Card.Text>
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