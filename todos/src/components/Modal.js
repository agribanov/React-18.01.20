import React from 'react';

function Modal({ item, onChange, onSave, onCancel }) {
    function onValueChange(e) {
        const changes = {
            title: e.target.value
        };
        onChange(changes);
    }

    return (
        <>
            <div style={backgroundStyles} />
            <div style={modalStyles}>
                <div>
                    <input
                        style={inputStyles}
                        type="text"
                        name="title"
                        value={item.title}
                        onChange={onValueChange}
                    />
                </div>
                <div>
                    <button onClick={() => onSave(item)}>Save</button>
                    <button onClick={() => onCancel()}>Cancel</button>
                </div>
            </div>
        </>
    );
}

const backgroundStyles = {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    opacity: '0.4',
    position: 'absolute',
    top: '0',
    left: '0'
};

const modalStyles = {
    position: 'absolute',
    top: '200px',
    left: '300px',
    padding: '30px 50px 10px',
    border: '1px solid black',
    backgroundColor: 'white'
};

const inputStyles = {
    width: '200px'
};

export default Modal;
