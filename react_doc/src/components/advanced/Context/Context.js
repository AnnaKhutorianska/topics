import { createContext, useState } from 'react';

const { Provider, Consumer } = createContext();

function ContextTheme({children}) {
  const [isLightTheme, setIsLightTheme] = useState(true)
  const [user, setUser] = useState('test user')

  const handleChangeTheme = () => setIsLightTheme(prev => !prev)

  return(
    <Provider value={{isLightTheme, handleChangeTheme, user}}>
      {children}
    </Provider>
  )
}

export {ContextTheme, Consumer as ContextThemeConsumer}