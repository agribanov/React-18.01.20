import React from 'react';
import ListItem from './ListItem';
import { connect } from 'react-redux';
import { deleteTodo, toggleTodo, openModal } from '../store/actions';

function List({ items, onItemToggle, onItemDelete, onItemEdit }) {
    return (
        <div style={listStyles}>
            {items.map(item => (
                <ListItem
                    key={item.id}
                    item={item}
                    onItemToggle={onItemToggle}
                    onItemDelete={onItemDelete}
                    onItemEdit={onItemEdit}
                />
            ))}
        </div>
    );
}

const listStyles = {
    margin: '0 auto',
    width: '600px'
};

function mapStateToProps(state) {
    return {
        items: state.todos
    };
}

const mapDispatchToProps = {
    onItemDelete: deleteTodo,
    onItemToggle: toggleTodo,
    onItemEdit: openModal
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
