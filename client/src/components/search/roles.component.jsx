import React, {useState} from "react";
import {Button, Card, Col, Row} from "react-bootstrap";
import axios from "axios";

const Roles = (props) => {
    const [isPep, setIsPep] = useState("");
    const roles = props.roles;

    const onPepCheck = async (fName, lName) => {
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
                                    {/* if a role is a company, don display person info */}
                                    {'person' in res ?
                                        <>
                                            <Card.Text>{`Fornavn : ${res.person.navn.fornavn}`}</Card.Text>
                                            <Card.Text>{`Etternavn: ${res.person.navn.etternavn}`}</Card.Text>
                                            <Card.Text>{`Fødselsdato: ${res.person.fodselsdato}`}</Card.Text>
                                            <Card.Text>{isPep}</Card.Text>
                                            <Card.Footer>
                                                <Button
                                                    onClick={onPepCheck(res.person.navn.fornavn, res.person.navn.etternavn)}>PEP
                                                    check
                                                </Button>
                                            </Card.Footer>
                                        </>
                                        :
                                        <Card.Footer>
                                            <Card.Text>{res.enhet.navn}</Card.Text>
                                        </Card.Footer>
                                    }

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