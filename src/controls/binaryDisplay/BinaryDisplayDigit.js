import React from 'react';
import './binaryDisplay_styles.css';

const BinaryDisplayDigit = ({ binaryDigit, colNumber, colour, onBinarySelect }) => {
    return (
        <div className={'binaryDisplay--digitColumn'}
            onClick={() => onBinarySelect(colNumber)}
        >
            <div className={'binaryDisplay--digit--colHeader'}
                style={{ backgroundColor: colour }}

            >
                {colNumber}
            </div>

            <div className={'binaryDisplay--digit'}>
                {binaryDigit}
            </div>
        </div>
    )
}

export default BinaryDisplayDigit;