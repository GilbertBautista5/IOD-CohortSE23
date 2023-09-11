import { useState } from 'react'
import './App.css'
import BigCatsList from './components/BigCats'
import Calculator from './components/calculator'
import Emoji from './components/emoji'
import Cat from './components/SingleCat'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<BigCatsList/>
<Calculator/>
<Emoji/>
<Cat
breed="Cheetah"
type="Cat Family"
colour="Orange"

/>
     
    </>
  )
}

export default App
