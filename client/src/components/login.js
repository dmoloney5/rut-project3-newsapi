import React, { useState } from 'react';


const LoginForm = () => {
    const [userFormData, setUserFormData] = useState({ email: '', password: ''});
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (event) => {
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
                <label>Email</label>
                <input type="text" name="email" required />
                <label>Password</label>
                <input type="text" name="password" required />
            </form>
        </div>
    )
}