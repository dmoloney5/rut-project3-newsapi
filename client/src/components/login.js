import React, { useState } from 'react';


const LoginForm = () => {
    const [userFormData, setUserFormData] = useState({ email: '', password: ''});
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
    }
    return (
        <div className = 'Login'>
            <h1>Login</h1>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" required onBlur={handleChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="text" name="password" required onBlur={handleChange} />
                </div>
                {showAlert && (
                    <div>
                        <p className="err-alert">{showAlert}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}