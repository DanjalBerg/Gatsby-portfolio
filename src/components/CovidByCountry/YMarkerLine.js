import React from 'react';

export const YMarkerLine = ({value, innerWidth, yScale}) => {
  const markerLineX1 = 0
  const markerLineX2 = innerWidth
  const markerLineY = yScale(value)
  return (
    <>
      <line className="marker-line"
        x1={markerLineX1} y1={markerLineY}
        x2={markerLineX2} y2={markerLineY}/>

      <text className="Ymarker-text" x={markerLineX1 - 10} y={markerLineY} dy="0.32em">
        10,000
      </text>
    </>
  )
}
