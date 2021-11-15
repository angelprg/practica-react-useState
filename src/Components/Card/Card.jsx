import React, { useState } from 'react'
import IncluyeAtole from './IncluyeAtole';
import TamalTypeSelector from './TamalTypeSelector/TamalTypeSelector'

const Card = ({title, body, price}) => {

    const [oaxaqueno, setOaxaqueno] = useState(false);
    const [incluyeAtole, setIncluyeAtole] = useState(false);


    const typePrice = oaxaqueno ? 10 : 0
    const atolePrice = incluyeAtole ? 15 : 0
    const totalPrice = price + typePrice + atolePrice

    return (
        <div style={{border: '1px solid black', margin: '1rem'}}>
            <h2>{title}</h2>
            <div>
                <p>{body}</p>
                <span>{totalPrice}</span>
            </div>
            <TamalTypeSelector oaxaqueno={oaxaqueno} setOaxaqueno={setOaxaqueno} />
            <IncluyeAtole incluyeAtole={incluyeAtole} setIncluyeAtole={setIncluyeAtole} />

        </div>
    )
}

export default Card
