import React, {useEffect, useState} from 'react'
import axios from "axios";
import {Button, ListGroup, ListGroupItem} from "react-bootstrap";

const countries = require("i18n-iso-countries");
countries.registerLocale(require("i18n-iso-countries/langs/en.json"));

const Queue = () => {
    const [nameData, setNameData] = useState([]);
    //const [isLoadingData, setLoadingData] = useState(false);
    const [currentPerson, setCurrentPerson] = useState(null); // current person 4 view

    // todo: only get people with status waiting
    useEffect(() => {
        //setLoadingData(true);
        axios.get(`http://localhost:3000/record/`)
            .then((response) => {
                //setLoadingData(false);
                setNameData(response.data);
            })
            .catch(error => console.error(error));
    }, []);

    const updateStatus = (id, newStatus) => {
        const update = {
            status: newStatus
        };
        axios.put(`http://localhost:3000/update/${id}`, update)
            .then((response) => {
                console.log('updated data woo');
            })
            .catch(error => console.error(error));
    }
    const countryName = (code) => {
        return countries.getName(code, "en", {select: "official"})
    }

    return (
        <>
            <div className="component-queue list row container">
                <div className="col-md-4">
                    <h1>Queue</h1>
                    {/*todo: left side: actionable listitems - scrollable element?*/}
                    <ListGroup>
                        {nameData.map(result => (
                            <ListGroupItem key={result._id} onClick={() => setCurrentPerson(result)}>
                                {result.name}
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </div>

                {currentPerson ? (
                        <div className="col-md-8">
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor"
                                 className="bi bi-file-person" viewBox="0 0 16 16">
                                <path
                                    d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                                <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg>
                            <h1>{currentPerson.name}</h1>
                            <table>
                                <tbody>
                                <tr>
                                    <td>Name</td>
                                    <td>{currentPerson.name}</td>
                                </tr>
                                <tr>
                                    <td>Aliases</td>
                                    <td>{currentPerson.aliases}</td>
                                </tr>
                                <tr>
                                    <td>Birth date</td>
                                    <td>{currentPerson.birth_date}</td>
                                </tr>
                                <tr>
                                    <td>Countries code</td>
                                    <td>{currentPerson.countries}</td>
                                </tr>
                                <tr>
                                    <td>Countries</td>
                                    <td>{countryName(currentPerson.countries)}</td>
                                </tr>
                                <tr>
                                    <td>Last seen</td>
                                    <td>{currentPerson.last_seen}</td>
                                </tr>
                                <tr>
                                    <td>First seen</td>
                                    <td>{currentPerson.first_seen}</td>
                                </tr>
                                <tr>
                                    <td>Dataset</td>
                                    <td>{currentPerson.dataset}</td>
                                </tr>
                                <tr>
                                    <td>Score</td>
                                    <td>{currentPerson.score}</td>
                                </tr>
                                </tbody>
                            </table>
                            <p>TEXTFIELD 4 NOTES</p>
                            <textarea/>
                            <>
                                <Button variant="success"
                                        onClick={() => updateStatus(currentPerson._id, 'approved')}>Approve</Button>
                                <Button variant="warning"
                                        onClick={() => updateStatus(currentPerson._id, 'awaiting further analysis')}>Further
                                    enquiry</Button>
                                <Button variant="danger"
                                        onClick={() => updateStatus(currentPerson._id, 'rejected')}>Reject</Button>

                            </>
                        </div>)
                    :
                    (<p>Please select person</p>
                    )}
            </div>
        </>
    )
}

export default Queue;