import React from 'react';
import './ElementDetail.css';

function ElementDetail({selectedElement}) {
  return (
    <div className='element-container' style={selectedElement.grid}>
      <div className='element-atomic-number'>{selectedElement.atomicNumber}</div>
      <div className='element-symbol'>{selectedElement.symbol}</div>
      <div className='element-name'>{selectedElement.name}</div>
    </div>
  )
}

export default ElementDetail