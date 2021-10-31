import React, {useEffect, useState} from 'react'
import axios from "axios";
import {Button, ListGroup, ListGroupItem} from "react-bootstrap";

const Queue = () => {
    const [nameData, setNameData] = useState([]);
    const [personData, setPersonData] = useState([]);
    //const [isLoadingData, setLoadingData] = useState(false);
    //get name list from db
    // get person from db
    //update notes/status in db

    useEffect(() => {
        //setLoadingData(true);
        axios.get(`http://localhost:3000/record/`)
            .then((response) => {
                //setLoadingData(false);
                setNameData(response.data);
            })
            .catch(error => console.error(error));
    }, []);

    const showPerson = (id) => {
        axios.get(`http://localhost:3000/record/${id}`)
            .then((response) => {
                //setLoadingData(false);
                setPersonData(response.data);
            })
            .catch(error => console.error(error));
    }

    return (
        <>
            <div className="component-queue">
                <h1>Queue</h1>
                {/*todo: left side: actionable listitems - scrollable element?*/}
                <ListGroup>
                    {nameData.map(result => (
                        <ListGroupItem key={result._id} onClick={ () => showPerson(result._id)}>
                            {result.name}
                        </ListGroupItem>
                    ))}
                </ListGroup>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor"
                     className="bi bi-file-person" viewBox="0 0 16 16">
                    <path
                        d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                    <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
                <h1>{personData.name}</h1>
                <table>
                    <tbody>
                    <tr>
                        <td>Name</td>
                        <td>{personData.name}</td>
                    </tr>
                    <tr>
                        <td>Aliases</td>
                        <td>{personData.aliases}</td>
                    </tr>
                    <tr>
                        <td>Birth date</td>
                        <td>{personData.birth_date}</td>
                    </tr>
                    <tr>
                        <td>Countries</td>
                        <td>{personData.countries}</td>
                    </tr>
                    <tr>
                        <td>Last seen</td>
                        <td>{personData.last_seen}</td>
                    </tr>
                    <tr>
                        <td>First seen</td>
                        <td>{personData.first_seen}</td>
                    </tr>
                    <tr>
                        <td>Dataset</td>
                        <td>{personData.dataset}</td>
                    </tr>
                    <tr>
                        <td>Score</td>
                        <td>{personData.score}</td>
                    </tr>
                    </tbody>
                </table>
                <p>TEXTFIELD 4 NOTES</p>
                <textarea></textarea>
                <>
                    <Button variant="success">Approve</Button>
                    <Button variant="warning">Further inquery</Button>
                    <Button variant="danger">Reject</Button>

                </>
            </div>
        </>
    )
}

export default Queue;