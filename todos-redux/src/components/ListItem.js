import React from 'react';

function ListItem({ item, onItemToggle, onItemDelete, onItemEdit }) {
    return (
        <div
            style={{ textDecoration: item.isDone ? 'line-through' : 'none' }}
            onClick={() => onItemToggle(item.id)}
        >
            {item.title}
            <button
                style={buttonStyles}
                onClick={e => e.stopPropagation() || onItemDelete(item.id)}
            >
                Delete
            </button>
            <button
                style={buttonStyles}
                onClick={e => e.stopPropagation() || onItemEdit(item.id)}
            >
                Edit
            </button>
        </div>
    );
}

const buttonStyles = {
    float: 'right'
};

export default ListItem;
