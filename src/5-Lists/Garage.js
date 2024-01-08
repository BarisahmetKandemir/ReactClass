import React from 'react'
import Car from './Car'

const Garage = () => {
    const cars = ["Ford", "BMW", "Audi"]

    const cars2 = [
        { id: 1, brand: "Ford" },
        { id: 2, brand: "BMW" },
        { id: 3, brand: "Audi" }
    ]

    return (
        <div>
            <ul>
                {
                    cars.map((car, value) => { <Car key={value} brand={car} value={value}/> })
                }
            </ul>

            {/* 2.UL */}
            <ul>
                {
                    cars2.map((car, value) => <Car key={car.id} brand={car.brand} value={value} />)
                }
            </ul>

        </div>
    )
}

export default Garage