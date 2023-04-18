import React from "react";
import Checkbox from "./Checkbox"
import Button from "./Button"

export default function PassGen(props) {
    const { slider, setSlider, upperCase, lowerCase, numbers, symbols } = props
    return (
        <div className="password-gen" >
            <div className="password-lengthbar">
                <div className="password-length">Password Length: <span className="length-value">{slider}</span></div>
                <div className="password-slider">
                    <input type="range" min="8" max="25" value={slider} className="slider" onChange={e => setSlider(e.target.value)} />
                </div>
                <br />
            </div>
            <div className="combinations">
                <Checkbox id={"uppercase"} name={"uppercase"} value={"uppercase"} isChecked={upperCase[0]} setCheck={upperCase[1]} />
                <Checkbox id={"lowercase"} name={"lowercase"} value={"lowercase"} isChecked={lowerCase[0]} setCheck={lowerCase[1]} />
                <Checkbox id={"numbers"} name={"numbers"} value={"numbers"} isChecked={numbers[0]} setCheck={numbers[1]} />
                <Checkbox id={"symbols"} name={"symbols"} value={"symbols"} isChecked={symbols[0]} setCheck={symbols[1]} />
            </div>
            <Button text={"Generate Password"} onClick={props.generatePassword} />
        </div >
    )
}