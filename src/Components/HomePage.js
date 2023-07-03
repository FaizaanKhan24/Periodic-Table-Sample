import React from 'react'
import './HomePage.css'
import AtomicStructure from './AtomicStructure';
import ElementRow from './ElementsRow';

function HomePage() {
  return (
    <div className="container">
        <div className="left"></div>
        <div className="right">
            <ElementRow/>
            <AtomicStructure/>
        </div>
    </div>
  )
}

export default HomePage