import {Button} from "react-bootstrap";
import React, {useState} from "react";
import countries from "i18n-iso-countries";
import axios from "axios";

const ViewPerson = (props) => {
    const [notes, setNotes] = useState("");
    const currentPerson = props.person;

    const countryName = (code) => {
        return countries.getName(code, "en", {select: "official"})
    }

    const handleInputChange = (event) => {
        setNotes(event.target.value);
    };

    const updateStatus = (id, newStatus) => {
        const update = {
            notes: notes,
            status: newStatus
        };
        axios.put(`http://localhost:3000/persons/update/${id}`, update)
            .then((response) => {
                console.log('updated data woo');
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
                <h1>{currentPerson.name}</h1>
            </div>
            <table className="d-md-flex justify-content-center">
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
                <tr>
                    <td>Status</td>
                    <td>{currentPerson.status}</td>
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
                        onClick={() => {
                            updateStatus(currentPerson._id, 'approved');
                            setNotes("");
                        }}>Approve</Button>
                <Button variant="warning"
                        onClick={() => {
                            updateStatus(currentPerson._id, 'awaiting further analysis');
                            setNotes("");
                        }}>Further
                    enquiry</Button>
                <Button variant="danger"
                        onClick={() => {
                            updateStatus(currentPerson._id, 'rejected');
                            setNotes("");
                        }}>Reject</Button>
            </div>
        </div>
    )
}
export default ViewPerson;
