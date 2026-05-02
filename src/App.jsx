import { useState } from 'react'

import AppHeader from './AppHeader'
import AppFooter from './AppFooter'
import AppMain from './AppMain'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppHeader />
      <AppMain /> 
      <AppFooter />  
    </>
  )
}

export default App
