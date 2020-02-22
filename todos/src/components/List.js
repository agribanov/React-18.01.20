import React from 'react';
import ListItem from './ListItem';

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

export default List;
