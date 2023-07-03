import React from 'react'
import './ElementsRow.css';
import elementData from '../elementData.json'

function ElementsRow() {
  const elements = elementData.elements.map(element => 
    <div key={element.atomicNumber} style={element.grid} className="element">{element.symbol}</div>
  );

  return (
    <div className="elementsContainer">
      {elements}
    </div>
  )
}

export default ElementsRow