import React from 'react'
import NumberFormat from 'react-number-format'
const Number = props => {
  return (
    <NumberFormat displayType="text" thousandSeperator {...props}/>
  )
}

export default Number
