import React from 'react'
import { Home } from './Components';
import DataProvider from './Context/DataProvider';
const App = () => {
  return (
    <DataProvider>
    <Home/>
    </DataProvider>
  )
}
export default App