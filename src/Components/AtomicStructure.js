import React from 'react';
import './AtomicStructure.css';

const AtomicStructure = ({selectedElement}) => {
  const protonValue = "+" + selectedElement.atomicNumber
  const atomicNumber = parseInt(selectedElement.atomicNumber)

  const getOrbitalStyle = (electronNumber) => {
    if(atomicNumber - electronNumber < 0)
      return { border: '0px' }
  }

  const getElectronStyle = (electronNumber, type) => {
    if(atomicNumber - electronNumber >= 0){
      if(type === "s")
        return { background: "#ffd109" }
      else if(type === "p")
        return { background: "#f9ae9a"}
    }
    return { background: "white", visibility: "hidden" }
  }

  return (
    <div className="container">
      <div className="p1-orbital" style={getOrbitalStyle(5)}>
        <div className="s2-orbital" style={getOrbitalStyle(3)}>
          <div className="s1-orbital" style={getOrbitalStyle(1)}>
            <div className="nucleus">
              <div className="protons">{protonValue}</div>
              <div className="s1-1 electron" style={getElectronStyle(1, "s")} title='1s-1'/>
              <div className="s1-2 electron" style={getElectronStyle(2, "s")} title='1s-2'/>
              <div className="s2-1 electron" style={getElectronStyle(3, "s")} title='2s-1'/>
              <div className="s2-2 electron" style={getElectronStyle(4, "s")} title='2s-2'/>
              <div className="p2-1 electron" style={getElectronStyle(5, "p")} title='2p-1'/>
              <div className="p2-2 electron" style={getElectronStyle(6, "p")} title='2p-2'/>
              <div className="p2-3 electron" style={getElectronStyle(7, "p")} title='2p-3'/>
              <div className="p2-4 electron" style={getElectronStyle(8, "p")} title='2p-4'/>
              <div className="p2-5 electron" style={getElectronStyle(9, "p")} title='2p-5'/>
              <div className="p2-6 electron" style={getElectronStyle(10, "p")} title='2p-6'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AtomicStructure