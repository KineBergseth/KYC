import React, {useState} from 'react'
import Result from './result.component'

const randomKycValue = () => {
    // random people and org no. for random choice generator
    const people = [
        'Erna Solberg',
        'Knut Arild Hareide',
        'Lars Monsen',
        'Magnus Carlsen',
        'Viktor Hovland',
        'Kari Elisabeth Kaski',
        'Jens Stoltenberg'
    ];
    const companies = [
        '994023993',
        '981078365',
        '955292898',
        '997711637',
        '823488882',
        '985479038',
        '989978276'
    ];
    const pep_values = people.concat(companies);
    return pep_values[Math.floor(Math.random() * pep_values.length)]
};

// functional component. so i can use hooks <3
const Search = () => {
    const [KYC, setKYC] = useState("");
    const [showResult, setResult] = useState(false);

    const handleSubmit = (event) => {
      event.preventDefault();
      setResult(true);
    };

    const handleInputChange = (event) => {
        setKYC(event.target.value);
    };

    // cant be bothered to enter input all the time, so random gen to make life easier
    const genInputValue = () => {
        setResult(false);
        setKYC(randomKycValue());
    };

    return (
        <>
            <div className="component-search">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="input-kyc">Insert name/Org no. here</label>
                    <input
                        type="text"
                        id="input-kyc"
                        name="input-kyc"
                        value={KYC}
                        onChange={handleInputChange}
                        required
                    />
                    <button type="submit">Submit</button>
                </form>
                <button onClick={genInputValue}>Generate data for me</button>
            </div>
            {showResult && <Result kycValue={KYC}/>}
        </>
    )
}

export default Search;