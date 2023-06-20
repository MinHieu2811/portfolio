import React, { useState } from 'react'

const BackgroundContext = React.createContext({ isVisible: false })

export const BackgroundProvider = ({ children }) => {
  const [isVisibleBackground, setIsVisibleBackground] = useState(false)

  const handleToggleBackground = () => {
    setIsVisibleBackground(prev => !prev)
    console.log('visible', isVisibleBackground);
  }

  const value = {
    isVisible: isVisibleBackground,
    setVisibleBackground: handleToggleBackground
  }

  return <BackgroundContext.Provider value={value}>{children}</BackgroundContext.Provider>
}

export const useToggleBackground = () => {
  return React.useContext(BackgroundContext)
}
