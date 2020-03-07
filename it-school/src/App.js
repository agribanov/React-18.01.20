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
import Groups from './components/groups/Groups/Groups';
import Students from './components/students/Students/Students';

function App() {
    return (
        <Router>
            <div className="container">
                <Header />
                <Switch>
                    <Route path="/students" component={Students} />
                    <Route path="/groups" component={Groups} />
                    <Route path="*">
                        <Redirect to="/groups" />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
