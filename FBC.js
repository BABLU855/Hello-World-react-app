import React, { useState } from 'react'

export default function FBC(props) {
    let [state,changestate] = useState()
  return (
    <div>
      <p>
        Iam a Function based Component {props.}
      </p>
    </div>
  )
}
