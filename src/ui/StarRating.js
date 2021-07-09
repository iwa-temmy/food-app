import React from 'react'
import {BsFillStarFill} from 'react-icons/bs'
const StarRating = ({count, value, inactiveColor='#ddd', size=40, activeColor='#f00', onChange}) => {

    const stars = Array.from({length: count}, () => <BsFillStarFill />)

    const handleChange = (value) => {
        onChange(value + 1)
    }
    return (
        <div>
            {stars.map((s, index) => {
                let style = inactiveColor
                if (index < value){
                    style = activeColor
                }
                return (
                    <span className={"star"} key={index}
                    style={{color: style, width:size, height: size}}
                    onClick={() => handleChange(index)}
                    > {s}
                    </span>
                )
            })}
        </div>
    )
}

export default StarRating
