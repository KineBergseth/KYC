import React from "react";
import Persons from './persons.component'
import Company from "./company.component";

const Result = (props) => {
    const value = props.kycValue;
    const isNotNumber = isNaN(value);

    return (<>
            <div className="component-result mt-4">
                {isNotNumber? <Persons kycValue={value}/> : <Company kycValue={value}/>}
            </div>
        </>
    )
}

export default Result;