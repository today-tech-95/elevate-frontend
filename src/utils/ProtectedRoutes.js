import React from 'react'
import { Navigate } from 'react-router-dom'
import { useCookies } from 'react-cookie';

export function Protected({children,route }) {
  const [cookies, setCookie] = useCookies(['user']);

  const loggedUser =cookies.user;

  if (!loggedUser) {
    return <Navigate to={route} replace />
  }

  if(loggedUser?.user?.role !=='mentor') return <Navigate to={route} replace />
  return children
}

export function ProtectedMentee({children,route }) {
  const [cookies] = useCookies(['user']);

  const loggedUser =cookies.user;

  if (!loggedUser) {
    return <Navigate to={route} replace />
  }

  if(loggedUser?.user?.role !=='mentee') return <Navigate to={route} replace />
  return children
}



