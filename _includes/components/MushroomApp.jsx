// _includes/components/GlassCounter.jsx
import React, { useState } from 'react'
import Form from './Form'
import Mushroom from './Mushroom'

function MushroomApp() {
  // Declare a new state variable, which we'll call "count"
  const [bgColor, setBgColor] = useState('#fff')
  const [fgColor, setFgColor] = useState('#000')
  const [shape, setShape] = useState(1)
  
  return (
    <div>
      <Form changeShape={setShape} changeFgColor={setFgColor} changeBgColor={setBgColor} />
      <Mushroom bgColor={bgColor} fgColor={fgColor} shape={shape} />
    </div>
  )
}

export default MushroomApp