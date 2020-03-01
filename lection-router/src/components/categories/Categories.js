import React from 'react';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import CategoriesList from './CategoriesList';
import CategoryForm from './CategoryForm';

function Categories() {
    const { path, url } = useRouteMatch();

    return (
        <div>
            <h2>Categories Module</h2>
            <Link to={`${url}/new`}>Add</Link>
            <Switch>
                <Route exact path={`${path}/`}>
                    <CategoriesList />
                </Route>
                <Route
                    path={`${path}/:id`}
                    render={route => {
                        return <CategoryForm id={route.match.params.id} />;
                    }}
                ></Route>
            </Switch>
        </div>
    );
}

export default Categories;
