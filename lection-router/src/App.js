import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
} from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/categories/Categories';

function App() {
    return (
        <Router>
            <div className="header">
                <Link to="/home">Home</Link>
                <Link to="/categories">Categories</Link>
            </div>
            <div className="content">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/categories">
                        <Categories />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
