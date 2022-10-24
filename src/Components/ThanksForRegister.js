import React from 'react'
import { Button } from "./BasicComponents/Button"

function ThanksForRegister() {
    return (
        <div className='TFR-background'>
            <div className='container TFR-cointainer'>
                <h3 className='TFR-title'>Grazie per esservi iscritti alla nostra Newsletter!</h3>
                <Button className='TFR-button' buttonSize="BTN--large" buttonStyle="btn--primary--green">Torna alla Home</Button>
            </div>
        </div>
    )
}

export default ThanksForRegister