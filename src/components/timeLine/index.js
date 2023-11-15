import React from 'react';
import { Timeline } from 'antd';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import ChildrenHolder from './children';


const MyTimeline = ({data}) => (
  <Timeline
    items={data?.map(item=>(
      {
        children:<ChildrenHolder 
         title={item.comapny}
         from={item.from}
         to={item.to}
         location={item.address}
         role={item.position}
         />,
        dot:<ApartmentOutlinedIcon/>
      }
      ))     
    }
  />
);

export default MyTimeline;