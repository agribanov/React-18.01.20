import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import StickersList from './components/StickersList';

function App() {
    const [stickers, setStickers] = useState([]);

    useEffect(() => {
        setStickers(restoreState());
    }, []);

    // useEffect(() => {
    //     saveSate(stickers);
    // }, [stickers])

    function addNewSticker() {
        const newStickers = [
            ...stickers,
            {
                id: Date.now(),
                description: '',
                x: 10,
                y: 10
            }
        ];

        setStickers(newStickers);
        saveSate(newStickers);
    }

    function deleteSticker(sticker) {
        const newStickers = stickers.filter(el => el !== sticker);

        setStickers(newStickers);
        saveSate(newStickers);
    }

    function changeSticker(id, updatedData) {
        let sticker = stickers.find(el => el.id === id);

        sticker = {
            ...sticker,
            ...updatedData
        };

        const newStickers = stickers.map(el =>
            el.id === sticker.id ? sticker : el
        );

        setStickers(newStickers);
        saveSate(newStickers);
    }

    return (
        <>
            <Header onAddClick={addNewSticker} />
            <StickersList
                stickers={stickers}
                onDelete={deleteSticker}
                onChange={changeSticker}
            />
        </>
    );
}

function restoreState() {
    const stickers = localStorage.getItem('stickers');

    return stickers ? JSON.parse(stickers) : [];
}

function saveSate(data) {
    localStorage.setItem('stickers', JSON.stringify(data));
}

export default App;
