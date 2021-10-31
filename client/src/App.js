import React from "react";
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navigation from "./components/navbar.component";
import Home from "./pages/home";
import Search from "./pages/search";
import Queue from "./pages/queue";
import Summary from "./pages/summary";

function App() {
    /*const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);*/

    return (<>
            <div className="App">
                <header className="App-header">
                    <Router>
                        <Navigation />
                        <Switch>
                            <Route path="/" exact component={Home}/>
                            <Route path="/search" component={Search}/>
                            <Route path="/queue" component={Queue}/>
                            <Route path="/summary" component={Summary}/>
                        </Switch>
                    </Router>
                    {/*<img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        KYC
                    </p>

                    <p>{!data ? "Loading..." : data}</p>*/}
                </header>
            </div>
        </>
    );
}

export default App;
