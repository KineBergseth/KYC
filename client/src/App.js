import React from "react";
import logo from './logo.svg';
import './App.css';
import Search from "./components/search/search.component";

function App() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    KYC
                </p>
                <p>{!data ? "Loading..." : data}</p>
                <Search />
            </header>
        </div>
    );
}

export default App;
