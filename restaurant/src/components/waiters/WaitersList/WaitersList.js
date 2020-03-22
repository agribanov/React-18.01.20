import React from 'react';
import { connect } from 'react-redux';
import List from '../../common/List/List';
import { useRouteMatch, useHistory } from 'react-router';
import WaitersListItem from '../WaitersListItem/WaitersListItem';
import { deleteWaiter, searchWaiter } from '../../../store/actions/waiters';

function WaitersList({ list, tablesMap, deleteItem, search, searchWaiter }) {
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
                        onChange={({ target }) => searchWaiter(target.value)}
                    />
                </div>
            </div>
            <List>
                {list.map(item => (
                    <WaitersListItem
                        key={item.id}
                        item={item}
                        tablesMap={tablesMap}
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
    const searchRegExp = new RegExp(state.waiters.search, 'gi');

    return {
        list: state.waiters.search
            ? state.waiters.list.filter(item => item.name.match(searchRegExp))
            : state.waiters.list,
        search: state.waiters.search
    };
}

const mapDispatchToProps = {
    deleteItem: deleteWaiter,
    searchWaiter: searchWaiter
};

export default connect(mapStateToProps, mapDispatchToProps)(WaitersList);
