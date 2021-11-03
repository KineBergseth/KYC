import {Button} from "react-bootstrap";
import React, {useState} from "react";
import countryConvert from "i18n-iso-countries";
import axios from "axios";

const ViewPerson = (props) => {
    const [notes, setNotes] = useState("");
    const currentPerson = props.person;
    const {name, aliases, birth_date, countries, dataset, score, status} = props.person;
    const countryName = countryConvert.getName(countries, "en", {select: "official"});

    const submitReject = () => {
        updateStatus(currentPerson._id, 'rejected');
        setNotes("");
    }
    const submitApprove = () => {
        updateStatus(currentPerson._id, 'approved');
        setNotes("");
    }
    const submitAnalyse = () => {
        updateStatus(currentPerson._id, 'awaiting further analysis');
        setNotes("");
    }

    const handleInputChange = (event) => {
        setNotes(event.target.value);
    };

    const updateStatus = (id, newStatus) => {
        const update = {
            notes: notes,
            status: newStatus
        };
        axios.put(`/persons/update/${id}`, update)
            .then((response) => {
                console.log(response);
            })
            .catch(error => console.error(error));
    }
    return (
        <div className="col-md-8">
            <div className="d-md-flex flex-row flex-wrap justify-content-around mb-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor"
                     className="bi bi-file-person" viewBox="0 0 16 16">
                    <path
                        d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
                    <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                </svg>
                <h1>{name}</h1>
            </div>
            <table className="d-md-flex justify-content-center">
                <tbody>
                <tr>
                    <td>Name</td>
                    <td>{name}</td>
                </tr>
                <tr>
                    <td>Aliases</td>
                    <td>{aliases}</td>
                </tr>
                <tr>
                    <td>Birth date</td>
                    <td>{birth_date}</td>
                </tr>
                <tr>
                    <td>Countries code</td>
                    <td>{countries}</td>
                </tr>
                <tr>
                    <td>Countries</td>
                    <td>{countryName}</td>
                </tr>
                <tr>
                    <td>Dataset</td>
                    <td>{dataset}</td>
                </tr>
                <tr>
                    <td>Score</td>
                    <td>{score}</td>
                </tr>
                <tr>
                    <td>Status</td>
                    <td>{status}</td>
                </tr>
                <tr>
                    <td>Notes</td>
                    <td><textarea
                        id="input-notes"
                        name="input-notes"
                        value={notes}
                        onChange={handleInputChange}
                    /></td>
                </tr>
                </tbody>
            </table>
            <div className="">
                <Button variant="success"
                        onClick={submitApprove}>Approve
                </Button>
                <Button variant="warning"
                        onClick={submitAnalyse}>Further enquiry
                </Button>
                <Button variant="danger"
                        onClick={submitReject}>Reject
                </Button>
            </div>
        </div>
    )
}
export default ViewPerson;
