import React from 'react';
import { connect } from 'react-redux';
import List from '../../common/List/List';
import { useRouteMatch, useHistory } from 'react-router';
import StudentsListItem from '../StudentsListItem/StudentsListItem';
import { deleteStudent, searchStudent } from '../../../store/actions/students';

function StudentsList({ list, groupsMap, deleteItem, search, searchStudent }) {
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
                        onChange={({ target }) => searchStudent(target.value)}
                    />
                </div>
            </div>
            <List>
                {list.map(item => (
                    <StudentsListItem
                        key={item.id}
                        item={item}
                        groupsMap={groupsMap}
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
    const searchRegExp = new RegExp(state.students.search, 'gi');
    const groupsMap = new Map();

    state.groups.list.forEach(g => groupsMap.set(g.id, g));

    return {
        list: state.students.search
            ? state.students.list.filter(item => item.name.match(searchRegExp))
            : state.students.list,
        search: state.students.search,
        groupsMap
    };
}

const mapDispatchToProps = {
    deleteItem: deleteStudent,
    searchStudent: searchStudent
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentsList);
