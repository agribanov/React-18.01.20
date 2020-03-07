import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { saveGroup } from '../../../store/actions/groups';

function GroupForm({ item, onSave }) {
    const [group, setGroup] = useState(item);
    const history = useHistory();

    function onFormSubmit(e) {
        e.preventDefault();
        onSave(group);

        history.push('/groups');
    }

    function onChange({ target }) {
        setGroup({
            ...group,
            [target.name]: target.value
        });
    }

    return (
        <form onSubmit={onFormSubmit}>
            <label htmlFor="groupName">Name</label>
            <input
                className="u-full-width"
                id="groupName"
                name="name"
                type="text"
                value={group.name}
                onChange={onChange}
            />
            <button>Save</button>
        </form>
    );
}

function mapStateToProps(state, { id }) {
    return {
        item:
            id !== 'new'
                ? state.groups.list.find(item => item.id === +id)
                : { name: '' }
    };
}

const mapDispatchToProps = {
    onSave: saveGroup
};

export default connect(mapStateToProps, mapDispatchToProps)(GroupForm);
