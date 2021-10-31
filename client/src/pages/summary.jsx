import React, {useState, useEffect} from "react";
import axios from "axios";
//import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom';

const Summary = () => {
    const [summaryData, setSummaryData] = useState([]);
    //const [isLoadingData, setLoadingData] = useState(false);

    useEffect(() => {
        //setLoadingData(true);
        axios.get(`http://localhost:3000/record/`)
            .then((response) => {
                //setLoadingData(false);
                setSummaryData(response.data);
            })
            .catch(error => console.error(error));
    }, []);

    const chartStyle = {
        background: "#FFFFFF",

    };

    return (
        <>
            <div className="component-summary">
                <h1>Summary</h1>
                {/*todo: embed charts - change to js sdk*/}
                <iframe title="chart1" style={chartStyle} width="640" height="480"
    src="https://charts.mongodb.com/charts-kyc-xbmjh/embed/charts?id=60b0ed1a-570b-4226-805a-2a3316aa4ac6&maxDataAge=300&theme=light&autoRefresh=false"/>
                <iframe title="chart1" style={chartStyle} width="640" height="480"
    src="https://charts.mongodb.com/charts-kyc-xbmjh/embed/charts?id=7e488c53-aa2a-4a2d-85a0-13a2c3ce99d7&maxDataAge=300&theme=light&autoRefresh=false"/>
                {/*todo: paginated datatable from database, status conditional formatting?*/}
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Birth date</th>
                        <th>Countries</th>
                        <th>Score</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {summaryData.map(result => (
                        <tr key={result._id}>
                            <td>{result.name}</td>
                            <td>{result.birth_date}</td>
                            <td>{result.countries}</td>
                            <td>{result.score}</td>
                            <td>{result.status}</td>
                        </tr>

                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Summary;