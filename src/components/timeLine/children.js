import React from 'react'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { calculateAge } from '../common/settings/timeLineContent';

const ChildrenHolder = ({title,from,to,location,role}) => {

  const age = calculateAge(from,to);

  return (
    <div className="flex flex-col gap-2">
    <h4 className="font-bold">{title}</h4>
    <h4>{role}</h4>
    <h4>{from +" - "+to}<FiberManualRecordIcon fontSize='1px' className='opacity-50 text-[10px] mx-2'/><span>{age.years===0?`${age.months} month${age.months>1? 's':""}`:age.months===0?`${age.years} year${age.years>1 ? 's':""}`:`${age.years} year${age.years>1 ? 's':""},${age.months} month${age.months>1 ? 's':""}`}</span></h4>
    <h4>{location}</h4>
    </div>
  )
}

export default ChildrenHolder