import React from 'react';
import { Timeline } from 'antd';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import ChildrenHolder from './children';

const MyTimeline = () => (
  <Timeline
    items={[
      {
        children:<ChildrenHolder 
         title="Bank of Kigali"
         dateTime="Aug 2022 - Present - 1 yr"
         location="Kigali city, Rwanda"
         role="Product Designer"
         />,
        dot:<ApartmentOutlinedIcon/>
      },
      {
        children:<ChildrenHolder 
         title="Bank of Kigali"
         dateTime="Aug 2022 - Present - 1 yr"
         location="Kigali city, Rwanda"
         role="Product Designer"
         />,
        dot:<ApartmentOutlinedIcon/>
      },
      
    ]}
  />
);

export default MyTimeline;