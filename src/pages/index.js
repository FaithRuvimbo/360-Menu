import React from 'react'

import SubContainer from './SubContainer'
import { GlobalState } from '../store'
import './page.css'

export default function Home() {
  return (
    <GlobalState>
      <SubContainer />
    </GlobalState>
  )
}
