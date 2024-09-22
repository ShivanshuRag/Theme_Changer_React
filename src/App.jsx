
import './App.css'
import { useState } from 'react'
import ThemeBtn from './components/Btn'
import Card from './components/Card'
import { ThemeSwitcherProvider } from './context/themeSwitcherApi'
function App() {
  const [ themeMode , setThemeMode ] = useState('dark')
   
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themeMode)
    
    const darkMode = () => {
      setThemeMode('dark')
    }

    const lightMode = () => {
      setThemeMode('light')
    }
  return (
    <>
      <ThemeSwitcherProvider value={ {themeMode, darkMode, lightMode}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
      </ThemeSwitcherProvider>
    </>
  )
}

export default App
