import React from 'react';
import { Switch, useRouteMatch, Route, Redirect } from 'react-router-dom';
import GroupsList from '../GroupsList/GroupsList';
import GroupForm from '../GroupForm/GroupForm';

function Groups() {
    const { path } = useRouteMatch();
    return (
        <>
            <div className="row">
                <div className="twelve columns">
                    <h3>Groups</h3>
                </div>
            </div>
            <div className="row">
                <div className="twelve columns">
                    <Switch>
                        <Route path={`${path}/`} exact>
                            <GroupsList />
                        </Route>
                        <Route
                            path={`${path}/:id`}
                            render={route => (
                                <GroupForm id={route.match.params.id} />
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

export default Groups;
