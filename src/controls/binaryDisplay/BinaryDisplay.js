import React from 'react';
import './binaryDisplay_styles.css';
import BinaryDisplayDigit from './BinaryDisplayDigit';

const BinaryDisplay = ({ binary, binaryCols, colours, onBinarySelect, number }) => {

    let binarySum = "";

    for (let i = 0; i < binaryCols.length; i++) {
        if (binary[i] === 1) {
            binarySum += binaryCols[i] + " ";

            if (binary.lastIndexOf(1) > i) {
                binarySum += '+ '
            }
        }
    }

    if (number === 0) {
        binarySum = "JAZZ HANDS"
    }

    binarySum += " = " + number;

    return (
        <div>
            <div className={'bindaryDisplay'}>
                {
                    binary.map((digit, index) => {
                        return (
                            <BinaryDisplayDigit key={index}
                                onBinarySelect={onBinarySelect}
                                binaryDigit={digit}
                                colNumber={binaryCols[index]}
                                colour={colours[index]}
                            />
                        )
                    })
                }

            </div>

            <div className={'bindaryDisplay--binarySum'}>
                {binarySum}
            </div>
        </div>
    )
}

export default BinaryDisplay;