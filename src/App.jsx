import React from 'react'
import './App.css'
import { MantineProvider } from '@mantine/core';
import AgricultureDataSetOne from './components/AgricultureDataSetOne';
import AgricultureDataSetTwo from './components/AgricultureDataSetTwo';


function App() {

  return (
    <>
      <MantineProvider>
        <AgricultureDataSetOne />
        <AgricultureDataSetTwo />
      </MantineProvider>
    </>
  )
}

export default App
