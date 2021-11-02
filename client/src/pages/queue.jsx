import React, {useEffect, useState} from 'react'
import axios from "axios";
import {Badge, Button, ListGroup, ListGroupItem} from "react-bootstrap";
import ViewPerson from '../components/queue/viewPerson.component'
import EmptyAlert from "../components/queue/emptyAlert.component";


const Queue = () => {
    const [nameData, setNameData] = useState([]);
    const [currentPerson, setCurrentPerson] = useState(null); // current person 4 view

    useEffect(() => {
        getPeople();
    }, []);

    // get all people with waiting status
    const getPeople = () => {
        axios.get(`/persons/waiting/`)
            .then((response) => {
                setNameData(response.data);
            })
            .catch(error => console.error(error));
    }

    return (
        <div className="component-queue list row container mt-3">
            <div className="col-md-4">
                <div className="d-md-flex flex-row flex-wrap justify-content-around mb-1">
                    <h1>Queue</h1>
                    <Button variant="outline-primary" onClick={() => getPeople()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                             className="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                            <path fillRule="evenodd"
                                  d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                            <path
                                d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                        </svg>
                    </Button>
                </div>
                {/* clickable name list */}
                <ListGroup variant="flush" className="overflow-scroll h-50">
                    {nameData.map(result => (
                        <ListGroupItem key={result._id} action onClick={() => setCurrentPerson(result)}>
                            {result.name}
                            {result.status === "awaiting further analysis" ? <Badge pill bg="primary">Complex</Badge> :
                                <Badge pill bg="primary"></Badge>}
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </div>
            {currentPerson == null ? <EmptyAlert/> : <ViewPerson person={currentPerson}/>}
        </div>
    )
}

export default Queue;
