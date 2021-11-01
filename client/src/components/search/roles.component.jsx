import React, {useState} from "react";
import {Button, Card, Col, Row} from "react-bootstrap";
import axios from "axios";

const Roles = (props) => {
    const [isPep, setIsPep] = useState("");
    const roles = props.roles;

    const pepCheck = async (fName, lName) => {
        const name = (fName + " " + lName).toString();
        axios.get(`/api/persons${name}`)
            .then((response) => {
                !response.data.hits ? setIsPep('Person is not PEP') : setIsPep('Person is PEP');
            })
            .catch(error => console.error(error));
    }

    return <>
        <h1>Company roles</h1>
        <div className="component-roles">
            <Row xs={1} md={3} className="g-4">
                {roles.map(result =>
                    result.roller.map((res, index) => <Col key={index}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{result.type.kode}</Card.Title>
                                    <Card.Text>{res.type.beskrivelse}</Card.Text>
                                    <Card.Text>{'person' in res ? `Fornavn : ${res.person.navn.fornavn}` : ""}</Card.Text>
                                    <Card.Text>{'person' in res ? `Etternavn: ${res.person.navn.etternavn}` : ""}</Card.Text>
                                    <Card.Text>{'person' in res ? `Fødselsdato: ${res.person.fodselsdato}` : ""}</Card.Text>
                                    <Card.Text>{'person' in res ? `${isPep}` : ""}</Card.Text>
                                    <Card.Footer>
                                        {'person' in res ?
                                            <Button
                                                onClick={() => pepCheck(res.person.navn.fornavn, res.person.navn.etternavn)}>PEP
                                                check
                                            </Button>
                                            :
                                            <Card.Text>{res.enhet.navn}</Card.Text>
                                        }
                                    </Card.Footer>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                )}
            </Row>
        </div>
    </>
}

export default Roles;