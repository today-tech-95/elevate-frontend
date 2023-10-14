import React from 'react'
import Tabs from "./../tabs"
import SessionCard from '../sessionCard';

const Appointment = () => {

  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
 ];

  const renderDate = (separator=" ")=>{
    let newDate =  new Date()
    const month =  newDate.getMonth()
    const year = newDate.getFullYear()

    return `${monthNames[month]}${separator}${year}`
  }


  return (
    <div className="w-full">
    <h4> Your Bookings</h4>
    <Tabs/>
    <div>
    <h4>{renderDate()}</h4>
    <SessionCard/>
    <SessionCard/>
    </div>

    <div>
    <h4 className="mt-2">{renderDate()}</h4>
    <SessionCard/>
    <SessionCard/>
    </div>
   
    </div>
  )
}

export default Appointment