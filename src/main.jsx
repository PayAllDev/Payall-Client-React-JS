
// * Dependencies Required 

import React from 'react'
import ReactDOM from 'react-dom/client'

// * Modules Required

import { AppProvider } from './app/Context'

// * view Styles

import './index.css'

// * Components Required

import TopNavBar from './components/shared/TopNavBar'

import Home_view from './views/home_view'
import SimulatorView from './views/simulator_view'

// * view to Return

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <AppProvider>

      <TopNavBar />

      <Home_view />
      <SimulatorView />

    </AppProvider>

  </React.StrictMode>,
)
