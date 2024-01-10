import React, { useState } from 'react';

const Forms = () => {
    // 1. ÖRNEK
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`The name you entered was: ${name}`);
    };

    // 2. ÖRNEK
    const [inputs, setInputs] = useState({
        username: '',
        age: '',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit2 = (event) => {
        event.preventDefault();
        console.log(inputs);
    };

    // 3.ÖRNEK
    const [myCar,setMyCar] = useState()
    
    const handleChange2 = (event) => {
        setMyCar(event.target.value)
    }

    return (
        <div>
            {/* 1. ÖRNEK */}
            <form onSubmit={handleSubmit}>
                <label>
                    Enter your name:
                    <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
                </label>
                <input type="submit" />
            </form><br/>


            {/* 2. ÖRNEK */}
            <form onSubmit={handleSubmit2}>
                <label>
                    Enter your name:
                </label>
                <input
                    type="text"
                    name="username"
                    value={inputs.username || ""}
                    onChange={handleChange}
                />

                <label>Enter your age:</label>
                <input
                    type="number"
                    name="age"
                    value={inputs.age || ""}
                    onChange={handleChange}
                />
                <input type="submit" />
            </form><br/><br/>


            {/* 3.ÖRNEK */}
            <form>
                <select value={myCar} onChange={handleChange2}>
                    <option value="Ford">Ford</option>
                    <option value="Volvo">Volvo</option>
                    <option value="Fiat">Fiat</option>
                </select>
            </form>

        </div>
    );
};

export default Forms;

