import { useState } from 'react'
import './App.css'
import BigCatsList from './components/BigCats'
import Calculator from './components/calculator'
import Emoji from './components/emoji'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<BigCatsList/>
<Calculator/>
<Emoji/>
     
    </>
  )
}

export default App
