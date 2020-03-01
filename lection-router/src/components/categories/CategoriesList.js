import React from 'react';
import { connect } from 'react-redux';
import { useRouteMatch, Link } from 'react-router-dom';
import { searchCategory } from '../../store/actions/categories';

function CategoriesList({ list, search, onSearch }) {
    const { url } = useRouteMatch();

    return (
        <div>
            <input
                type="text"
                value={search}
                onChange={({ target }) => onSearch(target.value)}
            />
            <ul>
                {list.map(item => (
                    <li key={item.id}>
                        <Link to={`${url}/${item.id}`}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function mapStateToProps({ categories }) {
    return {
        list: categories.list.filter(item =>
            item.name.includes(categories.search)
        ),
        search: categories.search
    };
}

const mapDTP = {
    onSearch: searchCategory
};

export default connect(mapStateToProps, mapDTP)(CategoriesList);
