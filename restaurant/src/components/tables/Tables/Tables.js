import React from 'react';
import { Switch, useRouteMatch, Route, Redirect } from 'react-router-dom';
import TablesList from '../TablesList/TablesList';
import TableForm from '../TableForm/TableForm';

function Tables() {
    const { path } = useRouteMatch();
    return (
        <>
            <div className="row">
                <div className="twelve columns">
                    <h3>Tables</h3>
                </div>
            </div>
            <div className="row">
                <div className="twelve columns">
                    <Switch>
                        <Route path={`${path}/`} exact>
                            <TablesList />
                        </Route>
                        <Route
                            path={`${path}/:id`}
                            render={route => (
                                <TableForm id={route.match.params.id} />
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

export default Tables;
