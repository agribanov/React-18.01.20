import React from 'react';
import { Switch, useRouteMatch, Route, Redirect } from 'react-router-dom';
import StudentsList from '../StudentsList/StudentsList';
import StudentForm from '../StudentForm/StudentForm';

function Students() {
    const { path } = useRouteMatch();
    return (
        <>
            <div className="row">
                <div className="twelve columns">
                    <h3>Students</h3>
                </div>
            </div>
            <div className="row">
                <div className="twelve columns">
                    <Switch>
                        <Route path={`${path}/`} exact>
                            <StudentsList />
                        </Route>
                        <Route
                            path={`${path}/:id`}
                            render={route => (
                                <StudentForm id={route.match.params.id} />
                            )}
                        ></Route>
                        <Route path={`${path}/*`}>
                            <Redirect to={`${path}/`} />
                        </Route>
                    </Switch>
                </div>
            </div>
        </>
    );
}

export default Students;
