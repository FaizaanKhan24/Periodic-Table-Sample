import React from 'react';
import './AtomicStructure.css';

const AtomicStructure = ({selectedElement}) => {
  const protonValue = "+" + selectedElement.atomicNumber
  const atomicNumber = parseInt(selectedElement.atomicNumber)
  var orbitalElectrons = 0

  const getOrbitalStyle = (electronNumber, maxOrbitalElectrons) => {
    if(atomicNumber - electronNumber < 0)
      return { border: '0px' }
    if(maxOrbitalElectrons > orbitalElectrons)
      orbitalElectrons = maxOrbitalElectrons
    console.log(orbitalElectrons)
  }

  const getElectronStyle = (electronNumber, type) => {
    if(atomicNumber - electronNumber >= 0){
      if(type === "s")
        return { background: "#ffd109" }
      else if(type === "p")
        return { background: "#f9ae9a"}
      else if(type === "d")
        return {background: "#7AC5E6"}
      else if(type === "f")
        return {background: "#9999CC"}
    }
    else{
      if(orbitalElectrons >= electronNumber)
        return { background: "#fee387" }
      else
        return { background: "#fee387", visibility: "hidden" }
    }
  }

  return (
    <div className="container">
      <div className='p_orbital' id='p7_orbit' style={getOrbitalStyle(113,118)}>
        <div className="p7-1 electron" style={getElectronStyle(113, "p")} title='7p-1'/>
        <div className="p7-2 electron" style={getElectronStyle(114, "p")} title='7p-2'/>
        <div className="p7-3 electron" style={getElectronStyle(115, "p")} title='7p-3'/>
        <div className="p7-4 electron" style={getElectronStyle(116, "p")} title='7p-4'/>
        <div className="p7-5 electron" style={getElectronStyle(117, "p")} title='7p-5'/>
        <div className="p7-6 electron" style={getElectronStyle(118, "p")} title='7p-6'/>
        <div className='d_orbital' id='d6_orbit' style={getOrbitalStyle(103,112)}>
          <div className="d6-1 electron" style={getElectronStyle(103, "d")} title='6d-1'/>
          <div className="d6-2 electron" style={getElectronStyle(104, "d")} title='6d-2'/>
          <div className="d6-3 electron" style={getElectronStyle(105, "d")} title='6d-3'/>
          <div className="d6-4 electron" style={getElectronStyle(106, "d")} title='6d-4'/>
          <div className="d6-5 electron" style={getElectronStyle(107, "d")} title='6d-5'/>
          <div className="d6-6 electron" style={getElectronStyle(108, "d")} title='6d-6'/>
          <div className="d6-7 electron" style={getElectronStyle(109, "d")} title='6d-7'/>
          <div className="d6-8 electron" style={getElectronStyle(110, "d")} title='6d-8'/>
          <div className="d6-9 electron" style={getElectronStyle(111, "d")} title='6d-9'/>
          <div className="d6-10 electron" style={getElectronStyle(112, "d")} title='6d-10'/>
          <div className='f_orbital' id='f5_orbit' style={getOrbitalStyle(89,102)}>
            <div className="f5-1 electron" style={getElectronStyle(89, "f")} title='5f-1'/>
            <div className="f5-2 electron" style={getElectronStyle(90, "f")} title='5f-2'/>
            <div className="f5-3 electron" style={getElectronStyle(91, "f")} title='5f-3'/>
            <div className="f5-4 electron" style={getElectronStyle(92, "f")} title='5f-4'/>
            <div className="f5-5 electron" style={getElectronStyle(93, "f")} title='5f-5'/>
            <div className="f5-6 electron" style={getElectronStyle(94, "f")} title='5f-6'/>
            <div className="f5-7 electron" style={getElectronStyle(95, "f")} title='5f-7'/>
            <div className="f5-8 electron" style={getElectronStyle(96, "f")} title='5f-8'/>
            <div className="f5-9 electron" style={getElectronStyle(97, "f")} title='5f-9'/>
            <div className="f5-10 electron" style={getElectronStyle(98, "f")} title='5f-10'/>
            <div className="f5-11 electron" style={getElectronStyle(99, "f")} title='5f-10'/>
            <div className="f5-12 electron" style={getElectronStyle(100, "f")} title='5f-10'/>
            <div className="f5-13 electron" style={getElectronStyle(101, "f")} title='5f-10'/>
            <div className="f5-14 electron" style={getElectronStyle(102, "f")} title='5f-10'/>
            <div className='s_orbital' id='s7_orbit' style={getOrbitalStyle(87,88)}>
              <div className="s7-1 electron" style={getElectronStyle(87, "s")} title='7s-1'/>
              <div className="s7-2 electron" style={getElectronStyle(88, "s")} title='7s-2'/>
              <div className='p_orbital' id='p6_orbit' style={getOrbitalStyle(81,86)}>
                <div className="p6-1 electron" style={getElectronStyle(81, "p")} title='6p-1'/>
                <div className="p6-2 electron" style={getElectronStyle(82, "p")} title='6p-2'/>
                <div className="p6-3 electron" style={getElectronStyle(83, "p")} title='6p-3'/>
                <div className="p6-4 electron" style={getElectronStyle(84, "p")} title='6p-4'/>
                <div className="p6-5 electron" style={getElectronStyle(85, "p")} title='6p-5'/>
                <div className="p6-6 electron" style={getElectronStyle(86, "p")} title='6p-6'/>
                <div className='d_orbital' id='d5_orbit' style={getOrbitalStyle(71,80)}>
                  <div className="d5-1 electron" style={getElectronStyle(71, "d")} title='5d-1'/>
                  <div className="d5-2 electron" style={getElectronStyle(72, "d")} title='5d-2'/>
                  <div className="d5-3 electron" style={getElectronStyle(73, "d")} title='5d-3'/>
                  <div className="d5-4 electron" style={getElectronStyle(74, "d")} title='5d-4'/>
                  <div className="d5-5 electron" style={getElectronStyle(75, "d")} title='5d-5'/>
                  <div className="d5-6 electron" style={getElectronStyle(76, "d")} title='5d-6'/>
                  <div className="d5-7 electron" style={getElectronStyle(77, "d")} title='5d-7'/>
                  <div className="d5-8 electron" style={getElectronStyle(78, "d")} title='5d-8'/>
                  <div className="d5-9 electron" style={getElectronStyle(79, "d")} title='5d-9'/>
                  <div className="d5-10 electron" style={getElectronStyle(80, "d")} title='5d-10'/>
                  <div className='f_orbital' id='f4_orbit' style={getOrbitalStyle(57,70)}>
                    <div className="f4-1 electron" style={getElectronStyle(57, "f")} title='4f-1'/>
                    <div className="f4-2 electron" style={getElectronStyle(58, "f")} title='4f-2'/>
                    <div className="f4-3 electron" style={getElectronStyle(59, "f")} title='4f-3'/>
                    <div className="f4-4 electron" style={getElectronStyle(60, "f")} title='4f-4'/>
                    <div className="f4-5 electron" style={getElectronStyle(61, "f")} title='4f-5'/>
                    <div className="f4-6 electron" style={getElectronStyle(62, "f")} title='4f-6'/>
                    <div className="f4-7 electron" style={getElectronStyle(63, "f")} title='4f-7'/>
                    <div className="f4-8 electron" style={getElectronStyle(64, "f")} title='4f-8'/>
                    <div className="f4-9 electron" style={getElectronStyle(65, "f")} title='4f-9'/>
                    <div className="f4-10 electron" style={getElectronStyle(66, "f")} title='4f-10'/>
                    <div className="f4-11 electron" style={getElectronStyle(67, "f")} title='4f-10'/>
                    <div className="f4-12 electron" style={getElectronStyle(68, "f")} title='4f-10'/>
                    <div className="f4-13 electron" style={getElectronStyle(69, "f")} title='4f-10'/>
                    <div className="f4-14 electron" style={getElectronStyle(70, "f")} title='4f-10'/>
                    <div className='s_orbital' id='s6_orbit' style={getOrbitalStyle(55,56)}>
                      <div className="s6-1 electron" style={getElectronStyle(55, "s")} title='6s-1'/>
                      <div className="s6-2 electron" style={getElectronStyle(56, "s")} title='6s-2'/>
                      <div className='p_orbital' id='p5_orbit' style={getOrbitalStyle(49,54)}>
                        <div className="p5-1 electron" style={getElectronStyle(49, "p")} title='5p-1'/>
                        <div className="p5-2 electron" style={getElectronStyle(50, "p")} title='5p-2'/>
                        <div className="p5-3 electron" style={getElectronStyle(51, "p")} title='5p-3'/>
                        <div className="p5-4 electron" style={getElectronStyle(52, "p")} title='5p-4'/>
                        <div className="p5-5 electron" style={getElectronStyle(53, "p")} title='5p-5'/>
                        <div className="p5-6 electron" style={getElectronStyle(54, "p")} title='5p-6'/>
                        <div className='d_orbital' id='d4_orbit' style={getOrbitalStyle(39,48)}>
                          <div className="d4-1 electron" style={getElectronStyle(39, "d")} title='4d-1'/>
                          <div className="d4-2 electron" style={getElectronStyle(40, "d")} title='4d-2'/>
                          <div className="d4-3 electron" style={getElectronStyle(41, "d")} title='4d-3'/>
                          <div className="d4-4 electron" style={getElectronStyle(42, "d")} title='4d-4'/>
                          <div className="d4-5 electron" style={getElectronStyle(43, "d")} title='4d-5'/>
                          <div className="d4-6 electron" style={getElectronStyle(44, "d")} title='4d-6'/>
                          <div className="d4-7 electron" style={getElectronStyle(45, "d")} title='4d-7'/>
                          <div className="d4-8 electron" style={getElectronStyle(46, "d")} title='4d-8'/>
                          <div className="d4-9 electron" style={getElectronStyle(47, "d")} title='4d-9'/>
                          <div className="d4-10 electron" style={getElectronStyle(48, "d")} title='4d-10'/>
                          <div className='s_orbital' id='s5_orbit' style={getOrbitalStyle(37,38)}>
                            <div className="s5-1 electron" style={getElectronStyle(37, "s")} title='5s-1'/>
                            <div className="s5-2 electron" style={getElectronStyle(38, "s")} title='5s-2'/>
                            <div className='p_orbital' id='p4_orbit' style={getOrbitalStyle(31,36)}>
                              <div className="p4-1 electron" style={getElectronStyle(31, "p")} title='4p-1'/>
                              <div className="p4-2 electron" style={getElectronStyle(32, "p")} title='4p-2'/>
                              <div className="p4-3 electron" style={getElectronStyle(33, "p")} title='4p-3'/>
                              <div className="p4-4 electron" style={getElectronStyle(34, "p")} title='4p-4'/>
                              <div className="p4-5 electron" style={getElectronStyle(35, "p")} title='4p-5'/>
                              <div className="p4-6 electron" style={getElectronStyle(36, "p")} title='4p-6'/>
                              <div className='d_orbital' id='d3_orbit' style={getOrbitalStyle(21,30)}>
                                <div className="d3-1 electron" style={getElectronStyle(21, "d")} title='3d-1'/>
                                <div className="d3-2 electron" style={getElectronStyle(22, "d")} title='3d-2'/>
                                <div className="d3-3 electron" style={getElectronStyle(23, "d")} title='3d-3'/>
                                <div className="d3-4 electron" style={getElectronStyle(24, "d")} title='3d-4'/>
                                <div className="d3-5 electron" style={getElectronStyle(25, "d")} title='3d-5'/>
                                <div className="d3-6 electron" style={getElectronStyle(26, "d")} title='3d-6'/>
                                <div className="d3-7 electron" style={getElectronStyle(27, "d")} title='3d-7'/>
                                <div className="d3-8 electron" style={getElectronStyle(28, "d")} title='3d-8'/>
                                <div className="d3-9 electron" style={getElectronStyle(29, "d")} title='3d-9'/>
                                <div className="d3-10 electron" style={getElectronStyle(30, "d")} title='3d-10'/>
                                <div className='s_orbital' id='s4_orbit' style={getOrbitalStyle(19,20)}>
                                  <div className="s4-1 electron" style={getElectronStyle(19, "s")} title='4s-1'/>
                                  <div className="s4-2 electron" style={getElectronStyle(20, "s")} title='4s-2'/>
                                  <div className='p_orbital' id='p3_orbit' style={getOrbitalStyle(13,18)}>
                                    <div className="p3-1 electron" style={getElectronStyle(13, "p")} title='3p-1'/>
                                    <div className="p3-2 electron" style={getElectronStyle(14, "p")} title='3p-2'/>
                                    <div className="p3-3 electron" style={getElectronStyle(15, "p")} title='3p-3'/>
                                    <div className="p3-4 electron" style={getElectronStyle(16, "p")} title='3p-4'/>
                                    <div className="p3-5 electron" style={getElectronStyle(17, "p")} title='3p-5'/>
                                    <div className="p3-6 electron" style={getElectronStyle(18, "p")} title='3p-6'/>
                                    <div className='s_orbital' id='s3_orbit' style={getOrbitalStyle(11,12)}>
                                      <div className="s3-1 electron" style={getElectronStyle(11, "s")} title='3s-1'/>
                                      <div className="s3-2 electron" style={getElectronStyle(12, "s")} title='3s-2'/>
                                      <div className="p_orbital" id='p2_orbit' style={getOrbitalStyle(5,10)}>
                                        <div className="p2-1 electron" style={getElectronStyle(5, "p")} title='2p-1'/>
                                        <div className="p2-2 electron" style={getElectronStyle(6, "p")} title='2p-2'/>
                                        <div className="p2-3 electron" style={getElectronStyle(7, "p")} title='2p-3'/>
                                        <div className="p2-4 electron" style={getElectronStyle(8, "p")} title='2p-4'/>
                                        <div className="p2-5 electron" style={getElectronStyle(9, "p")} title='2p-5'/>
                                        <div className="p2-6 electron" style={getElectronStyle(10, "p")} title='2p-6'/>
                                        <div className="s_orbital" id='s2_orbit' style={getOrbitalStyle(3,4)}>
                                          <div className="s2-1 electron" style={getElectronStyle(3, "s")} title='2s-1'/>
                                          <div className="s2-2 electron" style={getElectronStyle(4, "s")} title='2s-2'/>
                                          <div className="s_orbital" id='s1_orbit' style={getOrbitalStyle(1,2)}>
                                            <div className="s1-1 electron" style={getElectronStyle(1, "s")} title='1s-1'/>
                                            <div className="s1-2 electron" style={getElectronStyle(2, "s")} title='1s-2'/>
                                            <div className="nucleus">
                                              <div className="protons">{protonValue}</div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AtomicStructure