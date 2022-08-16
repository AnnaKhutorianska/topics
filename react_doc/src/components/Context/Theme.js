import React, { useContext } from 'react'
import { ContextThemeConsumer } from './Context'


function Theme() {
  const {isLightTheme, handleChangeTheme} = useContext(ContextThemeConsumer);

  return (
    <>
    <button onClick={handleChangeTheme}>{isLightTheme? "ligth theme" : "dark theme"}</button>
    </>
  )
}

export default Theme