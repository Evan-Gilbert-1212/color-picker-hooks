import React, { useState, useEffect } from 'react'

const App = () => {
  const [hue, setHue] = useState(Math.floor(Math.random() * 360))
  const [saturation, setSaturation] = useState(Math.floor(Math.random() * 100))
  const [light, setLight] = useState(Math.floor(Math.random() * 100))
  const [alpha, setAlpha] = useState(1)
  const [bgColor, setBackGroundColor] = useState(
    `hsla(${hue},${saturation}%,${light}%,${alpha})`
  )

  const updateHue = (e) => {
    const newHue = e.target.value
    setHue(newHue)
  }

  const updateSaturation = (e) => {
    const newSaturation = e.target.value
    setSaturation(newSaturation)
  }

  const updateLight = (e) => {
    const newLight = e.target.value
    setLight(newLight)
  }

  const updateAlpha = (e) => {
    const newAlpha = e.target.value
    setAlpha(newAlpha)
  }

  const newRandomColor = () => {
    setHue(Math.floor(Math.random() * 360))
    setSaturation(Math.floor(Math.random() * 100))
    setLight(Math.floor(Math.random() * 100))
  }

  useEffect(() => {
    const newColor = `hsla(${hue},${saturation}%,${light}%,${alpha})`
    setBackGroundColor(newColor)
  }, [hue, saturation, light, alpha])

  return (
    <>
      <main>
        <section className="color-section">
          <h2>Color</h2>
          <input
            className="current-color"
            style={{
              backgroundColor: { bgColor },
            }}
          ></input>
          <input className="background-image"></input>
          <h4>{bgColor}</h4>
          <button className="random-button" onClick={newRandomColor}>
            Random Color
          </button>
        </section>
        <section className="color-selectors">
          <div className="color-sliders">
            <article>
              <h3>Hue</h3>
              <input
                type="range"
                min="0"
                max="360"
                value={hue}
                className="slider-Hue"
                onChange={updateHue}
              ></input>
            </article>
            <article>
              <h3>Saturation</h3>
              <input
                type="range"
                min="0"
                max="100"
                value={saturation}
                className="slider-Saturation"
                onChange={updateSaturation}
              ></input>
            </article>
            <article>
              <h3>Light</h3>
              <input
                type="range"
                min="0"
                max="100"
                value={light}
                className="slider-Light"
                onChange={updateLight}
              ></input>
            </article>
            <article>
              <h3>Alpha</h3>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={alpha}
                className="slider-Alpha"
                onChange={updateAlpha}
              ></input>
            </article>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
