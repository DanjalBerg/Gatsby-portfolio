import React from 'react';

export const XMarkerLine = ({mostResentDate, label, innerHeight, xScale}) => {
  const markerLineX = xScale(mostResentDate)
  const markerLineY1 = 0
  const markerLineY2 = innerHeight
  return (
    <>
      <line className="marker-line"
        x1={markerLineX} y1={markerLineY1}
        x2={markerLineX} y2={markerLineY2}/>

      <text className="Xmarker-text" x={markerLineX} y={markerLineY2} dy="-1em">
        {label}
      </text>
    </>
  )
}
