import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import validations from "./validations";



const MyFormik = () => {

    const [value, setValue] = useState("")


    const { handleSubmit, handleChange, errors, touched, handleBlur } = useFormik(
        {
            initialValues: {
                name: "",
                email: "",
                gender: "",
                hobies: [],
                country: "",
                password: "",
                confirmPassword: "",
            },
            onSubmit: (values, bag) => {
                console.log(values);
                setValue(values)
                bag.resetForm();
            },
            validationSchema: validations
        }
    );

    return (
        <form onSubmit={handleSubmit}>
            {/* İsim */}
            <input
                type="text"
                name="name"
                placeholder="name"
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <br></br>
            {errors.name && touched.name && <div style={{color:"red"}}>{errors.name}</div>}

            {/* Gmail */}
            <input
                type="text"
                name="email"
                placeholder="email"
                onChange={handleChange}
                onBlur={handleBlur}
            />
            <br></br>
            {errors.email && touched.email && <div style={{color:"red"}}>{errors.email}</div>}

            {/* Cinsiyet */}
            <label>Male</label>
            <input type="radio" name="gender" value="male" onChange={handleChange} />
            <label>Female</label>
            <input
                type="radio"
                name="gender"
                value="female"
                onChange={handleChange}
            />
            <br></br>

            {/* Hobiler */}
            <label>Football</label>
            <input
                type="checkbox"
                name="hobies"
                value="football"
                onChange={handleChange}
            />
            <label>Cinema</label>
            <input
                type="checkbox"
                name="hobies"
                value="cinema"
                onChange={handleChange}
            />
            <label>Photography</label>
            <input
                type="checkbox"
                name="hobies"
                value="photography"
                onChange={handleChange}
            />
            <br></br>

            {/* Ülken */}
            <select name="country" onChange={handleChange}>
                <option value="">- Select Country -</option>
                <option value="tr">Turkey</option>
                <option value="en">England</option>
                <option value="usa">USA</option>
            </select>
            <br></br>

            {/* Şifre */}
            <label>Password</label>
            <br></br>
            <input name="password" onChange={handleChange} onBlur={handleBlur} />
            <br></br>
            {errors.password && touched.password && <div style={{color:"red"}}>{errors.password}</div>}

            {/* Şifre tekrarı */}
            <label>ConfirmPassword</label>
            <br></br>
            <input name="confirmPassword" onChange={handleChange} onBlur={handleBlur} />
            <br></br>
            {errors.confirmPassword && touched.confirmPassword && <div style={{color:"red"}}>{errors.confirmPassword}</div>}

            {/* Son button */}
            <button type="submit"
            >Kayıt Ol</button>
            <button type="reset">Reset</button>
        </form>
    );
};

export default MyFormik;