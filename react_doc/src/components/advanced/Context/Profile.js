import React, { useContext } from 'react'
import { ContextThemeConsumer } from './Context'

function Profile() {
  const {user} = useContext(ContextThemeConsumer);

  return (
    <div>userName: {user}</div>
  )
}

export default Profile