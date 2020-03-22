import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { saveTable } from '../../../store/actions/tables';

function TableForm({ item, onSave }) {
    const [table, setTable] = useState(item);
    const history = useHistory();

    function onFormSubmit(e) {
        e.preventDefault();
        onSave(table);

        history.push('/tables');
    }

    function onChange({ target }) {
        setTable({
            ...table,
            [target.name]: target.value
        });
    }

    return (
        <form onSubmit={onFormSubmit}>
            <label htmlFor="tableName">Name</label>
            <input
                className="u-full-width"
                id="tableName"
                name="name"
                type="text"
                value={table.name}
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
                ? state.tables.list.find(item => item.id === +id)
                : { name: '' }
    };
}

const mapDispatchToProps = {
    onSave: saveTable
};

export default connect(mapStateToProps, mapDispatchToProps)(TableForm);
