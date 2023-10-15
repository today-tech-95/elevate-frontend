import React from 'react';
import { Timeline } from 'antd';

const MenteeTimeline = ({data}) => (
  <Timeline
    items={data}
  />
);

export default MenteeTimeline;