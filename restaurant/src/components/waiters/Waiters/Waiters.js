import React, { useEffect } from 'react';
import { Switch, useRouteMatch, Route, Redirect } from 'react-router-dom';
import WaitersList from '../WaitersList/WaitersList';
import WaiterForm from '../WaiterForm/WaiterForm';
import { getWaiters } from '../../../store/actions/waiters';
import { connect } from 'react-redux';

function Waiters({ isLoading, getWaiters }) {
    const { path } = useRouteMatch();

    useEffect(() => {
        getWaiters();
    }, [getWaiters]);

    return (
        <>
            <div className="row">
                <div className="twelve columns">
                    <h3>Waiters</h3>
                </div>
            </div>
            <div className="row">
                <div className="twelve columns">
                    {isLoading ? (
                        'Loading...'
                    ) : (
                        <Switch>
                            <Route path={`${path}/`} exact>
                                <WaitersList />
                            </Route>
                            <Route
                                path={`${path}/:id`}
                                render={route => (
                                    <WaiterForm id={route.match.params.id} />
                                )}
                            ></Route>
                            <Route path={`${path}/*`}>
                                <Redirect to={`${path}/`} />
                            </Route>
                        </Switch>
                    )}
                </div>
            </div>
        </>
    );
}

function mapStateToProps({ waiters }) {
    return {
        isLoading: waiters.pendingRequestsCount > 0
    };
}

const mapDispatchToProps = {
    getWaiters
};

export default connect(mapStateToProps, mapDispatchToProps)(Waiters);
