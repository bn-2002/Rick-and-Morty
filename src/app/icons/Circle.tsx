import React from 'react'

const Circle = ({fill , stroke} : {fill : string, stroke  :string}) => {
  return (
<svg width="20px" height="20px" viewBox="0 0 20 20" fill={fill} stroke={stroke}>
<circle cx="10" cy="10" r="6" fill={fill}/>
</svg>)}
export default Circle




