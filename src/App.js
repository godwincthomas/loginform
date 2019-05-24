import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PrivateRoute } from './components/emplistrout';
import Emplist  from "./pages/emplist";
import { LoginPage } from './pages/loginform';

class App extends React.Component {
    render() {
        return (
            <div >
                <div className="container">
                    <div className="col-sm-8">
                        <Router>
                            <div>
                                <PrivateRoute exact path="/" component={Emplist} />
                                <Route path="/login" component={LoginPage} />
                            </div>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
