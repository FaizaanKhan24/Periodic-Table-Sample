import React from 'react'
import './ElectronsSetup.css';

function ElectronsSetup({selectedElement}) {
    var electronAddedCount = 0;
    const atomicNumber = parseInt(selectedElement.atomicNumber)

    var electronCounter = 0;

    let orbitalData = [
        {level: 1, orbitals: ["1s"]},
        {level: 2, orbitals: ["2s", "2p"]},
        {level: 3, orbitals: ["3s", "3p"]},
        {level: 4, orbitals: ["4s", "3d", "4p"]},
        {level: 5, orbitals: ["5s", "4d", "5p"]},
        {level: 6, orbitals: ["6s", "4f", "5d", "6p"]},
        {level: 7, orbitals: ["7s", "5f", "6d", "7p"]}
    ]

    const Electron = ({ level, orbital }) => {
        console.log("Electron counter: " + electronCounter)
        electronCounter++;
        if(orbital === "s"){
            console.log("S-orbital: " + (electronCounter - 1))
            return (
                <div className='orbital-container' key={level+orbital}>
                    <label className='orbital-text'>{level + "s"}</label>
                    {[...Array(2)].map(electron => 
                        {
                            if(atomicNumber > electronAddedCount){
                                electronAddedCount++;
                                return <div className="electrons s-electron-fill" />
                            }
                            return <div className="electrons s-electron-empty" />
                        }
                    )}
                </div>
            )
        }
        else if(orbital === "p"){
            console.log("P-orbital: " + (electronCounter - 1))
            return (
                <div className='orbital-container'>
                    <label className='orbital-text'>{level + "p"}</label>
                    {[...Array(6)].map(electron => 
                        {
                            if(atomicNumber > electronAddedCount){
                                electronAddedCount++;
                                return <div className="electrons p-electron-fill" />
                            }
                            return <div className="electrons p-electron-empty" />   
                        }
                    )}
                </div>
            )
        }
        else if(orbital === "d"){
            console.log("D-orbital: " + (electronCounter - 1))
            return (
                <div className='orbital-container'>
                    <label className='orbital-text'>{level + "d"}</label>
                    {[...Array(10)].map(electron => 
                        {
                            if(atomicNumber > electronAddedCount){
                                electronAddedCount++;
                                return <div className="electrons d-electron-fill" />
                            }
                            return <div className="electrons d-electron-empty" />   
                        }
                    )}
                </div>
            )
        }
        else if(orbital === "f"){
            console.log("F-orbital: " + (electronCounter - 1))
            return (
                <div className='orbital-container'>
                    <label className='orbital-text'>{level + "f"}</label>
                    {[...Array(14)].map(electron => 
                        {
                            if(atomicNumber > electronAddedCount){
                                electronAddedCount++;
                                return <div className="electrons f-electron-fill" />
                            }
                            return <div className="electrons f-electron-empty" />   
                        }
                    )}
                </div>
            )
        }
    };
    
    const OrbitalArrangment = () => {
        return(
        <div className='orbital-arrangment-container'>
            {orbitalData.map(data =>
                <div className='row-container' key={data.level}>
                    {data.orbitals.map(orbitalElement =>
                        <Electron level={orbitalElement[0]} orbital={orbitalElement[1]} key={orbitalElement} />
                    )}
                </div>
            )
            }
        </div>
        )
    };

    return (
        <div>
            <OrbitalArrangment />
        </div>
    )
}
 
export default ElectronsSetup