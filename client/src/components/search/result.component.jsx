import React from "react";
import Persons from './persons.component'
import Company from "./company.component";

const Result = (props) => {
    const value = props.kycValue;
    //const data = isNaN(value) ? <Person/> : <Company/>;
    //var p === person ? <Person/> : <Company/>
    const isNotNumber = isNaN(value);

    return (<>
            <p>Result</p>
            <div className="component-result">
                {/*<Person person={props.pep_value}/>
                {showResult && <Result kycValue={value}/>}*/}
                {isNotNumber? <Persons kycValue={value}/> : <Company kycValue={value}/>}
            </div>
        </>
    )
}

export default Result;