import React, { useState } from 'react';
import { connect } from 'react-redux';
import { saveCategory } from '../../store/actions/categories';
import { useHistory } from 'react-router-dom';

function CategoryForm({ item, onSave }) {
    const [name, setName] = useState(item.name);

    const history = useHistory();

    console.log(history);

    function onSaveClick() {
        onSave({
            id: item.id,
            name
        });

        history.goBack();
    }

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={({ target }) => setName(target.value)}
            />
            <button onClick={onSaveClick}>Save</button>
        </div>
    );
}

function mapStateToProps({ categories }, { id }) {
    return {
        item:
            id !== 'new'
                ? categories.list.find(item => item.id == id)
                : { id: '', name: 'Hello' }
    };
}

const mapDispatchToprops = {
    onSave: saveCategory
};

export default connect(mapStateToProps, mapDispatchToprops)(CategoryForm);
