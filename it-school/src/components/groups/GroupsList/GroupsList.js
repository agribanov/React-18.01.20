import React from 'react';
import { connect } from 'react-redux';
import List from '../../common/List/List';
import { deleteGroup, searchGroup } from '../../../store/actions/groups';
import GroupsListItem from '../GroupsListItem/GroupsListItem';
import { useRouteMatch, useHistory } from 'react-router';

function GroupsList({ list, deleteItem, search, searchGroup }) {
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
                        onChange={({ target }) => searchGroup(target.value)}
                    />
                </div>
            </div>
            <List>
                {list.map(item => (
                    <GroupsListItem
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
    const searchRegExp = new RegExp(state.groups.search, 'gi');

    return {
        list: state.groups.search
            ? state.groups.list.filter(item => item.name.match(searchRegExp))
            : state.groups.list,
        search: state.groups.search
    };
}

const mapDispatchToProps = {
    deleteItem: deleteGroup,
    searchGroup: searchGroup
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupsList);
