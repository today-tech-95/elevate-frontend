import React from 'react'

const ChildrenHolder = ({title,dateTime}) => {
  return (
    <div className="flex flex-col gap-2">
    <h4 className="font-bold">{title}</h4>
    <h4>{dateTime}</h4>
    </div>
  )
}

export default ChildrenHolder