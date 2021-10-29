import React, {useState, useEffect} from "react";
import "./persons.styles.css";
import axios from "axios";

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
                <div className="component-persons container">
                    {personData.map(result =>
                        <table className="table-person table" key={result.id}>
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