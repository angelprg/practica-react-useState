import React from 'react'

const SaborAtole = ({setSabor}) => {

    return (
        <div>
            <select onChange={(event) => setSabor(event.target.value)}>
                <option>chocolate</option>
                <option>fresa</option>
                <option>cajeta</option>
            </select>
        </div>
    )
}

export default SaborAtole
