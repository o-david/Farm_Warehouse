import React, { useEffect } from 'react'

const FarmRegistration = ({childPage}) => {
  useEffect(() => {
    childPage('farmRegistration')
  }, [])
  return (
    <div>FarmRegistration</div>
  )
}

export default FarmRegistration