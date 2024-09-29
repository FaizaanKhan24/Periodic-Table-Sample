import React from 'react'
import './MiniShortPeriodicTable.css'
import elementData from '../elementData.json'

function MiniShortPeriodicTable({selectedElement, onChangeSelectedElement}) {
  const handleElementClicked = (elementSelected) => (e) => {
    onChangeSelectedElement(elementSelected)
  }

  const isExtendedElement = (value) => {
    // Lanthanoid series
    if (value.atomicNumber >= 58 && value.atomicNumber <= 71)
      return true
    // Actinoid series
    if (value.atomicNumber >= 90 && value.atomicNumber <= 103)
      return true
    return false
  }

  const elements = elementData.elements.filter(val => !isExtendedElement(val)).map(element => 
    <button key={element.atomicNumber} style={element.grid} className="element" onClick={handleElementClicked(element)}/>
  );

  const extendedElements = elementData.elements.filter(isExtendedElement).map(element => 
    <button key={element.atomicNumber} style={element.grid} className="element" onClick={handleElementClicked(element)}/>
  );
  return (
    <div>
      <div className="elementsContainer">
        {elements}
      </div>
      <div className='extraElementsContainer'>
        {extendedElements}
      </div>
    </div>
  )
}

export default MiniShortPeriodicTable