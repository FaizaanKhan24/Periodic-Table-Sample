import React from 'react'
import './HomePage.css'
import AtomicStructure from './AtomicStructure';
import ElementRow from './ElementsRow';
import { useState } from 'react';

function HomePage() {
  const[selectedElement, setSelectedElement] = useState({
      "name" : "Hydrogen",
      "symbol" : "H",
      "atomicNumber" : 1,
      "grid" : {
          "gridRow" : 1,
          "gridColumn" : 1
      }
  })

  const onElementChange = (newElement) => {
    setSelectedElement(newElement);
  };

  return (
    <div className="container">
        <div className="left">
        <ElementRow selectedElement={selectedElement} onChangeSelectedElement={onElementChange} />
        </div>
        <div className="right">
            {/* <div>
              <div>Name : {selectedElement.name}</div>
              <div>Symbol : {selectedElement.symbol}</div>
              <div>Atomic Number : {selectedElement.atomicNumber}</div>
              <div>Grid Row : {selectedElement.grid.gridRow}</div>
              <div>Grid Column : {selectedElement.grid.gridColumn}</div>
            </div> */}
            <AtomicStructure selectedElement={selectedElement}/>
        </div>
    </div>
  )
}

export default HomePage