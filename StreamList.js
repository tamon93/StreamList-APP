// StreamList.js
import React, { useState } from 'react';
import './StreamList.css';

function StreamList() {
    const [title, setTitle] = useState('');
    const [list, setList] = useState([]);

    const handleAddItem = () => {
        if (title) {
            setList([...list, title]);
            setTitle('');
        }
    };

    return (
        <div className="streamlist-page">
            <h1>StreamList</h1>
            <div className="input-section">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Add a movie or show title"
                />
                <button onClick={handleAddItem}>Add to List</button>
            </div>
            <ul className="list-display">
                {list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default StreamList;