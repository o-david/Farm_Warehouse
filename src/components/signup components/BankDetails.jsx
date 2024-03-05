import React, { useEffect } from 'react'

const BankDetails = ({childPage}) => {
  useEffect(() => {
    childPage('bankDetails')
  }, [])
  return (
    <div>BankDetails</div>
  )
}

export default BankDetails