import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import 'skeleton-css/css/skeleton.css';
import './App.css';
import Header from './components/common/Header/Header';
import Tables from './components/tables/Tables/Tables';
import Waiters from './components/waiters/Waiters/Waiters';

function App() {
    return (
        <Router>
            <div className="container">
                <Header />
                <Switch>
                    <Route path="/waiters" component={Waiters} />
                    <Route path="/tables" component={Tables} />
                    <Route path="*">
                        <Redirect to="/tables" />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
