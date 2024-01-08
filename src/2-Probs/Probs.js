import Car from "./Car"

const Probs = () => {

    const myElement = <Car brand="Ford"/>

    let varible = "Mustang"
    const myElement2 = <Car brand={varible}/>

    const carİnfo = {
        name:"Ford",
        model:"Mustang"
    }
    const myElement3 = <Car brand={carİnfo}/>


    // const person = {
    //     name:"Barış",
    //     age:14,
    //     location:"İstanbul"
    // }
    // const myCar = {
    //     carName:"Ford",
    //     carAge:5,
    //     model:"Mustang"
    // }
    // const myProbs = {
    //     person,
    //     myCar
    // }
    // const myElement4 = <Car definition= {myProbs}/>
    // ÇALIŞ
    return (
        <div>
            {myElement}
            {myElement2}
            {myElement3}
        </div>
    )
}
export default Probs