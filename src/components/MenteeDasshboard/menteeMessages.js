import React, { useState } from 'react'
import Layout from "../Layouts/menteeLayout";
import Messages from '../common/messages';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const MenteeMessages = () => {
  return (
    <Layout><Messages/></Layout>
  )
}

export default MenteeMessages