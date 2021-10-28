import React from "react";
import "./persons.styles.css";

const Persons = (props) => {
    const person = props; //person

    return (<>
            <div className="component-persons container">
                {person.map(result =>
                    <table className="table-person table">
                        <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{result.name}</td>
                        </tr>
                        <tr>
                            <td>Dataset</td>
                            <td>{result.dataset}</td>
                        </tr>
                        <tr>
                            <td>Birthdate</td>
                            <td>{result.birth_date}</td>
                        </tr>
                        <tr>
                            <td>Citizenship</td>
                            <td>{result.countries}</td>
                        </tr>
                        <tr>
                            <td>Score</td>
                            <td>{result.score}</td>
                        </tr>
                        </tbody>
                    </table>
                )
                }
            </div>
        </>
    )
}

export default Persons;