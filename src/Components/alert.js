import React from 'react'

function alert(props) {
  return (
    <>
    <div class={`container alert alert-${props.alert.type}`} role="alert">
        {props.alert.text},{props.alert.type}
    </div>
    </>
    )
}

export default alert