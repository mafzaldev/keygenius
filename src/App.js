import "./App.css"
import "./Slider.css"
import { useState, useEffect } from "react"
import Navbar from "./Componenets/Navbar"
import Main from "./Componenets/Main"

function App() {
  const [slider, setSlider] = useState(16)
  const [password, setPassword] = useState("")

  const [upperCase, setUpperCase] = useState(true)
  const [lowerCase, setLowerCase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbols] = useState(true)

  const randomFunc = {
    upperCase: getRandomUpper,
    lowerCase: getRandomLower,
    numbers: getRandomNumber,
    symbols: getRandomSymbol,
  }

  useEffect(() => {
    generatePassword()
    // eslint-disable-next-line
  }, [setPassword])

  function generatePassword() {
    let generatedPassword = ""
    const typesCount = upperCase + lowerCase + numbers + symbols
    const typesArr = [
      { upperCase },
      { lowerCase },
      { numbers },
      { symbols },
    ].filter((item) => Object.values(item)[0])

    if (typesCount === 0) {
      setPassword("")
      return
    }

    for (let i = 0; i < slider; i += typesCount) {
      // eslint-disable-next-line
      typesArr.forEach((type) => {
        const funcName = Object.keys(type)[0]
        generatedPassword += randomFunc[funcName]()
      })
    }
    setPassword(generatedPassword.slice(0, slider))
  }

  function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
  }

  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
  }

  function getRandomNumber() {
    return +String.fromCharCode(Math.floor(Math.random() * 10) + 48)
  }

  function getRandomSymbol() {
    const symbols = "!@#$%^&*(){}[]=<>/,."
    return symbols[Math.floor(Math.random() * symbols.length)]
  }

  return (
    <div className="App">
      <Navbar />
      <Main
        slider={slider}
        setSlider={setSlider}
        password={password}
        setPassword={setPassword}
        upperCase={[upperCase, setUpperCase]}
        lowerCase={[lowerCase, setLowerCase]}
        numbers={[numbers, setNumbers]}
        symbols={[symbols, setSymbols]}
        generatePassword={generatePassword}
      />
    </div>
  )
}

export default App
