import React from 'react'
import './HomePage.css'
import AtomicStructure from './AtomicStructure';
import ElementDetail from './ElementDetail';
import MiniShortPeriodicTable from './MiniShortPeriodicTable';
import ElectronsSetup from './ElectronsSetup';
import AlternativeElectronSetup from './AlternativeElectronSetup';
import { useState } from 'react';

function HomePage() {
  const[selectedElement, setSelectedElement] = useState({
      "name" : "Hydrogen",
      "symbol" : "H",
      "atomicNumber" : 1,
      "electron-split": "1s(1)",
      "grid" : {
          "gridRow" : 1,
          "gridColumn" : 1
      }
  })

  const [showAlternate, setToggled] = useState(false)

  const onElementChange = (newElement) => {
    setSelectedElement(newElement);
  };

  return (
    <div className="homepage-container">
        <div className="left">
        <ElementDetail selectedElement={selectedElement}/>
        <MiniShortPeriodicTable selectedElement={selectedElement} onChangeSelectedElement={onElementChange} />
        {showAlternate ? <AlternativeElectronSetup selectedElement={selectedElement} /> : <ElectronsSetup selectedElement={selectedElement}/> }
        <div className='alternative-setup-container'>
          <button className={`toggle-btn ${showAlternate ? "toggled" : ""}`} onClick={() => setToggled(!showAlternate)}>
            <div className="thumb"/>
          </button>
          <label className='alerntaive-setup-label'>Alternative electron setup </label>
        </div>
        </div>
        <div className="right">
          <div>
          <text className='electron-splitup'>{selectedElement['electron-split']}</text>
          </div>
            <AtomicStructure selectedElement={selectedElement}/>
        </div>
    </div>
  )
}

export default HomePage