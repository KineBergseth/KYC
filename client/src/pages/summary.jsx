import React, {useState, useEffect} from "react";
import axios from "axios";
import DataTable from 'react-data-table-component';

const Summary = () => {
    const [summaryData, setSummaryData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/persons/get/`)
            .then((response) => {
                setSummaryData(response.data);
            })
            .catch(error => console.error(error));
    }, []);

    const chartStyle = {
        background: "#FFFFFF",
        border: "none",
        borderRadius: "2px",
        boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)"
    };

    const columns = [
        {name: 'Name', selector: row => row.name, sortable: true,},
        {name: 'Birth date', selector: row => row.birth_date, sortable: true,},
        {name: 'Countries', selector: row => row.countries, sortable: true,},
        {name: 'Score', selector: row => row.score, sortable: true,},
        {name: 'Status', selector: row => row.status, sortable: true,},
    ];

    return (
        <>
            <div className="component-summary mt-3">
                <h1>Summary</h1>
                <div className="d-md-flex flex-row flex-wrap justify-content-around">
                    {/* Disse er ikke litt responsive engang men eh */}
                    <iframe width="640" height="480"
                            title="chart-status" style={chartStyle}
                            src="https://charts.mongodb.com/charts-kyc-xbmjh/embed/charts?id=d9181984-b406-48ee-90b2-6db5aced0ffd&maxDataAge=60&theme=light&autoRefresh=true"/>
                    <iframe width="640" height="480"
                            title="chart-location" style={chartStyle}
                            src="https://charts.mongodb.com/charts-kyc-xbmjh/embed/charts?id=8c13f4af-6b57-4892-a6a7-ffdafe7bda22&maxDataAge=60&theme=light&autoRefresh=true"/>
                </div>
                <div className="mt-5 mx-5">
                    <DataTable
                        title=" Registered PEPs"
                        columns={columns}
                        data={summaryData}
                        pagination
                        defaultSortFieldId={1}
                        responsive
                    />
                </div>
            </div>
        </>
    )
}

export default Summary;

