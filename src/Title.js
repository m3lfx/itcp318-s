import React from 'react'

const Title = ({title, message}) => {
    console.log(title)
  return (
    <>
    <div>{title}</div>
    <i>{message}</i>
    </>
    
  )
}

export default Title