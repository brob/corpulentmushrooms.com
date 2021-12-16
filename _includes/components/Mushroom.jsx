import React, { useState } from 'react'

function Mushroom({bgColor, fgColor, shape}) {
    return (<>
        <h1>Mushroom</h1>
        <h2>Vars</h2>
        <div className="mushroom">
            <div style={{backgroundColor: bgColor, borderRadius: `var(--radius-blob-${shape}` }} className="cap">
                <div style={{backgroundColor: fgColor}} className="spot"></div>
            </div>
            <div className="stem"></div>
        </div>

    </>)
}

export default Mushroom;