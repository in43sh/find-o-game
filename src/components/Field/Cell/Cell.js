import React from 'react';


function Cell(props) {
    // собираем строку, представляющую классы ячейки
    let cellClass = 'cell';
    if(props.cell.open) cellClass += ' open';
    if(props.cell.hasItem) cellClass += ' has-item';

    return <div className={cellClass} onClick={props.click}/>
}


export default Cell;
