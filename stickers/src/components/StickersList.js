import React from 'react';
import PropTypes from '../propTypes';
import Sticker from './Sticker';

function StickersList({ stickers, onDelete, onChange }) {
    return (
        <div style={stickersListStyle}>
            {stickers.map(sticker => (
                <Sticker
                    key={sticker.id}
                    sticker={sticker}
                    onDelete={onDelete}
                    onChange={onChange}
                />
            ))}
        </div>
    );
}

const stickersListStyle = {
    height: '100%',
    backgroundColor: 'brown'
};

StickersList.propTypes = {
    stickers: PropTypes.stickersList.isRequired,
    onDelete: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
};

export default StickersList;
