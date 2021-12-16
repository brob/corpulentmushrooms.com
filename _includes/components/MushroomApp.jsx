// _includes/components/GlassCounter.jsx
import React, { useState } from 'react'
import Form from './Form'
import Mushroom from './Mushroom'

function MushroomApp() {
  // Declare a new state variable, which we'll call "count"
  const [bgColor, setBgColor] = useState('#ff7777')
  const [fgColor, setFgColor] = useState('#fff')
  const [shape, setShape] = useState(1)
  
  return (
    <div className="app-container">
      <Mushroom bgColor={bgColor} fgColor={fgColor} shape={shape} />
      <Form bgColor={bgColor} fgColor={fgColor} shape={shape} changeShape={setShape} changeFgColor={setFgColor} changeBgColor={setBgColor} />
    </div>
  )
}

export default MushroomApp