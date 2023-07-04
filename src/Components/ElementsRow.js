import React from 'react'
import './ElementsRow.css';
import elementData from '../elementData.json'

function ElementsRow({selectedElement, onChangeSelectedElement}) {
  const handleElementClicked = (elementSelected) => (e) => {
    onChangeSelectedElement(elementSelected)
  }

  const elements = elementData.elements.map(element => 
    <button key={element.atomicNumber} style={element.grid} className="element" onClick={handleElementClicked(element)}>{element.symbol}</button>
  );

  return (
    <div className="elementsContainer">
      {elements}
    </div>
  )
}

export default ElementsRow