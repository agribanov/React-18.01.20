import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { saveWaiter } from '../../../store/actions/waiters';

function WaiterForm({ item, tables, onSave }) {
    const [waiter, setWaiter] = useState(item);
    const history = useHistory();

    function onFormSubmit(e) {
        e.preventDefault();
        onSave(waiter);

        history.push('/waiters');
    }

    function onChange({ target }) {
        setWaiter({
            ...waiter,
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
                value={waiter.name}
                onChange={onChange}
            />
            <label htmlFor="salary">Salary</label>
            <input
                className="u-full-width"
                id="salary"
                name="salary"
                type="number"
                value={waiter.salary}
                onChange={onChange}
            />
            <button>Save</button>
        </form>
    );
}

function mapStateToProps(state, { id }) {
    console.log(id, state.waiters);
    return {
        item:
            id !== 'new' && state.waiters.list.length
                ? state.waiters.list.find(item => +item.id === +id)
                : { name: '', salary: 100, startDate: Date.now() },
        tables: state.tables.list
    };
}

const mapDispatchToProps = {
    onSave: saveWaiter
};

export default connect(mapStateToProps, mapDispatchToProps)(WaiterForm);
