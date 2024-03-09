import React, { useEffect } from 'react'
import Input from '../Input'

const FarmRegistration = ({childPage}) => {
  useEffect(() => {
    childPage('farmRegistration')
  }, [])
  
  const handleSubmit = () =>{

    console.log("we here")
  }
  return (
    
  
    <div className="lg:w-[63%] w-full px-1  h-full mb-6 flex flex-col gap-6">
    <div className="text-[#344054]">
      <h1 className=" font-bold text-[1.875rem]">Create Account</h1>
      <p className=" font-medium text-[1.125rem]">Farm Registration</p>
    </div>
    <form action="" onSubmit={handleSubmit} className="gap-4 flex flex-col"> 
    <Input
            type={"text"}
            label={"Farm Name"}
            required={true}
            placeholder={"Enter farm name"}
          />
    <Input
            type={"text"}
            label={"Farm Name"}
            required={true}
            placeholder={"Longitude"}
            placeholder2={"Latitude"}
            double={true}
            message={'Ex: Longitude: 8.6753° E. Latitude: 9.0820° N'}
          />
    <p className="font-medium text-[0.875rem] text-[#344054]">Crops cultivated and planting season</p>
    </form>
    </div>
  )
}

export default FarmRegistration