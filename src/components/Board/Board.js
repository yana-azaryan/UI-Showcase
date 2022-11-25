import React, { useState } from 'react';
import './Board.css';
import Cell from '../Cell/Cell';
import Button from '../Buttons/Button';

export default function Board({ size }) {    
    const lightsGrid = Array.from({ length: size }).map( row => ( row = 
        Array.from({ length: size }).map(
            cell => (cell = Math.random() < 0.5)
            )
        )
    )
    const [ board, setBoard ] = useState({ grid: lightsGrid });

    const getRowColumnIndexes = (cellIndex) => {
        let [ cellRowIndex, cellColIndex ] = cellIndex.split('');

        return {
            x: parseInt(cellRowIndex),
            y: parseInt(cellColIndex),
        };
    }
    
    const toggleLight = (cellIndex) => {
        const possition = getRowColumnIndexes(cellIndex);

        setBoard(currentBoard => (
            { ...currentBoard,
                grid: currentBoard.grid.map(
                    (row, rowIndex) => (rowIndex === possition.x
                        ? row.map((col, index) => index === possition.y ? !col : col)
                        : row
                    )
                )
            }
        ))
    }

    const toggleAllLights = (cellIndex) => {
        const possition = getRowColumnIndexes(cellIndex);
        
        toggleLight(cellIndex);
        toggleLight([possition.x, possition.y + 1].join(''));
        toggleLight([possition.x, possition.y - 1].join(''));
        toggleLight([possition.x + 1, possition.y].join('')); 
        toggleLight([possition.x - 1, possition.y].join('')); 
    }

    return(
        <div className='boardContainer'>
            <div className='board'>
                {board.grid.every( row => row.every( cell => !cell )) ? 
                    <div className='hasWon'>Congratulations!</div> : 
                    board.grid.map((row, rowIndex) => 
                        <div className='boardRow' key={rowIndex}>
                            {row.map((col, colIndex) => (
                                <Cell 
                                    key={[rowIndex, colIndex].join('')}
                                    cellIndex={[rowIndex, colIndex].join('')} 
                                    isOn={board.grid[rowIndex][colIndex]}
                                    toggleLight={toggleAllLights}
                                />
                            ))}
                        </div>
                    )
                }
            </div>
            <div className='buttonContainer'>
                <Button buttonText='Restart' onClick={() => {
                    setBoard({ grid: lightsGrid })
                }}/>
                <Button buttonText='Help' onClick={() => {
                    alert("Start by pushing the buttons on the second row corresponding to the lit cells on the top row, then the buttons on the third row corresponding to the lit cells in the second row, etc. Now, as you know, the tricky part comes when you've got a grid that's blank except for the bottom row. At this point, the way to finalize it is to push some specific buttons on the first row corresponding to the lit cells on the bottom row, and then chase the lights down from the top again.");   
                }}/>
            </div>
        </div>
    )
}
