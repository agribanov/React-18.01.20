import PropTypes from 'prop-types';

const sticker = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    description: PropTypes.string,
});

const stickersList = PropTypes.arrayOf(sticker);

export default {
    ...PropTypes,
    sticker,
    stickersList 
}