import React, { useState } from 'react'

function Form({changeShape, changeFgColor, changeBgColor}) {

    return (<>
        <form onSubmit={e => {
            e.preventDefault()
            const form = e.target
            const [formBg, formFg] = Array.from(form.querySelectorAll('input')).map(input => input.value.split("#")[1])
            const shape = form.querySelector('select').value
            const url = `/mushroom/saved/${formBg}/${formFg}/${shape}/`
            window.location.href = url;

        }} action="/mushroom/" className="colors">
            <h4 style={{textAlign: "inline-end"}}>Make your mushroom</h4>
            <label htmlFor="bgcolor">Cap Background * 
                <input onInput={e => changeBgColor(e.target.value)} required defaultValue="" type="color" name="bgcolor" />
            </label>
            <label htmlFor="bgcolor">Cap Spot Color * 
                <input onInput={e => changeFgColor(e.target.value)} required defaultValue="" type="color" name="fgcolor" />
            </label>
            <label htmlFor="shape">Cap Shape 
                <select onInput={e => changeShape(e.target.value)} defaultValue="" name="shape">
                    <option value="1">Select a shape</option>
                    {[1,2,3,4,5].map(option => {
                        return <option key={option} value={option}>Shape {option}</option>
                    })}
                </select>
            </label>
            <button type="submit">Make my mushroom</button>
        </form>
        </>
    )
}

export default Form