import React from 'react';
import { connect } from 'react-redux';
import List from '../../common/List/List';
import { deleteTable, searchTable } from '../../../store/actions/tables';
import TablesListItem from '../TablesListItem/TablesListItem';
import { useRouteMatch, useHistory } from 'react-router';

function TablesList({ list, deleteItem, search, searchTable }) {
    const { url } = useRouteMatch();
    const history = useHistory();

    function onAddBtnClick() {
        history.push(`${url}/new`);
    }
    return (
        <>
            <div className="row">
                <div className="twelve columns">
                    <input
                        type="text"
                        className="u-full-width"
                        value={search}
                        onChange={({ target }) => searchTable(target.value)}
                    />
                </div>
            </div>
            <List>
                {list.map(item => (
                    <TablesListItem
                        key={item.id}
                        item={item}
                        onDelete={deleteItem}
                    />
                ))}
            </List>
            <div className="row">
                <div className="twelve columns">
                    <button onClick={onAddBtnClick}>Add</button>
                </div>
            </div>
        </>
    );
}

function mapStateToProps(state) {
    const searchRegExp = new RegExp(state.tables.search, 'gi');

    return {
        list: state.tables.search
            ? state.tables.list.filter(item => item.name.match(searchRegExp))
            : state.tables.list,
        search: state.tables.search
    };
}

const mapDispatchToProps = {
    deleteItem: deleteTable,
    searchTable: searchTable
};

export default connect(mapStateToProps, mapDispatchToProps)(TablesList);
