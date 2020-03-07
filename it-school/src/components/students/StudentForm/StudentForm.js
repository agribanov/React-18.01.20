import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { saveStudent } from '../../../store/actions/students';

function StudentForm({ item, groups, onSave }) {
    const [student, setStudent] = useState(item);
    const history = useHistory();

    function onFormSubmit(e) {
        e.preventDefault();
        onSave(student);

        history.push('/students');
    }

    function onChange({ target }) {
        setStudent({
            ...student,
            [target.name]: target.value
        });
    }

    return (
        <form onSubmit={onFormSubmit}>
            <label htmlFor="name">Name</label>
            <input
                className="u-full-width"
                id="name"
                name="name"
                type="text"
                value={student.name}
                onChange={onChange}
            />
            <label htmlFor="groupId">Group</label>
            <select
                className="u-full-width"
                id="groupId"
                name="groupId"
                type="text"
                value={student.groupId}
                onChange={onChange}
            >
                {groups.map(group => (
                    <option key={group.id} value={group.id}>
                        {group.name}
                    </option>
                ))}
            </select>
            <button>Save</button>
        </form>
    );
}

function mapStateToProps(state, { id }) {
    return {
        item:
            id !== 'new'
                ? state.students.list.find(item => item.id === +id)
                : { name: '', groupId: '' },
        groups: state.groups.list
    };
}

const mapDispatchToProps = {
    onSave: saveStudent
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentForm);
