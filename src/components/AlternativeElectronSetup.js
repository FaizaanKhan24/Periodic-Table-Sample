import React from 'react'
import './AlternativeElectronSetup.css';

function AlternativeElectronSetup({selectedElement}) {
    var electronAddedCount = 0;
    var secondElectronAddedCount = 0;
    const atomicNumber = parseInt(selectedElement.atomicNumber)

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
        if(orbital === "s"){
            const orbitalName = 's'
            return (
                <div className='orbital-container' key={level+orbital}>
                    <text className='orbital-text'>{level + orbitalName}</text>
                    <ElectronPair orbital={orbitalName} />
                </div>
            )
        }
        else if(orbital === "p"){
            const orbitalName = 'p'
            return (
                <div className='orbital-container'>
                    <text className='orbital-text'>{level + "p"}</text>
                    {[...Array(3)].map((_, index) => 
                        <ElectronPair orbital={orbitalName} pairNumber={index + 1}/>
                    )}
                </div>
            )
        }
        else if(orbital === "d"){
            const orbitalName = 'd'
            return (
                <div className='orbital-container'>
                    <text className='orbital-text'>{level + "d"}</text>
                    {[...Array(5)].map((_, index) => 
                        <ElectronPair orbital={orbitalName} pairNumber={index + 1}/>
                    )}
                </div>
            )
        }
        else if(orbital === "f"){
            const orbitalName = 'f'
            return (
                <div className='orbital-container'>
                    <text className='orbital-text'>{level + "f"}</text>
                    {[...Array(7)].map((_, index) =>
                        <ElectronPair orbital={orbitalName} pairNumber={index + 1}/>
                    )}
                </div>
            )
        }
    };

    const ElectronPair = ({orbital, pairNumber}) => {
        console.log("Orbital: " + (orbital) +  " pair Number: " + (pairNumber))
        return (
            <div className='electron-pair-container'>
                <div className={'electrons ' + (getElectronPairStyle({orbital: orbital, electronNumber: 1, pairNumber: pairNumber})) } />
                <div className={'electrons ' + (getElectronPairStyle({orbital: orbital, electronNumber: 2, pairNumber: pairNumber})) }/>
            </div>
        )
    };

    // TO DO: Figure out how to manage the electron split between the pair. 
    const getElectronPairStyle = ({orbital, electronNumber, pairNumber}) => {
        if(electronNumber == 1){
            if(atomicNumber > electronAddedCount && orbital != "f"){
                return getElectronFilledStyle({orbital})
            }
            if(atomicNumber > electronAddedCount + 1){
                return getElectronFilledStyle({orbital})
            }
        }
        else if(electronNumber == 2){
            switch(orbital){
                case "s": {
                    if(atomicNumber > electronAddedCount){
                        return getElectronFilledStyle({orbital})
                    }
                }
                case "p":{
                    if(atomicNumber > electronAddedCount + (3 - pairNumber)){
                        return getElectronFilledStyle({orbital})
                    }
                }
                case "d":{
                    if(atomicNumber > electronAddedCount + (5 - pairNumber)){
                        return getElectronFilledStyle({orbital})
                    }
                }
                case "f":{
                    if(atomicNumber > electronAddedCount + 1 + (7 - pairNumber)){
                        return getElectronFilledStyle({orbital})
                    }
                }
            }
        }

        return getElectronEmptyStyle({orbital})
    }

    const getElectronFilledStyle = ({orbital}) => {
        electronAddedCount ++;
        console.log("orbital: " + (orbital) + " | electron count: " + (electronAddedCount))
        if(orbital === 's'){
            return 's-electron-fill'
        }
        else if(orbital === 'p'){
            return 'p-electron-fill'
        }
        else if(orbital === 'd'){
            return 'd-electron-fill'
        }
        else if(orbital === 'f'){
            return 'f-electron-fill'
        }
    };

    const getElectronEmptyStyle = ({orbital}) => {
        if(orbital === 's'){
            return 's-electron-empty'
        }
        else if(orbital === 'p'){
            return 'p-electron-empty'
        }
        else if(orbital === 'd'){
            return 'd-electron-empty'
        }
        else if(orbital === 'f'){
            return 'f-electron-empty'
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
        <OrbitalArrangment />
  )
}

export default AlternativeElectronSetup